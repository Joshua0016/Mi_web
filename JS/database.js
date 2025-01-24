const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const conexion = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123456",
    database: "suspension",
    port: 3306
})

app.get("/vehiculos", (req, res) => {
    conexion.query("select * from vehiculos", (err, response) => {
        if (err) {
            console.log("Error al realizar la consulta");
            return res.status(500).json({ Error: "Error al realizar la consulta" });
        }

        console.log("Conexión exitosa", response);
        res.json(response);
    })
})
app.post("/marca", (req, res) => {
    let text = req.body.marca;

    res.status(200).json({ message: "Marca recivida con exito:" });

})

const port = 3000;
app.listen(port, () => {
    console.log(`servidor escuchando en http://localhost:${port}`);
})