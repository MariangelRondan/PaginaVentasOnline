//VALIDACIONES
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuarioInput = document.getElementById("usuario");
    const contraseñaInput = document.getElementById("contraseña");
    const errorUsuario = document.getElementById("errorUsuario");
    const errorContraseña = document.getElementById("errorContraseña");

    const usuario = usuarioInput.value;
    const contraseña = contraseñaInput.value;
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Limpiar mensajes de error anteriores
    errorUsuario.textContent = "";
    errorContraseña.textContent = "";

    if (!usuario) {
      return (errorUsuario.textContent = "El usuario no debe estar vacío");
    }
    if (!regexEmail.test(usuario)) {
      return (errorUsuario.textContent = "Usuario inválido");
    }

    if (!contraseña) {
      return (errorContraseña.textContent =
        "La contraseña no debe estar vacía");
    }
    if (contraseña.length < 8) {
      return (errorContraseña.textContent =
        "La contraseña debe tener al menos 8 caracteres");
    } else {
      //guardo en localStorage para generar authToken
      localStorage.setItem("usuario", usuario);
      window.location.href = "index.html";
    }
  });
});
