$(function () {
    const selectModelo = document.getElementById("modelo");
    const selectAño = document.getElementById("año");
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

            data.forEach(element => {
                selectModelo.innerHTML += `<option>${element.modelo}</option>`;
            });

        }
        catch (err) {
            console.log("Error al eviar los datos de la base de datos", err);
        }

    })
    //segudo evento
    $("#modelo").on("change", async function modeloEvent() {
        $("#año").prop("disabled", false);

    })
});

