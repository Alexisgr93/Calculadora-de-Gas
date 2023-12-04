function CalcularEcuacion() {
    let filas = document.querySelectorAll('#camposExtras .row');
    let sumaResultados = 0;
    //seleccionar si o si
    const selects = document.querySelectorAll('.form-select');
        //parte de seleccion de tee codo o llave
        let validSelection = true;
        selects.forEach(select => {
            if (select.value === 'Seleccione insumo') {
                validSelection = false;
                return;
            }
        });
        //retorna y borra resultado
        if (!validSelection) {
            alert('Por favor seleccione un insumo para todos los campos.');
            document.getElementById("ResultadoEcua").innerText = `Resultado:`;
            return;
        }
    

    filas.forEach((fila) => {
       
        let codos = fila.querySelector('input[placeholder="Cantidad de codos (un)"]').value;
        let IncPas = fila.querySelector('input[placeholder="Inclinación de pasaje"]').value;
        let DiamCa = fila.querySelector('input[placeholder="Diámetro cañería (Metros)"]').value;

        

        let Resultado = codos * IncPas * DiamCa;
        sumaResultados += parseFloat(Resultado || 0); // Asegúrate de sumar un valor numérico
    });

    let codos1 = document.getElementById("codos").value;
        let IncPas1 = document.getElementById("IncPas").value;
        let DiamCa1 = document.getElementById("DiamCa").value;
        let Resultado1 = codos1 * IncPas1 * DiamCa1;
        total = Resultado1 + sumaResultados;
    document.getElementById("ResultadoEcua").innerText = `Resultado: ${Number(total.toFixed(2))} m³/h`;
}



var w = document.getElementById("mostrarTablaEcua");
const botonMostrarTablaEcua = document.querySelector('.btn.btn-primary');
  function mostrarTablaEcuacion() {
    

    const insumo = document.querySelector('.form-select').value;
    const cantidadInsumo = document.getElementById('codos').value;
    const caidaPresion = document.getElementById('IncPas').value;
    const diametroCaneria = document.getElementById('DiamCa').value;
    const resultadoEcua = document.getElementById("ResultadoEcua").innerText;

    // Mostrar los valores en la tabla oculta
    document.getElementById('filaDatosEcua').innerHTML = `
      <td>${insumo}</td>
      <td>${cantidadInsumo}</td>
      <td>${caidaPresion}</td>
      <td>${diametroCaneria}</td>
      <td>${resultadoEcua}</td>
    `;

    w.style.display = "block";
  }
  function ocultarTablaEcua() {
    // Ocultar la tabla al hacer clic en el botón "Close"
    w.style.display = 'none';
    
}

document.addEventListener('mouseup', function(e) {
    if (w.style.display === 'block' && !w.contains(e.target) && e.target !== botonMostrarTablaEcua) {
        ocultarTablaEcua();
    }
});


                