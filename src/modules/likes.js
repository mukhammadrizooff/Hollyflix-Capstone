const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'MryrGqfCiLUJUEbyrBie';

const addLike = async (id) => {
  const connect = await fetch(`${baseURL}${appID}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
  const response = await connect.text();
  return response;
};

const getLike = async () => {
  const connect = await fetch(`${baseURL}${appID}/likes/`);
  const response = await connect.json();
  return response;
};

const updateLikes = () => {
  getLike(appID).then((response) => {
    response.forEach((element) => {
      const container = document.getElementById(`${element.item_id}`);
      //   console.log(container.children[1].children[1].children[2])
      //    container.children[1].children[1].children[2].innerHTML =
      container.innerHTML = `${element.likes} Likes`;
    });
  });
};

export { updateLikes, addLike };
