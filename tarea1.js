const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

const clientes = [
    { 
        id: 1, 
        nombre: "Juana Mendez", 
        correo: "juana@gmail.com",
        telefono: "71234567",
        direccion: "Av. Banzer 4to Anillo"
    },
    { 
        id: 2, 
        nombre: "Ana Mamani", 
        correo: "ana@gmail.com",
        telefono: "78901234",
        direccion: "Plan 3000"
    },
];
app.get("/",(req, res) => {
    res.send("API PROGRA WEB II");
});
app.get("/api/clientes",(req, res) => {
    res.json(clientes);
});
app.get("/api/clientes/:id", (req, res) => {
    const id = Number(req.params.id);
    const cliente = clientes.find(
        cliente => cliente.id === id
    );
    if (!cliente) {
        return res.status(404).json({
            mensaje: "Cliente no encontrado"
        });
    }
    res.json(cliente);
});
app.post("/api/clientes", (req, res) => {
    const nuevoCliente = {
        id: clientes.length + 1,   //generamos el id generando el ultimo y su sumando uno
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
    };
    clientes.push(nuevoCliente);
    res.status(201).json(nuevoCliente);
});
app.listen(PORT, () => {
    console.log(`Servidor de Clientes ejecutándose en http://localhost:${PORT}`);
});

//-----------------------
//GET/api/clientes
//GET/api/clientes/:id
//POST/api/clientes
//-----------------------

//codigos de estado HTTP
//200 -> OK correcto
//201 -> creado
//400 -> error del cliente
//401 -> no autenticado
//403 -> no autorizado
//404 -> no encontrado
//500 -> error del servidor