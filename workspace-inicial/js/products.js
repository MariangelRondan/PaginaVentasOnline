document.addEventListener('DOMContentLoaded', ()=>{
//catID ya esta seteado en el localStorage en categories.js

const catID = localStorage.getItem("catID");

if(catID){
    const productUrl = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;

    fetch(productUrl)
    .then(response => {
        if(!response.ok){
            throw new Error(`Error en la solicitud: ${response.status}`);
        } return response.json();
    })
    
    .then(data => {
    if(data.products.length === 0) {
        const container = document.getElementById('container'); //es un div
        const encabezado = document.createElement(h2)
        container.appendChild(encabezado)
        encabezado.innerHTML() = "Lo siento, no hay contenido para mostrar."
    } else {
        data.products.forEach(product => {
            mostrarCatalogo(product.image, product.name, product.description, product.cost, product.currency, product.soldCount )
        });
    }
    }) 

.catch(error => {
    console.log(error)
})
}



})
//le agrego las propiedades que debo mostrar
function mostrarCatalogo(imageURL, nombre, descripcion, costo, moneda, vendidos ){
    //tengo que llamar al  div que englobe el catalogo
    const container = document.getElementById('container')
    // tengo que crear unimg para   "image": " 
     //     ese img va a ser hijo del div contenedor
    const image = document.createElement('img')
    image.src = imageURL;
    container.appendChild(image)
     
   
//trngo que mostrar un div el texto del producto    
const texto = document.createElement('div') 
container.appendChild(texto)
//trngo que mostrar un p con el nombre del producto
const name = document.createElement('p')
name.textContent = nombre;
//ese p va a ser hijo de el div texto
texto.appendChild(name);

const description = document.createElement('p')
description.textContent = descripcion;
texto.appendChild(description)
const cost = document.createElement('p')
cost.textContent = costo;
texto.appendChild(cost)

const  currency = document.createElement('p')
currency.textContent = moneda;
texto.appendChild(currency)

const soldCount = document.createElement('p')
soldCount.textContent = vendidos
texto.appendChild(soldCount)


}