const counter = (movies) => {
  let movieCount = 0;
  movies.forEach(() => {
    movieCount += 1;
  });
  return movieCount;
};

const displayCount = (count) => {
  const navList = document.querySelector('.nav-list');

  const li = document.createElement('li');

  li.innerHTML = ` <li class="nav-item">(${count})Movies</li>`;

  navList.appendChild(li);
};

const countMovies = (movies) => {
  const num = counter(movies);
  displayCount(num);
};

export { counter, displayCount, countMovies };
