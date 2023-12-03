
function PasarKcal(){
    let Joule = document.getElementById("Kcal").value;

    if(Joule <=0 || isNaN(Joule)){
        alert("Por favor, ingrese números mayor ó igual a 1.")
        document.getElementById("ResultadoKcal").innerText = `Resultado:`; // Reinicia el valor de CantMedidores
        return;
    }
    let RJoule = Joule/9300;

    document.getElementById("ResultadoKcal").innerText = `Resultado: ${Number(RJoule.toFixed(2))} m³/h`;
        
}

function ReiniciarAppKcal() {
    document.getElementById("Kcal").value = ""; // Reinicia el valor de LongMetro
    document.getElementById("ResultadoKcal").innerText = `Resultado:`; // Reinicia el valor de CantMedidores

}

