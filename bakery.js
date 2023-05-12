const form = document.querySelector('form');
const resultsList = document.querySelector('#results');

form.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = e.target.querySelector('input').value;
  fetch(`https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=San+Francisco`, {
    headers: {
      Authorization: 'Bearer YOUR_API_KEY_HERE'
    }
  })
    .then(response => response.json())
    .then(data => {
      resultsList.innerHTML = '';
      data.businesses.forEach(business => {
        const li = document.createElement('li');
        li.textContent = business.name;
        resultsList.appendChild(li);
      });
    });
});
