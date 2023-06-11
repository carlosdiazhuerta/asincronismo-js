import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

 function fechData(urlApi){
     return fetch(urlApi)
 };

// fechData(`${API}/products`)
// .then(response => response.json())
// .then(products =>{
//     console.log(products);
// })
// .then(()=>{
//     consolelog("hola")
// })
// .catch(error => console.log(error))
fechData(`${API}/products`)
.then(response => response.json())
.then(products =>{
    return fechData(`${API}/products/${products[0].id}`)
})
.then(response =>response.json())
.then(product =>{
    console.log(product.title)
    return fechData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category =>{
    console.log(category.name)
})
.catch(error => console.log(error))
.finally(()=>console.log("fanaly")) 