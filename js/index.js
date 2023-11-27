function PasarKcal(){
    let Joule = document.getElementById("Kcal").value;
    let RJoule = Joule/9300;

    document.getElementById("ResultadoKcal").innerText = `Resultado: ${Number(RJoule.toFixed(2))} m³/h`;
    
    
}