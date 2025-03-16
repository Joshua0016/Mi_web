$(function () {
    const modelo = document.getElementById("modelo");
    const año = document.getElementById("año");
    const ul = document.getElementById("ul");

    let modeloInfo = null;
    let añoInfo = null;
    $("#marca").select2({
        placeholder: "Marca",
        theme: "classic"
    });
    $("#modelo").select2({
        placeholder: "modelo",
        theme: "classic"
    });
    $("#año").select2({
        placeholder: "año",
        theme: "classic"
    });

    //Primer evento select
    $("#marca").on("change.select2", async function (event) {
        let Infomarca = event.target.options[event.target.selectedIndex].text;
        $("#modelo").prop("disabled", false);
        ul.textContent = "";



        try {
            let response = await fetch("http://localhost:3000/marca", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ marca: Infomarca })
            });

            let data = await response.json();

            modelo.innerHTML = "<option></option>"; //evita que se seleccione por defecto las opciones que se muestran en la sigui. línea
            data.forEach(element => {
                modelo.innerHTML += `<option>${element.modelo}</option>`;
            });

            modeloInfo = data;


        }
        catch (err) {
            console.log("Error al eviar los datos de la base de datos", err);
        }



    })

    //segudo evento
    $("#modelo").on("change", async function modeloEvent(event) {
        let modelo = event.target.options[event.target.selectedIndex].text
        let modeloSelec = modeloInfo.find((info) => info.modelo === modelo);
        ul.textContent = "";


        $("#año").prop("disabled", false);


        try {
            let response = await fetch("http://localhost:3000/year", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: modeloSelec.id })
            });
            let data = await response.json();

            año.innerHTML = `<option></option>`;


            data.forEach(element => {
                año.innerHTML += `<option>${element.año}</option>`
            })

            añoInfo = data

        }
        catch (err) {
            console.log("Error al enviar los datos", err);
        }


    })

    $("#año").on("change", async function (event) {
        let año = event.target.options[event.target.selectedIndex].text;
        let añoSelect = añoInfo.find((info) => info.año == año);
        console.log(añoSelect);




        try {

            let response = await fetch("http://localhost:3000/referencia", ({
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: añoSelect.id })
            }));

            let data = await response.json();

            let dataInfo = ["refJointSup", "refJointInf", "refJointInf_izq", "refJointInf_der"];

            console.log(data[0][dataInfo[0]]);

            ul.textContent = "";

            dataInfo.forEach((info) => {

                let li = document.createElement("li");


                switch (data[0][info]) {
                    case null:
                        break;


                    default: {
                        li.textContent = data[0][info];
                        console.log(data[0][info]);
                        ul.appendChild(li);
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

