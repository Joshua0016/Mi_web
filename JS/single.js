

$(function () {
    $(".selectores_marca").select2({
        placeholder: "Marca",
        theme: "classic"
    });
    $("#marca").on("change.select2", function (event) {
        let text = event.target.options[event.target.selectedIndex].text;

        fetch("http://localhost:3000/marca", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ marca: text })
        }).then(response => response.json()).then(data => console.log(data));
    })
    $(async function dataFetch() {
        let response = await fetch("http://localhost:3000/vehiculos");
        let data = await response.json();
        console.log(data);
    })
});

