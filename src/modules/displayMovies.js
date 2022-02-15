const displayMovies = (data) => {
  const moviesSection = document.querySelector('.cards');

  data.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
         <div class="card__image-container">
           <img src=${item.image.medium}
             alt="ant-man">
         </div>
         <div class="card__content">
           <p class="card__title text--medium">
            ${item.name}
           </p>
           <div class="card__info">
             <button class="card__comments text--medium">Comments</button>
             <button class="card__reservations">Reservations</button>
             <button class=" card__likes text--medium">Likes</button>
           </div>
         </div>
         `;

    moviesSection.appendChild(card);
  });
};

export default displayMovies;
