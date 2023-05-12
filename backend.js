const form = document.getElementById('reservation-form');
const responseDiv = document.getElementById('response');

// Add event listener to the form submit button
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const partySize = document.getElementById('party-size').value;
  const comments = document.getElementById('comments').value;

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Set the POST request URL and content type header
  xhr.open('POST', 'reservation.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Set the onload event handler
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Clear the form inputs
      form.reset();

      // Display the success message
      responseDiv.innerHTML = 'Reservation request submitted successfully.';
      responseDiv.style.color = 'green';
    } else {
      // Display the error message
      responseDiv.innerHTML = 'Error submitting reservation request. Please try again.';
      responseDiv.style.color = 'red';
    }
  };

  // Set the onerror event handler
  xhr.onerror = function() {
    // Display the error message
    responseDiv.innerHTML = 'Error submitting reservation request. Please try again.';
    responseDiv.style.color = 'red';
  };

  // Encode the form data into a URL-encoded string
  const data = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&party-size=${encodeURIComponent(partySize)}&comments=${encodeURIComponent(comments)}`;

  // Send the POST request with the encoded form data
  xhr.send(data);
});