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
/*
app.get("/vehiculos", (req, res) => {
    conexion.query("select * from vehiculos", (err, response) => {
        if (err) {
            console.log("Error al realizar la consulta");
            return res.status(500).json({ Error: "Error al realizar la consulta" });
        }

        console.log("Conexión exitosa", response);
        res.json(response);
    })
})*/

app.post("/marca", (req, res) => {
    let marca = req.body.marca;
    //toyota
    if (marca == "Toyota") {
        conexion.query("select * from vehiculos where marca = 'Toyota'", (err, response) => {
            if (err) {
                console.log("error en la consulta", response);
                return res.status(500).json({ message: "error al enviar los datos" });
            }

            res.status(200).json(response);
        })
    }
    //honda

})
app.post("/year", (req, res) => {
    let id = req.body.id;

    conexion.query(`select modelosaños.año, modelosaños.id from vehiculos left join modelosaños on modelosaños.modeloID = vehiculos.id where modelosaños.modeloID = ${id};`, (err, response) => {
        if (err) {
            console.log("error al realizar la consulta", err);

            return res.status(500).json(err);
        }
        res.json(response);
    })

})

app.post("/referencia", (req, res) => {
    let id = req.body.id;
    conexion.query(`select * from balljoints b left join modelosaños on modelosaños.id = b.añoID where modelosaños.id = ${id};`, (err, response) => {
        if (err) {
            console.log("error al realizar la consulta", err);

            return res.status(500).json(err);
        }

        res.json(response);

    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`servidor escuchando en http://localhost:${port}`);
})