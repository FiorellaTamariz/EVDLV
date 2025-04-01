const participantes = ["Sergio", "Carmen", "Mary", "Chelo", "Fiorella", "Dani", "Nico", "Franco", "Lu", "Sebas"];

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
