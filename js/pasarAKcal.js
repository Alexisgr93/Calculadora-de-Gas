
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

var zx = document.getElementById("myDIV");
const overlay = document.getElementById("overlay");
function myFunction() {
        zx.style.display = "block";
        overlay.style.display = "block";

}
function ocultarInfo() {
    // Ocultar la tabla al hacer clic en el botón "Close"
    
    
        zx.style.display = 'none';
        overlay.style.display = "none";

}



document.addEventListener('mouseup', function(e) {
    if (zx.style.display === 'block' && !zx.contains(e.target)) {
        ocultarInfo();
    }
});