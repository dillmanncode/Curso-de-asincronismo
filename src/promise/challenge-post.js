import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData (urlApi, data) {
    const response = fetch(urlApi, {
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
    "title": "227",
    "price": 227,
    "description": "A description of product",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));

// UPDATE
// function putData(urlApi, updateData) {
//     const response = fetch(urlApi, {
//         method: "PUT",
//         mode: "cors",
//         credentials: "same-origin",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(updateData)
//     });
//     return response;
// }

// const updateData = {
//     "title": "228",
//     "price": 228
// }

// putData(`${API}/products/228`, updateData)
//     .then(response => response.json())
//     .then(data => console.log(data))