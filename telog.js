const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  const username = form.querySelector('#username').value;
  


  if (username.length === 0) {
    event.preventDefault();
    alert('Please fill in all fields.');
  }
});
