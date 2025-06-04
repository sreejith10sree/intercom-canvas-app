document.getElementById("ticketForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const subject = document.getElementById("subject").value;
  const description = document.getElementById("description").value;

  const payload = {
    ticket_subject: subject,
    ticket_description: description
  };

  // Submit via Intercom canvas submit API
  Intercom('submit', payload);
});
