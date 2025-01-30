$(function () {
    const selectModelo = document.getElementById("modelo");
    const selectAño = document.getElementById("año");
    let modelData = null;
    $(".selector_marca").select2({
        placeholder: "Marca",
        theme: "classic"
    });
    $(".selector_modelo").select2({
        placeholder: "modelo",
        theme: "classic"
    });
    $(".selector_año").select2({
        placeholder: "año",
        theme: "classic"
    });

    //Primer evento select
    $("#marca").on("change.select2", async function (event) {
        selectModelo.innerHTML = "";
        let text = event.target.options[event.target.selectedIndex].text;
        $("#modelo").prop("disabled", false);


        try {
            let response = await fetch("http://localhost:3000/marca", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ marca: text })
            });

            let data = await response.json();

            selectModelo.innerHTML = "<option></option>"; //evita que se seleccione por defecto las opciones que se muestran en la sigui. línea
            data.forEach(element => {
                selectModelo.innerHTML += `<option>${element.modelo}</option>`;
            });

            modelData = data;
        }
        catch (err) {
            console.log("Error al eviar los datos de la base de datos", err);
        }



    })
    //segudo evento
    $("#modelo").on("change", async function modeloEvent(event) {
        let text = event.target.options[event.target.selectedIndex].text
        let modelSelec = modelData.find((res) => res.modelo = text);
        $("#año").prop("disabled", false);

        try {
            let response = await fetch("http://localhost:3000/year", {
                method: "post",
                headers: {
                    "Content-Type": "api/json"
                },
                body: JSON.stringify({ id: modelSelec.id })
            });
            let data = await response.json();
            console.log(data);
        }
        catch (err) {
            console.log("Error al enviar los datos", err);
        }


    })
});

