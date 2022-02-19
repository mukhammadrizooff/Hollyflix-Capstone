const baseUrl = 'https://api.tvmaze.com/';

const getMovies = async () => {
  const response = fetch(`${baseUrl}shows`)
    .then((response) => response.json())
    .then((data) => {
      const slicedArr = data.slice(0, 50);
      const newArr = slicedArr.map((item) => {
        const container = {
          id: item.id,
          name: item.name,
          genres: item.genres,
          image: item.image,
          end: item.ended,
          rating: item.rating,
          summary: item.summary,
        };

        return container;
      });
      return newArr;
    });

  return response;
};

export default getMovies;
