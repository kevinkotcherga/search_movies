import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const searchMovies = (query) => {
      fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
        .then(response => response.json())
        .then((data) => {
          data.Search.forEach((result) => {
            const movie = `<li class="list-inline-item">
              <img src="${result.Poster}" alt="">
              <p>${result.Title}</p>
            </li>`;
            results.insertAdjacentHTML("beforeend", movie);
          });
        });
    };

    const form = document.querySelector('#search-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // <-- to prevent <form>'s native behaviour
      const input = event.currentTarget.querySelector('.form-control');
      results.innerHTML = '';
      searchMovies(input.value);
    });
  }
}
