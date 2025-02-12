$(function () {
    const modelo = document.getElementById("modelo");
    const año = document.getElementById("año");
    let modeloInfo = null;
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
        let text = event.target.options[event.target.selectedIndex].text;
        $("#modelo").prop("disabled", false);
        modelo.innerHTML = "";


        try {
            let response = await fetch("http://localhost:3000/marca", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ marca: text })
            });

            let data = await response.json();

            modelo.innerHTML = "<option></option>"; //evita que se seleccione por defecto las opciones que se muestran en la sigui. línea
            data.forEach(element => {
                modelo.innerHTML += `<option>${element.modelo}</option>`;
            });

            modeloInfo = data;
            console.log(modeloInfo);
        }
        catch (err) {
            console.log("Error al eviar los datos de la base de datos", err);
        }



    })
    //segudo evento
    $("#modelo").on("change", async function modeloEvent(event) {
        let text = event.target.options[event.target.selectedIndex].text
        let modeloSelec = modeloInfo.find((info) => info.modelo === text);

        console.log(modeloSelec);

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
            console.log(data);
            data.forEach(element => {
                año.innerHTML += `<option>${element.año}</option>`
            })
        }
        catch (err) {
            console.log("Error al enviar los datos", err);
        }


    })
});

