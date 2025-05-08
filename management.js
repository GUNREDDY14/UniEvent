document.addEventListener("DOMContentLoaded", () => {
    // Fetch events that are Faculty Approved
    fetch("/api/management/events")
      .then((res) => res.json())
      .then((events) => {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; // Clear the existing content
  
        // Filter only events that are Faculty Approved (awaiting management approval)
        const approvedEvents = events.filter(
          (e) => e.status === "Faculty Approved"
        );
  
        if (approvedEvents.length === 0) {
          tbody.innerHTML = `<tr><td colspan="4">No faculty-approved events yet.</td></tr>`;
        }
  
        approvedEvents.forEach((event) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${event.eventName}</td>
            <td>${event.date}</td>
            <td>${event.status}</td>
            <td>
              <p><strong>Note:</strong> ${event.note || "No note"}</p>
              ${event.document ? `<a href="${event.document}" target="_blank">📎 View Document</a><br><br>` : ""}
              <button onclick="approveEvent(${event.id})">✅ Approve</button>
              <button onclick="rejectEvent(${event.id})" class="reject">❌ Reject</button>
              <button class="resend-btn" onclick="toggleResend(this)">🔁 Resend</button>
              <div class="resend-box" style="display:none;">
                  <input type="text" placeholder="Enter required changes..." />
                  <button onclick="sendFeedback(${event.id}, this)">📨 Send Feedback</button>
              </div>
            </td>
          `;
          tbody.appendChild(row);
        });
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        alert("Failed to load events.");
      });
  });
  
  // Approve the event (final management approval)
  function approveEvent(eventId) {
    fetch(`/api/events/${eventId}/management-approve`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("✅ Event approved by management!");
        location.reload(); // Reload to show the updated status
      })
      .catch((err) => {
        console.error("Approval error:", err);
        alert("Error approving event.");
      });
  }
  
  // Reject the event
  function rejectEvent(eventId) {
    fetch(`/api/events/${eventId}/reject`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("❌ Event rejected by management!");
        location.reload(); // Reload to reflect changes
      })
      .catch((err) => {
        console.error("Rejection error:", err);
        alert("Error rejecting event.");
      });
  }
  
  // Toggle the resend feedback box visibility
  function toggleResend(button) {
    const box = button.nextElementSibling;
    box.style.display = box.style.display === "block" ? "none" : "block";
  }
  
  // Send feedback for a rejected event
  function sendFeedback(eventId, btn) {
    const input = btn.previousElementSibling;
    const feedback = input.value.trim();
    if (!feedback) return alert("Please enter feedback.");
  
    fetch(`/api/events/${eventId}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("📨 Feedback sent!");
        location.reload(); // Reload to update the status
      })
      .catch((err) => {
        console.error("Feedback error:", err);
        alert("Error sending feedback.");
      });
  }
  