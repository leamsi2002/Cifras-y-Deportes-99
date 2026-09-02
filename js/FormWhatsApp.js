const form = document.getElementById("Quiniela_MX");

form.addEventListener("submit",function (e) {
    e.preventDefault();
    
    const nombre = document.getElementById("Nombre").value.trim()


    Res1 = document.querySelector('input[name="Partido1"]:checked').value;
    Res2 = document.querySelector('input[name="Partido2"]:checked').value;
    Res3 = document.querySelector('input[name="Partido3"]:checked').value;
    Res4 = document.querySelector('input[name="Partido4"]:checked').value;
    Res5 = document.querySelector('input[name="Partido5"]:checked').value;
    Res6 = document.querySelector('input[name="Partido6"]:checked').value;
    Res7 = document.querySelector('input[name="Partido7"]:checked').value;
    Res8 = document.querySelector('input[name="Partido8"]:checked').value;
    Res9 = document.querySelector('input[name="Partido9"]:checked').value;
    Res10 = document.querySelector('input[name="Partido10"]:checked').value;

    const celular = 523343778902
    const text = encodeURIComponent(
        "*Pronósticos Jornada 7 Liga MX*\n" +
        "------------------------------------\n" +
        "*Nombre / Alias*: _"+nombre+"_\n" +
        "------------------------------------\n" +
        "*Resultados:*\n" +
        "Partido 1: *"+Res1+"*\n" + 
        "Partido 2: *"+Res2+"*\n" +
        "Partido 3: *"+Res3+"*\n" +
        "Partido 4: *"+Res4+"*\n" +
        "Partido 5: *"+Res5+"*\n" +
        "Partido 6: *"+Res6+"*\n" +
        "Partido 7: *"+Res7+"*\n" +
        "Partido 8: *"+Res8+"*\n" +
        "Partido 9: *"+Res9+"*\n" +
        "Partido 10: *"+Res10+"*"
    )

    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
        keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    fetch("https://script.google.com/macros/s/AKfycbwuuCRsTAGa3nnI5kSKxaFYcLngWolEa-NGhjJsWJ5oOKN11PVtNLQf2vd15fTINA5M7w/exec", {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
        });

    window.open("https://wa.me/"+celular+"?text="+text, "_blank");

    form.reset();
})