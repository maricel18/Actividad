//PRIMER SERVIDOR EN NODE.JS

const http = require('http');
const servidor = http.createServer((req, res) => {
    res.writeHead(200,{
        "Content-Type": "application/json"
    });
    const estudiante = {
        nombre: "Juan",
        carrera: "Ingenieria en Sistemas",
        materia: "Programacion Web II"
    };
    res.end(JSON.stringify(estudiante));
});
servidor.listen(8080, () => {
    console.log("Servidor ejecutandose en http://localhost:8080");
});
