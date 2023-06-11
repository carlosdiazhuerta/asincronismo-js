import fetch from "node-fetch";
const Api = "https://api.escuelajs.co/api/v1/";

async function postData(urlApi, data) {
  const response = await fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  title: "casa nueva",
  price: 1000,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"]
};

postData(`${Api}products`, data)
  .then(response => response.json())
  .then(data => console.log(data));
