function Tabla2() {
// Matriz completa
const valoresLongitud = [2, 4, 6, 8, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100];
const valoresMedidores = [1, 2, 3, 4, 5, 8, 11, 14, 17, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100];


let matriz = [
    
    [19, 19, 19, 19, 19, 19, 19, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32],
    [19, 19, 19, 19, 19, 25, 25, 25, 25, 25, 25, 25, 25, 32, 32, 32, 32, 32],
    [19, 19, 19, 19, 25, 25, 25, 25, 25, 32, 32, 32, 32, 32, 32, 32, 32, 32],
    [19, 19, 25, 25, 25, 25, 25, 32, 32, 32, 32, 32, 32, 32, 38, 38, 38, 38],
    [19, 25, 25, 25, 25, 25, 32, 32, 32, 32, 32, 32, 32, 38, 38, 38, 38, 38],
    [25, 25, 25, 32, 32, 32, 32, 38, 38, 38, 38, 38, 38, 51, 51, 51, 51, 51],
    [25, 25, 32, 32, 32, 38, 38, 38, 38, 38, 51, 51, 51, 51, 51, 51, 51, 51],
    [25, 32, 32, 32, 32, 38, 38, 38, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51],
    [25, 32, 32, 32, 38, 38, 51, 51, 51, 51, 51, 51, 51, 51, 63, 63, 63, 63],
    [32, 38, 38, 38, 38, 51, 51, 51, 51, 51, 51, 51, 51, 63, 63, 63, 63, 63],
    [32, 38, 38, 38, 51, 51, 51, 51, 51, 51, 63, 63, 63, 63, 63, 63, 63, 63],
    [38, 38, 38, 51, 51, 51, 51, 51, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63],
    [38, 38, 51, 51, 51, 51, 63, 63, 63, 63, 63, 63, 76, 76, 76, 76, 76, 76],
    [38, 51, 51, 51, 51, 63, 63, 63, 63, 63, 63, 76, 76, 76, 76, 76, 76, 76],
    [51, 51, 51, 51, 51, 63, 63, 63, 63, 63, 63, 76, 76, 76, 76, 76, 76, 101],
    [51, 51, 51, 51, 51, 63, 63, 63, 63, 63, 76, 76, 76, 76, 76, 76, 101, 101],
    [51, 51, 51, 63, 63, 63, 63, 76, 76, 76, 76, 76, 76, 76, 76, 76, 101, 101],
    [51, 51, 63, 63, 63, 76, 76, 76, 76, 76, 101, 101, 101, 101, 101, 101, 101, 101],
    [51, 51, 63, 63, 63, 76, 76, 76, 76, 101, 101, 101, 101, 101, 101, 101, 101, 101],
    [51, 63, 63, 63, 76, 76, 76, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 126],
    [51, 63, 63, 76, 76, 76, 101, 101, 101, 101, 101, 101, 101, 101, 101, 126, 126, 126]
];

// Mapeo de la relación entre la longitud en metros y la posición en la tabla proporcionada
const mapaPosicionesLongitud = {
    2: 0,
    4: 1,
    6: 2,
    8: 3,
    10: 4,
    15: 5,
    20: 6,
    25: 7,
    30: 8,
    35: 9,
    40: 10,
    45: 11,
    50: 12,
    60: 13,
    70: 14,
    80: 15,
    90: 16,
    100: 17,
    // Agrega más mapeos según sea necesario
};

// Mapeo de la relación entre la cantidad de medidores y la posición en la tabla proporcionada
const mapaPosiciones = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    8: 5,
    11: 6,
    14: 7,
    17: 8,
    20: 9,
    25: 10,
    30: 11,
    35: 12,
    40: 13,
    45: 14,
    50: 15,
    60: 16,
    70: 17,
    80: 18,
    90: 19,
    100: 20,
    // Agrega más mapeos según sea necesario
};





function obtenerSiguienteValor(lista, valor) {
    const idx = lista.findIndex(item => item >= valor);
    if (idx !== -1) {
        return lista[idx];
    }
    return lista[lista.length - 1];
}

function obtenerValorAjustado(valor, lista) {
    return Math.min(obtenerSiguienteValor(lista, valor), lista[lista.length - 1]);
}



    let longitudMetroInput = document.getElementById("LongMetro");
    let cantidadMedidoresInput = document.getElementById("CantMedidores");

    
    let longitudMetro = parseInt(longitudMetroInput.value);
    let cantidadMedidores = parseInt(cantidadMedidoresInput.value);


    // Verificar si los números son negativos o iguales a cero
    if (longitudMetro <= 0 || cantidadMedidores <= 0 || isNaN(longitudMetro) || isNaN(cantidadMedidores)) {
       alert("Por favor, ingrese números mayor ó igual a 1.");
       document.getElementById("Resultado").innerText = `Resultado: `; //vuelve el resultado a sin valor despues del alert
        return; // Detener la ejecución si los números no son válidos
    }


    longitudMetro = obtenerValorAjustado(longitudMetro, valoresLongitud);
    cantidadMedidores = obtenerValorAjustado(cantidadMedidores, valoresMedidores);

    console.log(`Longitud seleccionada: ${longitudMetro}, Cantidad de medidores seleccionados: ${cantidadMedidores}`);

    let columna = valoresLongitud.indexOf(longitudMetro); // Índice de la longitud en la matriz
    let fila = valoresMedidores.indexOf(cantidadMedidores); // Índice de la cantidad de medidores en la matriz

    if (fila !== -1 && columna !== -1) {
        const valor = matriz[fila][columna];
        document.getElementById("Resultado").innerText = `Resultado: ${valor/1000} m³/h`;
    } else {
        longitudMetro = valoresLongitud[valoresLongitud.length - 1];
        cantidadMedidores = valoresMedidores[valoresMedidores.length - 1];

        console.log(`Longitud ajustada: ${longitudMetro}, Cantidad de medidores ajustada: ${cantidadMedidores}`);

        fila = valoresLongitud.indexOf(longitudMetro); // Índice de la longitud ajustada en la matriz
        columna = valoresMedidores.indexOf(cantidadMedidores); // Índice de la cantidad de medidores ajustada en la matriz

        const valor = matriz[fila][columna];
        document.getElementById("Resultado").innerText = `Resultado ajustado: ${valor/1000} m³/h`;
    }


    
}
function ReiniciarAppT2() {
    document.getElementById("LongMetro").value = ""; // Reinicia el valor de LongMetro
    document.getElementById("CantMedidores").value = ""; // Reinicia el valor de CantMedidores
    document.getElementById("Resultado").innerText = `Resultado:`; // Reinicia el resultado
}

//function ReiniciarAppT2() {
  //  location.reload(); // Recarga la página actual
  //}

  document.addEventListener('DOMContentLoaded', function() {
    const tablaResultado = document.getElementById('tablaResultado');
    const botonMostrarInfo = document.querySelector('.btn-group button.btn-primary');

    function mostrarTabla() {
        // Obtener los valores ingresados
        const cantMedidores = document.getElementById('CantMedidores').value;
        const longMetro = document.getElementById('LongMetro').value;
        // Realizar el cálculo de la Tabla 2 (simulado)
        const resultadoTabla2 = document.getElementById("Resultado").innerText; // Cambia esta lógica por tu cálculo real

        // Mostrar los valores en la tabla oculta
        document.getElementById('filaDatos').innerHTML = `
            <td>${cantMedidores}</td>
            <td>${longMetro}</td>
            <td>${resultadoTabla2}</td>
        `;

        // Mostrar la tabla oculta
        tablaResultado.style.display = 'block';
    }

    function ocultarTabla() {
        // Ocultar la tabla al hacer clic en el botón "Close"
        tablaResultado.style.display = 'none';
    }

    botonMostrarInfo.addEventListener('click', mostrarTabla);

    document.addEventListener('click', function(event) {
        if (event.target !== tablaResultado && event.target !== botonMostrarInfo) {
            ocultarTabla();
        }
    });
});


