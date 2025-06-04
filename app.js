function createTicket() {
  const subject = document.getElementById('subject').value;
  const description = document.getElementById('description').value;

  Intercom('getVisitorId', function(visitorId) {
    fetch('https://YOUR-WORKER-URL.workers.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: subject,
        description: description,
        requester_email: 'placeholder@example.com', // You can replace this dynamically if you fetch user email via Intercom identity
        visitor_id: visitorId
      })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = 'Ticket created with ID: ' + data.id;
    })
    .catch(error => {
      console.error('Error creating ticket:', error);
    });
  });
}
