function CalcularEcuacion(){

    let codos = document.getElementById("codos").value;
    let IncPas = document.getElementById("IncPas").value;
    let DiamCa = document.getElementById("DiamCa").value;

    let Resultado = codos*IncPas*DiamCa;
    document.getElementById("ResultadoEcua").innerText = `Resultado: ${Number(Resultado.toFixed(2))} m³/h`;

}