document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  // Load events submitted by this club head
  fetch("/api/events")
    .then(res => res.json())
    .then(events => {
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";

      const myEvents = events.filter(e => parseInt(e.submittedBy) === parseInt(user.id));

      if (myEvents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6">No events submitted yet.</td></tr>`;
        return;
      }

      myEvents.forEach(e => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${e.eventName}</td>
          <td>${e.date}</td>
          <td>${e.status}</td>
          <td>${e.feedback}</td>
          <td>${e.document ? `<a href="${e.document}" target="_blank">📎 View</a>` : "-"}</td>
          <td>
            ${e.status === "Approved" ? `
              <button onclick="togglePublishForm(this) " class="publish-btn">Publish</button>
              <div class="publish-box" style="display: none; margin-top: 5px;">
                <input type="text" placeholder="Venue" class="venue-input" /><br/>
                <input type="time" class="time-input" /><br/>
                <input type="text" placeholder="Description" class="desc-input" /><br/>
                <button onclick="publishEvent(${e.id}, this)">✅ Confirm Publish</button>
              </div>
            ` : e.status === "Published" ? "✅ Published" : "-"}
          </td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(err => {
      console.error("Error fetching events:", err);
      alert("Failed to load events.");
    });

  // Event submission logic
  const form = document.querySelector(".event-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("eventName", form.elements[0].value);
    formData.append("date", form.elements[1].value);
    formData.append("note", form.elements[2].value);
    formData.append("document", form.elements[3].files[0]);
    formData.append("userId", user.id);

    fetch("/api/events", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.event) {
          alert("✅ Event submitted!");
          location.reload();
        } else {
          alert("❌ Failed to submit event. " + (data.message || ""));
        }
      })
      .catch(err => {
        console.error("Error submitting event:", err);
        alert("❌ Failed to submit event.");
      });
  });
});

// Toggle the visibility of the publish form
function togglePublishForm(button) {
  const box = button.nextElementSibling;
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function publishEvent(eventId, btn) {
  const container = btn.parentElement;
  const venue = container.querySelector(".venue-input").value;
  const time = container.querySelector(".time-input").value;
  const description = container.querySelector(".desc-input").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (!venue || !time || !description) {
    alert("Please fill in all fields.");
    return;
  }

  fetch(`/api/events/${eventId}/publish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      venue,
      time,
      description,
      club: user.club 
    })
  })
    .then(res => res.json())
    .then(data => {
      alert("📢 Event published successfully!");
      location.reload();
    })
    .catch(err => {
      console.error("Publish error:", err);
      alert("❌ Failed to publish event.");
    });
}
