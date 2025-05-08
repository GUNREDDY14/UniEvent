document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.role !== "faculty") {
    window.location.href = "index.html"; // If not logged in as faculty, redirect
    return;
  }

  // Fetch events that need approval for the faculty
  fetch(`/api/events/${user.id}`)
    .then(res => res.json())
    .then(events => {
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = ""; // Clear the existing content

      // If no events are returned, show a message
      if (events.length === 0) {
        const row = `
          <tr>
            <td colspan="5">No pending events for approval.</td>
          </tr>
        `;
        tbody.innerHTML = row;
        return;
      }

      // Loop through the events and create table rows dynamically
      events.forEach(event => {
        const row = `
          <tr data-event-id="${event.id}">
            <td>${event.eventName}</td>
            <td>${event.date}</td>
            <td>${event.note || "No note provided"}</td>
            <td><a href="${event.document}" target="_blank">📎 View Doc</a></td>
            <td>
              <button class="approve-btn">✅ Approve</button>
              <button class="reject-btn">❌ Reject</button>
              <button class="resend-btn" onclick="toggleResend(this)">🔁 Resend</button>
              <div class="resend-box" style="display:none;">
                <input type="text" placeholder="Enter required changes..." class="feedback-input">
                <button class="send-feedback">📨 Send Feedback</button>
              </div>
            </td>
          </tr>
        `;
        tbody.insertAdjacentHTML("beforeend", row);
      });

      // Handle approval/rejection/feedback
      document.querySelectorAll(".approve-btn").forEach(button => {
        button.addEventListener("click", approveEvent);
      });

      document.querySelectorAll(".reject-btn").forEach(button => {
        button.addEventListener("click", rejectEvent);
      });

      document.querySelectorAll(".send-feedback").forEach(button => {
        button.addEventListener("click", sendFeedback);
      });
    })
    .catch(error => console.error("Error fetching events:", error));

  // Function to approve event
  function approveEvent(e) {
    const eventId = e.target.closest("tr").dataset.eventId;
    fetch(`/api/events/${eventId}/approve`, { method: "POST" })
      .then(res => res.json())
      .then(data => {
        alert("✅ Event approved by faculty!");
        location.reload(); // Reload to refresh the event status
      })
      .catch(error => {
        console.error("Error approving event:", error);
        alert("Error approving event.");
      });
  }

  // Function to reject event
  function rejectEvent(e) {
    const eventId = e.target.closest("tr").dataset.eventId;
    fetch(`/api/events/${eventId}/reject`, { method: "POST" })
      .then(res => res.json())
      .then(data => {
        alert("❌ Event rejected!");
        location.reload(); // Reload to refresh the event status
      })
      .catch(error => {
        console.error("Error rejecting event:", error);
        alert("Error rejecting event.");
      });
  }

  // Function to send feedback
  function sendFeedback(e) {
    const feedbackInput = e.target.closest("tr").querySelector(".feedback-input");
    const feedback = feedbackInput.value.trim();
    const eventId = e.target.closest("tr").dataset.eventId;

    if (!feedback) {
      alert("Please provide feedback before sending!");
      return;
    }

    fetch(`/api/events/${eventId}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ feedback })
    })
      .then(res => res.json())
      .then(data => {
        alert("📨 Feedback sent to the club!");
        location.reload(); // Reload to refresh the event status
      })
      .catch(error => {
        console.error("Error sending feedback:", error);
        alert("Error sending feedback.");
      });
  }

  // Toggle the resend feedback box visibility
  window.toggleResend = function(button) {
    const box = button.nextElementSibling;
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  };
});
