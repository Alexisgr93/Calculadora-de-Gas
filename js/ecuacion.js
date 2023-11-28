function CalcularEcuacion() {
    let filas = document.querySelectorAll('#camposExtras .row');
    let sumaResultados = 0;

    let codos1 = document.getElementById("codos").value;
        let IncPas1 = document.getElementById("IncPas").value;
        let DiamCa1 = document.getElementById("DiamCa").value;
        let Resultado1 = codos1 * IncPas1 * DiamCa1;

    filas.forEach((fila) => {
       
        let codos = fila.querySelector('input[placeholder="Cantidad de codos (un)"]').value;
        let IncPas = fila.querySelector('input[placeholder="Inclinación de pasaje"]').value;
        let DiamCa = fila.querySelector('input[placeholder="Diámetro cañería (Metros)"]').value;

        

        let Resultado = codos * IncPas * DiamCa;
        sumaResultados += parseFloat(Resultado || 0); // Asegúrate de sumar un valor numérico
    });

    document.getElementById("ResultadoEcua").innerText = `Suma total: ${Number(sumaResultados+Resultado1.toFixed(2))} m³/h`;
}
