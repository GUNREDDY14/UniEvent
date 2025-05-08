let currentUser = null;

// Simulate login or load existing session
if (!localStorage.getItem("userId")) {
  fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "student01", password: "pass123" })
  })
    .then(res => {
      if (!res.ok) throw new Error("Login failed");
      return res.json();
    })
    .then(user => {
      localStorage.setItem("userId", user.id);
      loadProfile(user.id);
    })
    .catch(() => alert("Login failed"));
} else {
  loadProfile(localStorage.getItem("userId"));
}

function loadProfile(id) {
  fetch(`/api/users/${id}`)
    .then(res => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then(user => {
      currentUser = user;

      // Display profile info
      document.getElementById("name").textContent = user.name;
      document.getElementById("email").textContent = user.email;
      document.getElementById("username").textContent = user.username;
      document.getElementById("avatar").src = user.avatar || "default.png";

      // Fill edit form fields
      document.getElementById("edit-name").value = user.name;
      document.getElementById("edit-email").value = user.email;
      document.getElementById("edit-username").value = user.username;
      document.getElementById("edit-password").value = "";
      document.getElementById("edit-avatar").value = "";
    })
    .catch(() => alert("Failed to load profile"));
}

function openEditForm() {
  document.getElementById("edit-form").style.display = "block";
}

function cancelEdit() {
  document.getElementById("edit-form").style.display = "none";
}

function saveProfile() {
  const name = document.getElementById("edit-name").value.trim();
  const email = document.getElementById("edit-email").value.trim();
  const username = document.getElementById("edit-username").value.trim();
  const password = document.getElementById("edit-password").value.trim();
  const avatarFile = document.getElementById("edit-avatar").files[0];

  if (!name || !email || !username) {
    alert("Please fill in all required fields.");
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("username", username);
  if (password) formData.append("password", password);
  if (avatarFile) formData.append("avatar", avatarFile);

  const id = localStorage.getItem("userId");

  fetch(`/api/users/${id}`, {
    method: "PUT",
    body: formData
  })
    .then(res => {
      if (!res.ok) throw new Error("Update failed");
      return res.json();
    })
    .then(user => {
      alert("Profile updated!");
      cancelEdit();
      loadProfile(user.id);
    })
    .catch(() => alert("Failed to update profile"));
}
