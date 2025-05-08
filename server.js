const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "_" + file.originalname;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage });

// Helpers
const readJSON = (filename) => {
  const filePath = path.join(__dirname, filename);
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]");
  return JSON.parse(fs.readFileSync(filePath));
};

const writeJSON = (filename, data) => {
  const filePath = path.join(__dirname, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const getUsers = () => readJSON("user.json");
const getEvents = () => readJSON("events.json");
const getRegistrations = () => readJSON("registrations.json");
const writeRegistrations = (data) => writeJSON("registrations.json", data);

// Routes

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) res.json(user);
  else res.status(401).json({ message: "Invalid username or password" });
});

app.get("/api/users/:id", (req, res) => {
  const user = getUsers().find((u) => u.id === parseInt(req.params.id));
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
});

app.put("/api/users/:id", upload.single("avatar"), (req, res) => {
  const users = getUsers();
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "User not found" });

  const user = users[index];

  const { name, email, username, password } = req.body;

  // Update fields if provided
  if (name) user.name = name;
  if (email) user.email = email;
  if (username) user.username = username;
  if (password) user.password = password;

  // Handle avatar upload
  if (req.file) {
    user.avatar = `/uploads/${req.file.filename}`;
  }

  users[index] = user;
  writeJSON("user.json", users);
  res.json(user);
});


app.post("/api/events", upload.single("document"), (req, res) => {
  const events = getEvents();
  const users = getUsers();
  const { eventName, date, note, userId } = req.body;

  if (!eventName || !date || !userId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const submittingUser = users.find((u) => u.id === parseInt(userId));
  if (!submittingUser || submittingUser.role !== "club_head") {
    return res.status(400).json({ message: "Only club heads can submit events" });
  }

  const clubName = submittingUser.club;
  const assignedFaculty = users.find(
    (u) => u.role === "faculty" && u.assignedClub === clubName
  );
  if (!assignedFaculty) {
    return res.status(400).json({ message: "No faculty assigned to this club" });
  }

  const newEvent = {
    id: Date.now(),
    eventName,
    date,
    note: note || "",
    status: "Pending",
    feedback: "-",
    document: req.file ? `/uploads/${req.file.filename}` : null,
    submittedBy: parseInt(userId),
    assignedFacultyId: assignedFaculty.id,
    club: clubName
  };

  events.push(newEvent);
  writeJSON("events.json", events);
  res.json({ message: "Event submitted", event: newEvent });
});

app.post("/api/events/:eventId/publish", (req, res) => {
  const { venue, time, description } = req.body;
  const eventId = parseInt(req.params.eventId);
  const events = getEvents();
  const event = events.find((e) => e.id === eventId);

  if (!event) return res.status(404).json({ message: "Event not found" });
  if (event.status !== "Approved") return res.status(400).json({ message: "Only approved events can be published" });

  const users = getUsers();
  const submittingUser = users.find((user) => user.id === event.submittedBy);

  if (!submittingUser || submittingUser.role !== "club_head") {
    return res.status(400).json({ message: "Invalid user, club head expected" });
  }

  event.status = "Published";
  event.venue = venue;
  event.time = time;
  event.description = description;
  event.club = submittingUser.club;

  writeJSON("events.json", events);
  res.json({ message: "Event published to student calendar", event });
});

app.post("/api/events/:eventId/registration-notice", (req, res) => {
  const { eventId } = req.params;
  const { title, date, time, venue, link, capacity } = req.body;

  const events = getEvents();
  const event = events.find(e => e.id === parseInt(eventId));
  if (!event || event.status !== "Published") {
    return res.status(400).json({ message: "Event must be published before registration" });
  }

  const registrations = getRegistrations();

  const newNotice = {
    id: Date.now(),
    eventId: event.id,
    title,
    date,
    time,
    venue,
    link,
    capacity: parseInt(capacity),
    club: event.club
  };

  registrations.push(newNotice);
  writeRegistrations(registrations);
  res.json({ message: "Registration notice created", notice: newNotice });
});

app.get("/api/registration-notices", (req, res) => {
  const registrations = getRegistrations();
  res.json(registrations);
});

app.get("/api/events/:facultyId", (req, res) => {
  const facultyId = parseInt(req.params.facultyId);
  const events = getEvents().filter((e) => e.assignedFacultyId === facultyId);
  res.json(events);
});

app.post("/api/events/:eventId/approve", (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const events = getEvents();
  const event = events.find((e) => e.id === eventId);

  if (!event) return res.status(404).json({ message: "Event not found" });

  event.status = "Faculty Approved";
  writeJSON("events.json", events);
  res.json({ message: "Event approved by faculty", event });
});

app.post("/api/events/:eventId/management-approve", (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const events = getEvents();
  const event = events.find((e) => e.id === eventId);

  if (!event) return res.status(404).json({ message: "Event not found" });

  event.status = "Approved";
  writeJSON("events.json", events);
  res.json({ message: "Event approved by management", event });
});

app.post("/api/events/:eventId/reject", (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const events = getEvents();
  const event = events.find((e) => e.id === eventId);

  if (!event) return res.status(404).json({ message: "Event not found" });

  event.status = "Rejected";
  writeJSON("events.json", events);
  res.json({ message: "Event rejected", event });
});

app.post("/api/events/:eventId/feedback", (req, res) => {
  const { feedback } = req.body;
  const eventId = parseInt(req.params.eventId);
  const events = getEvents();
  const event = events.find((e) => e.id === eventId);

  if (!event) return res.status(404).json({ message: "Event not found" });

  event.feedback = feedback;
  event.status = "Feedback Sent";
  writeJSON("events.json", events);
  res.json({ message: "Feedback sent", event });
});

app.get("/api/events", (req, res) => {
  const events = getEvents();
  res.json(events);
});

app.get("/api/management/events", (req, res) => {
  const events = getEvents();
  const approvedByFaculty = events.filter(
    (e) => e.status === "Faculty Approved"
  );
  res.json(approvedByFaculty);
});

app.get("/api/published-events", (req, res) => {
  const events = getEvents();
  const published = events
    .filter(e => e.status === "Published")
    .map(e => ({
      id: e.id,
      title: e.eventName,
      start: e.date,
      description: e.description || '',
      venue: e.venue || '',
      time: e.time || '',
      club: e.club || ''
    }));
  res.json(published);
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
