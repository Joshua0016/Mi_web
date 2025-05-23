const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());




const conexion = mysql.createConnection({
    user: "root",
    host: "my_sql",
    password: "123456",
    database: "suspension",
    port: 3306
})
conexion.connect((err) => {
    if (err) {
        console.error("Error al conectar con la base de datos", err.stack);
        return;
    }
    else {
        console.log("Exito al realizar la conexión a la base de datos", conexion.threadId);
    }
})


app.post("/marca", (req, res) => {
    let marca = req.body.marca;

    conexion.query(`select * from marcas where nombre = '${marca}'`, (err, response) => {
        if (err) {
            console.log("error en la consulta", err);
            return res.status(500).json({
                message: "error al procesar la solicitud",
                error: err.code
            });
        }

        res.status(200).json(response);
    })


})
app.post("/modelo", (req, res) => {
    let id = req.body.id;

    conexion.query(`select modelos_anios.anio, modelos_anios.id from marcas left join modelos_anios on modelos_anios.modelo_id = marcas.id where modelos_anios.modelo_id = ${id};`, (err, response) => {
        if (err) {
            console.log("error al realizar la consulta", err);

            return res.status(500).json({
                message: "Error en la consulta de anios",
                error: err.code
            });
        }
        res.json(response);
    })

})

app.post("/referencia", (req, res) => {
    let id = req.body.id;
    conexion.query(`select * from balljoints b left join modelos_anios on modelos_anios.id = b.anioID where modelos_anios.id = ${id};`, (err, response) => {
        if (err) {
            console.log("error al realizar la consulta", err);

            return res.status(500).json({
                message: "error en la solicitud de referencia",
                error: err.code
            });
        }

        res.json(response);

    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`servidor escuchando en http://localhost:${port}`);
})






