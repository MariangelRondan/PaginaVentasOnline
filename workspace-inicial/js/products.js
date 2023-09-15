let originalData; // Variable para almacenar los datos originales
let currentData; // Variable para mantener los datos actuales (filtrados o no)

document.addEventListener("DOMContentLoaded", () => {
  //catID ya esta seteado en el localStorage en categories.js

  const catID = localStorage.getItem("catID");

  if (catID) {
    const productUrl = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;

    fetch(productUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })

      .then((data) => {
        originalData = data; // Almacenar los datos originales
        currentData = { ...data }; // Crear una copia inicial
        mostrarCatalogo(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }
});

// Función para mostrar los productos en el contenedor
function mostrarCatalogo(data) {
  const container = document.getElementById("containerProducts");
  let htmlContentToAppend = "";

  if (data.products.length === 0) {
    htmlContentToAppend = `<h2 id="avisoNoProductos">No hay productos para mostrar</h2>`;
  } else {
    data.products.forEach((producto) => {
      htmlContentToAppend += `
          <div class="contProducto" onclick="setProductID(${producto.id})">
            <img src="${producto.image}" class="imgProducto">
            <h2 class="nombre">${producto.name}</h2>
            <p class="precioProducto">${producto.currency} ${producto.cost}</p>
            <p id="descripcion">${producto.description}</p>
            <p>Vendidos: ${producto.soldCount}</p>
          </div>
        `;
    });
  }

  container.innerHTML = htmlContentToAppend;
}

const ordenarMayorPrecio = () => {
  currentData.products.sort((a, b) => b.cost - a.cost);
  mostrarCatalogo(currentData);
};

const ordenarMenorPrecio = () => {
  currentData.products.sort((a, b) => a.cost - b.cost);
  mostrarCatalogo(currentData);
};

// Eventos para los botones de filtro
document.addEventListener("DOMContentLoaded", () => {
  const inputMayorPrecio = document.getElementById("mayorPrecio");
  const inputMenorPrecio = document.getElementById("menorPrecio");
  const inputDestacados = document.getElementById("destacados");

  const rangeFilterCount = document.getElementById("rangeFilterCount");
  const clearRangeFilter = document.getElementById("clearRangeFilter");

  inputMayorPrecio.addEventListener("click", ordenarMayorPrecio);
  inputMenorPrecio.addEventListener("click", ordenarMenorPrecio);
  //   cantVendidos.addEventListener("click", filtrarPorMasVendidos);
  //   rangeFilterCount.addEventListener("click", filtrarPorRangoPrecio);
  //   clearRangeFilter.addEventListener("click", limpiarFiltro);
});
