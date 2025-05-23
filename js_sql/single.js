$(function () {
    const modeloLista = document.getElementById("modelo");
    const anioLista = document.getElementById("anio");
    const listaRef = document.getElementById("listaRef");

    let modeloInfo = null;
    let anioInfo = null;
    $("#marca").select2({
        placeholder: "Marca",
        theme: "classic"
    });
    $("#modelo").select2({
        placeholder: "modelo",
        theme: "classic"
    });
    $("#anio").select2({
        placeholder: "año",
        theme: "classic"
    });

    //Primer evento select
    $("#marca").on("change.select2", async function (event) {
        let Infomarca = event.target.options[event.target.selectedIndex].text;//cargar el texto seleccionado
        $("#modelo").prop("disabled", false);
        //reiniciar listas
        listaRef.textContent = "";
        anioLista.textContent = "";
        modeloLista.textContent = "";

        //procesar solicitud 
        try {
            let response = await fetch("http://localhost:3000/marca", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ marca: Infomarca }) //enviando info al backend
            });
            if (!response.ok) {
                let errorData = await response.json();
                console.log("Error en el servidor", errorData.code, errorData.message);
                return;
            }

            let data = await response.json();

            //Por cada modelo de la marca se mostrarán cada uno de ellos
            modeloLista.innerHTML = '<option></option>'
            data.forEach(element => {
                modeloLista.innerHTML += `<option>${element.modelo}</option>`;
            });

            //cargo la información del modelo para usarla en el siguiente evento "change"
            modeloInfo = data;


        }
        catch (err) {
            console.log("Error al eviar los datos de la base de datos", err);
        }



    })

    //segudo evento
    $("#modelo").on("change", async function modeloEvent(event) {
        let modelo = event.target.options[event.target.selectedIndex].text //cargar el texto seleccionado
        let modeloSelec = modeloInfo.find((info) => info.modelo === modelo);// devuelve el objeto que coincide con el texto seleccionado

        //reiniciando lista
        listaRef.textContent = "";
        anioLista.textContent = "";
        $("#anio").prop("disabled", false);

        //Procesando solicitud
        try {
            let response = await fetch("http://localhost:3000/modelo", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: modeloSelec.id })
            });

            if (!response.ok) {
                let errorData = await response.json();
                console.log("Error en el servidor", errorData.message, errorData.error);
                return;
            }

            let data = await response.json();

            //Mostrando todos los anios del modelo seleccionado
            anioLista.innerHTML = `<option><option>`;
            data.forEach(element => {
                anioLista.innerHTML += `<option>${element.anio}</option>`
            })

            //cargo la información del anio para poder usarla en el siguiente evento
            anioInfo = data


        }
        catch (err) {
            console.log("Error al enviar los datos", err);
        }


    })

    $("#anio").on("change", async function (event) {
        let anio = event.target.options[event.target.selectedIndex].text;//cargar el anio seleccionado
        let anioselect = anioInfo.find((info) => info.anio == anio);// devuelve el elemento del anio seleccionado

        //reiniciar lista de referencias
        listaRef.textContent = "";


        //procesar solicitud
        try {

            let response = await fetch("http://localhost:3000/referencia", ({
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: anioselect.id })
            }));

            if (!response.ok) {
                let errorData = await response.json();
                console.log("Error en el servidor", errorData.message, errorData.error);
                return;
            }

            let data = await response.json();

            //a este punto sql solo devuélve un solo arreglo de un solo elemento
            //las propiedades del objeto no siempre tendrán un valor, algunas simplemente es null
            //por eso se realiza un bucle por cada una de ellas y manejar con un switch las que su valor no son null

            //propiedades del objeto
            let dataInfo = ["refJointSup", "refJointInf", "refJointInf_izq", "refJointInf_der"];



            dataInfo.forEach((info) => {

                let li = document.createElement("li");

                switch (data[0][info]) {//accedo al arreglo en su posición 0 en la propiedad actual
                    case null:
                        break;


                    default: {
                        li.textContent = data[0][info];
                        //console.log(data[0][info]);
                        listaRef.appendChild(li);
                        break;
                    }
                }
            })

        }
        catch (err) {
            console.log("Error al recivir los datos", err);
        }



    })
});

