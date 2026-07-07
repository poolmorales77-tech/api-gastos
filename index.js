const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("API de Gastos funcionando en AWS");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});