const mysql2 = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const conexion = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "123456",
    database: "suspension",
    port: 3306
});


app.get("/vehiculos", (req, res) => {
    conexion.query("select * from vehiculos", (err, response) => {
        if (err) {
            console.log("error al realizar la consulta");
            res.status(500).json({ error: "no se pudo realizar la consulta" })
            return;
        }

        console.log("Conextión exitosa", response);
        res.json(response);

    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}/vehiculos`);
})