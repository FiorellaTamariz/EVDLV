const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Permite que el frontend acceda al backend

// Ruta para obtener respuestas
app.get("/respuestas", (req, res) => {
    const data = JSON.parse(fs.readFileSync("database/respuestas.json", "utf8"));
    res.json(data);
});

// Ruta para guardar una nueva respuesta
app.post("/respuestas", (req, res) => {
    const data = JSON.parse(fs.readFileSync("database/respuestas.json", "utf8"));
    data.push(req.body); // Agrega la nueva respuesta
    fs.writeFileSync("database/respuestas.json", JSON.stringify(data, null, 2));
    res.json({ message: "Respuesta guardada!" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
