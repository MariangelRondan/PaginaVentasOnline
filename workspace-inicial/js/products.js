const IDcategoria = localStorage.getItem('ID')
const URL = 'https://japceibal.github.io/emercado-api/cats_products/' + IDlocalStorage + '.json';

document.addEventListener('DOMContentLoaded', ()=>{
    const IDproducto = '101';
fetch(URL)
.then(response => {
    if(!response.ok){
        throw new Error(`Error en la solicitud: ${response.status}`);
    } return response.json();
})

.then(data => {
if(data.products.length === 0) {
    const container = document.getElementById('container');
    const 
} else {
    for (product of data.products){
if(IDproducto )
    }
}
}) 

})

