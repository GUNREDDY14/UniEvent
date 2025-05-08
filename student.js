document.addEventListener('DOMContentLoaded', async function () {
    const calendarEl = document.getElementById('calendar');
    const eventListEl = document.getElementById('event-list');
  
    // Modal elements
    const modal = document.getElementById('event-modal');
    const closeButton = modal.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalTime = document.getElementById('modal-time');
    const modalVenue = document.getElementById('modal-venue');
    const modalClub = document.getElementById('modal-club');
    const modalDescription = document.getElementById('modal-description');
  
    let events = [];
  
    // Fetch events
    try {
      const res = await fetch('/api/published-events');
      if (!res.ok) throw new Error('Failed to fetch');
      events = await res.json();
    } catch (err) {
      console.error("⚠️ Failed to fetch published events:", err);
      eventListEl.innerHTML = '<p class="text-red-500">Unable to load events. Please try again later.</p>';
      return;
    }
  
    // Render event list for visible calendar range
    function renderEventList(start, end) {
      const visibleEvents = events.filter(e => {
        const eventDate = new Date(e.start);
        return eventDate >= start && eventDate < end;
      });
  
      if (visibleEvents.length > 0) {
        eventListEl.innerHTML = `
          <h3>📋 Events in this view:</h3>
          <ul>
            ${visibleEvents.map(ev => `
              <li class="mb-2 border-b pb-2">
                <strong>${ev.title}</strong><br>
                📅 ${new Date(ev.start).toDateString()}<br>
                🕒 ${ev.time || 'N/A'}<br>
                📍 ${ev.venue || 'N/A'}<br>
                 Conducted by: ${ev.club || 'N/A'}<br>
                 Description : ${ev.description || 'No description'}
              </li>
            `).join('')}
          </ul>`;
      } else {
        eventListEl.innerHTML = `
          <h3> Events in this view:</h3>
          <p>No events scheduled.</p>`;
      }
    }
  
    // Initialize FullCalendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      height: 'auto',
      events: events,
      eventClick: function (info) {
        const { title, start, extendedProps } = info.event;
  
        modalTitle.textContent = title || 'Untitled Event';
        modalDate.textContent = new Date(start).toDateString();
        modalTime.textContent = extendedProps.time || 'N/A';
        modalVenue.textContent = extendedProps.venue || 'N/A';
        modalClub.textContent = extendedProps.club || 'N/A';
        modalDescription.textContent = extendedProps.description || 'No description available.';
  
        modal.classList.remove('hidden');
      },
      datesSet: function (dateInfo) {
        renderEventList(dateInfo.start, dateInfo.end);
      }
    });
  
    calendar.render();
  
    // Modal close behavior
    closeButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
  