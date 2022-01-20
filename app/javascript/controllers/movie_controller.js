import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const searchMovies = (query) => {
      fetch(`http://www.omdbapi.com/?s=${query}&apikey=b8c7e6de`)
        .then(response => response.json())
        .then((data) => {
          data.Search.forEach((result) => {
            const movie =
            `<li class="list-inline-item">
                <div class="card" style="width: 18rem; height: 500px; padding: 10px; margin: 10px;">
                <img src="${result.Poster}"style="height: 400px;" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">${result.Title}</p>
                  </div>
                </div>
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
