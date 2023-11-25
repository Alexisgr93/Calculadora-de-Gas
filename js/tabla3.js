function Tabla3() {
    // Matriz completa
    const valoresDiametro = [9.5, 13, 19, 25, 32, 38, 51, 63, 76, 101];
    const valoresLongCan = [2, 3, 4, 5, 6, 7 , 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

    
    
    let matriz = [
        
        [1.745, 3.58, 9.895, 20.26, 35.695, 55.835, 114.615, 198.33, 312.851, 624.217],
        [1.425, 2.925, 8.065, 16.54, 28.9, 45.585, 93.58, 161.915, 255.411, 524.304],
        [1.235, 2.535, 6.985, 14.325, 25.08, 39.48, 81.05, 140.219, 221.186, 454.046],
        [1.105, 2.265, 6.25, 12.81, 22.685, 35.31, 72.49, 125.419, 197.84, 406.125],
        [1.005, 2.07, 5.705, 11.695, 20.435, 32.23, 66.165, 114.511, 180.634, 370.802],
        [930, 2915, 5.25, 10.835, 18.92, 29.845, 61.265, 106.025, 167.25, 343.325],
        [870, 1.79, 4.94, 10.13, 17.695, 27.91, 57.295, 99.165, 156.425, 321.108],
        [820, 1.69, 4.655, 9.55, 16.685, 26.32, 54.025, 93.489, 147.457, 302.698],
        [780, 1.6, 4.42, 9.06, 15.825, 24.965, 51.245, 88.689, 139.903, 287.189],
        [710, 1.46, 4.035, 8.27, 14.45, 22.79, 46.79, 80.957, 127.705, 282.151],
        [660, 1.355, 3.735, 7.655, 13.375, 21.1, 43.315, 74.963, 118.249, 242.74],
        [615, 1.265, 3.495, 7.16, 12.51, 19.595, 40.515, 70.109, 110.593, 227.024],
        [580, 1.195, 3.29, 6.75, 11.795, 18.605, 38.19, 66.11, 104.283, 214.071],
        [550, 1.13, 3.125, 6.405, 11.19, 17.655, 36.24, 62.709, 98.919, 203.062],
        [525, 1.08, 2.98, 6.105, 10.67, 16.83, 34.55, 59.794, 94.322, 190.784],
        [500, 1.035, 2.85, 5.845, 10.215, 16.11, 33.06, 57.244, 90.298, 185.363],
        [48, 990, 2.74, 5.62, 9.815, 15.485, 31.785, 54.991, 86.69, 178.092],
        [465, 960, 2.65, 5.415, 9.46, 14.92, 30.63, 53.002, 83.608, 174.449],
        [450, 925, 2.55, 5.23, 9.135, 14.1, 29.58, 51.202, 80.768, 165.8],
        [435, 895, 2.47, 5.065, 8.85, 13.955, 29.075, 49.582, 78.312, 160.553],
        [420, 870, 2.395, 4.91, 8.58, 13.535, 27.785, 48.094, 75.865, 155.735],
        [410, 845, 2.33, 4.775, 8.34, 13.155, 27.005, 46.739, 73.728, 151.349],
        [400, 820, 2.265, 4.65, 8.12, 12.805, 26.295, 45.496, 71.767, 147.322],
        [390, 800, 2.21, 4.525, 7.91, 12.48, 25.615, 44.344, 69.951, 143.594],
        [380, 780, 2.155, 4.42, 7.72, 12.18, 25.005, 43.277, 68.267, 140.138],
        [370, 765, 2.105, 4.32, 7.545, 11.9, 24.43, 42.279, 66.692, 136.905],
        [360, 745, 2.06, 4.22, 7.375, 11.635, 23.885, 41.349, 65.227, 133.897],
        [355, 730, 2.015, 4.135, 7.225, 11.395, 23.395, 40.478, 63.852, 131.075],
        [350, 715, 1.975, 4.035, 7.075, 11.165, 22.92, 39.66, 62.56, 128.424],
        [330, 685, 1.885, 3.86, 6.75, 10.845, 21.85, 37.815, 59.65, 122.403],
        [315, 655, 1.805, 3.695, 6.45, 10.19, 20.92, 36.205, 57.109, 117.233],
        [305, 630, 1.73, 3.55, 6.21, 9.695, 20.105, 34.784, 54.87, 112.638],
        [295, 605, 1.67, 3.42, 5.98, 9.43, 19.36, 33.521, 52.876, 108.545],
        [285, 585, 1.615, 3.31, 5.78, 9.115, 18.715, 32.383, 51.081, 104.86],
        [275, 565, 1.565, 3.2, 5.595, 8.83, 18.12, 31.354, 49.459, 101.531],
        [265, 550, 1.515, 3.105, 5.425, 8.555, 17.565, 30.419, 47.984, 98.502],
        [260, 535, 1.47, 3.015, 5.27, 8.315, 17.07, 29.563, 46.634, 95.729],
        [250, 520, 1.435, 2.94, 5.135, 8.1, 16.63, 28.774, 45.389, 93.175],
        [245, 505, 1.4, 2.865, 5.005, 7.895, 16.205, 28.043, 44.237, 90.8],
        [235, 485, 1.33, 2.73, 4.77, 7.53, 15.46, 26.738, 42.178, 86.583],
        [225, 460, 1.275, 2.615, 4.57, 7.21, 14.8, 25.6, 40.384, 82.9],
        [215, 445, 1.225, 2.515, 4.39, 6.93, 14.225, 24.896, 38.8, 79.649],
        [205, 430, 1.18, 2.42, 4.23, 6.67, 13.695, 23.701, 37.387, 76.749],
        [200, 415, 1.14, 2.34, 4.09, 6.45, 13.34, 22.898, 36.12, 74.158],
        [195, 400, 1.105, 2.265, 3.955, 6.24, 12.815, 22.17, 34.972, 71.791],
        [190, 390, 1.07, 2.195, 3.835, 6.05, 12.425, 21.509, 33.929, 69.649],
        [185, 380, 1.045, 2.135, 3.73, 5.89, 12.085, 20.902, 32.972, 67.687],
        [175, 370, 1.015, 2.07, 3.625, 5.73, 11.765, 20.344, 32.092, 65.879],
        [170, 360, 990, 2.025, 3.54, 5.58, 11.46, 19.83, 31.23, 64.217],

    ];
    
    // Mapeo de la relación entre la longitud en metros y la posición en la tabla proporcionada
    const mapaPosicionesDiametros = {
        9.5: 0,
        13: 1,
        19: 2,
        25: 3,
        32: 4,
        38: 5,
        51: 6,
        63: 7,
        76: 8,
        101: 9,
        // Agrega más mapeos según sea necesario
    };
    
    // Mapeo de la relación entre la cantidad de medidores y la posición en la tabla proporcionada
    const mapaPosiciones = {
        2: 0,
        3: 1,
        4: 2,
        5: 3,
        6: 4,
        7: 5,
        8: 6,
        9: 7,
        10: 8,
        12: 9,
        14: 10,
        16: 11,
        18: 12,
        20: 13,
        22: 14,
        24: 15,
        26: 16,
        28: 17,
        30: 18,
        32: 19,
        34: 20,
        36: 21,
        38: 22,
        40: 23,
        42: 24,
        44: 25,
        46: 26,
        48: 27,
        50: 28,
        55: 29,
        60: 30,
        65: 31,
        70: 32,
        75: 33,
        80: 34,
        85: 35,
        90: 36,
        95: 37,
        100: 38,
        110: 39,
        120: 40,
        130: 41,
        140: 42,
        150: 43,
        160: 44,
        170: 45,
        180: 46,
        190: 47,
        200: 48,


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
    
    
    
        let DiametroInput = document.getElementById("Diametro");
        let LongCanInput = document.getElementById("LongCan");
    
        
        let Diametro = parseInt(DiametroInput.value);
        let LongCan = parseInt(LongCanInput.value);
    
    
        // Verificar si los números son negativos o iguales a cero
        if (Diametro <= 0 || LongCan <= 0 || isNaN(Diametro) || isNaN(LongCan)) {
           alert("Por favor, ingrese números mayor ó igual a 1.");
           document.getElementById("ResultadoTabla3").innerText = `Resultado: `; //vuelve el resultado a sin valor despues del alert
            return; // Detener la ejecución si los números no son válidos
        }
    
    
        Diametro = obtenerValorAjustado(Diametro, valoresDiametro);
        LongCan = obtenerValorAjustado(LongCan, valoresLongCan);
    
        console.log(`Diametro seleccionada: ${Diametro}, Cantidad de medidores seleccionados: ${LongCan}`);
    
        let columna = valoresDiametro.indexOf(Diametro); // Índice de la longitud en la matriz
        let fila = valoresLongCan.indexOf(LongCan); // Índice de la cantidad de medidores en la matriz
    
        if (fila !== -1 && columna !== -1) {
            const valor = matriz[fila][columna];
            document.getElementById("ResultadoTabla3").innerText = `Resultado: ${valor} ⌀`;
        } else {
            Diametro = valoresDiametro[valoresDiametro.length - 1];
            LongCan = valoresLongCan[valoresLongCan.length - 1];
    
            console.log(`Diametro ajustada: ${Diametro}, Cantidad de medidores ajustada: ${LongCan}`);
    
            fila = valoresDiametro.indexOf(Diametro); // Índice de la longitud ajustada en la matriz
            columna = valoresLongCan.indexOf(LongCan); // Índice de la cantidad de medidores ajustada en la matriz
    
            const valor = matriz[fila][columna];
            document.getElementById("CalcularTabla3").innerText = `Resultado ajustado: ${valor} ⌀`;
        }
    }