const participantes = ["Sergio", "Carmen", "Mary", "Chelo", "Fiorella", "Dani", "Nico", "Franco", "Lu", "Sebas"];

function verificarFiorella() {
    let user = document.getElementById("user").value;
    let passwordContainer = document.getElementById("password-container");
    if (user === "Fiorella") {
        passwordContainer.style.display = "block";
    } else {
        passwordContainer.style.display = "none";
    }
}

function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    
    if (!user) {
        message.innerText = "Selecciona un usuario.";
        message.style.color = "red";
        return;
    }
    
    if (user === "Fiorella" && password !== "FIORELLA123456") {
        message.innerText = "Contraseña incorrecta.";
        message.style.color = "red";
        return;
    }
    
    message.innerText = user === "Fiorella" ? "Has iniciado sesión como administradora." : "Se ha iniciado sesión correctamente.";
    message.style.color = "green";
    
    setTimeout(() => { window.location.href = "haz_tu_pregunta.html"; }, 1500);
}

function filtrarOpciones() {
    let quienPregunta = document.getElementById("quienPregunta").value;
    let aQuienPregunta = document.getElementById("aQuienPregunta");
    
    aQuienPregunta.innerHTML = '<option value="">-- Selecciona --</option>';
    participantes.forEach(participante => {
        if (participante !== quienPregunta) {
            let option = document.createElement("option");
            option.value = participante;
            option.textContent = participante;
            aQuienPregunta.appendChild(option);
        }
    });
}

function registrarPregunta() {
    let quienPregunta = document.getElementById("quienPregunta").value;
    let aQuienPregunta = document.getElementById("aQuienPregunta").value;
    
    if (!quienPregunta || !aQuienPregunta) {
        alert("Selecciona ambos campos antes de continuar.");
        return;
    }
    
    let contador = document.getElementById(`${aQuienPregunta}-count`);
    contador.textContent = parseInt(contador.textContent) + 1;
    alert(`Pregunta enviada a ${aQuienPregunta}`);
}

