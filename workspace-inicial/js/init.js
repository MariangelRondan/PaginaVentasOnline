const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL =
  "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL =
  "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
};

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
};

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = "ok";
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = "error";
      result.data = error;
      hideSpinner();
      return result;
    });
};

document.addEventListener("DOMContentLoaded", function () {
  const usuario = localStorage.getItem("usuario");

  if (!usuario) {
    window.location.href = "login.html";
  } else {
    // Si un usuario ha iniciado sesión, muestra el nombre de usuario en un select en la barra de navegación
    const navList = document.getElementById("navUl");
    //Agrega boton mostrando usuario y opción para cerrar sesión.
    const divUser = document.createElement("div");

    divUser.classList.add("opcionesUsuario", "dropdown");
    divUser.innerHTML = `<button class="btn btn-secondary dropdown-toggle nav-link" type="button" id="logoutButton" data-bs-toggle="dropdown">${usuario}</button>
  <ul  id='ulOpcionesUsuario 'class="dropdown-menu" aria-labelledby="logoutButton">
              <li><a id="AcerrarSesion" class="dropdown-item nav-link" href="#">Cerrar Sesión</a></li>
            </ul> `;

    navList.appendChild(divUser);

    //evento al link de cerrar sesión para dirigir a login.html
    cerrarSesionLink = document.getElementById("AcerrarSesion");
    cerrarSesionLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("usuario");

      window.location.href = "login.html";
    });
  }
});

{
  /* ejemplo de chat gtp para agregar luego nuevos a
   <div class="dropdown">
    <button>Selecciona una opción</button>
    <div class="dropdown-content">
        <a href="#">Opción 1</a>
        <a href="#">Opción 2</a>
        <a href="#">Opción 3</a>
    </div>
</div> */
}
