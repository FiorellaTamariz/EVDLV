function checkUser() {
    let user = document.getElementById("user").value;
    let passwordField = document.getElementById("password");
    passwordField.style.display = (user === "Fiorella") ? "block" : "none";
}

function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    
    if (user === "Fiorella") {
        if (password === "FIORELLA123456") {
            message.innerText = "Has iniciado como administrador.";
            message.style.color = "green";
        } else {
            message.innerText = "Contraseña incorrecta.";
            message.style.color = "red";
        }
    } else if (user !== "") {
        message.innerText = "Se ha iniciado sesión correctamente.";
        message.style.color = "green";
        setTimeout(() => { window.location.href = "haz_tu_pregunta.html"; }, 1500);
    } else {
        message.innerText = "Por favor, selecciona un usuario.";
        message.style.color = "red";
    }
}
