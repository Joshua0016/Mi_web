

$(function () {
    $(".selectores_marca").select2({
        placeholder: "Marca",
        theme: "classic"
    });
    $("#marca").on("change.select2", (event) => {
        console.log(event.target.options[event.target.selectedIndex].value);
    })
    $(async function fetchData() {
        await fetch("http://localhost:3000/vehiculos").then(response => response.json()).then(data => console.log(data));

    })
});

