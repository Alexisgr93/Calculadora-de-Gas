function verificarUbicacion() {
      
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var userLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Coordenadas del centro de la ubicación permitida
        var centerLatLng = {
          lat: -34.6471916,
          lng:  -58.5201163
           
        };

        // Calcular la distancia entre los puntos
        var distancia = calcularDistancia(userLatLng, centerLatLng);

        // Radio de 3 cuadras en metros
        var radioTresCuadras = 300;

        // Verificar si la distancia está dentro del radio permitido
        if (distancia <= radioTresCuadras) {
          // El usuario está dentro del área permitida, redirigir a otra página
          window.location.href = 'index.html';
        } else {
          // El usuario está fuera del área permitida, mostrar alerta
          alert('Lo siento, estás fuera del área permitida.');
        }
      });
    } else {
      // Manejar el caso en que el navegador no soporte la geolocalización
      console.log('El navegador no soporta la geolocalización.');
    }
  }

// Función para calcular la distancia entre dos puntos en coordenadas
function calcularDistancia(puntoA, puntoB) {
  var latDiff = (puntoA.lat - puntoB.lat) * Math.PI / 180;
  var lngDiff = (puntoA.lng - puntoB.lng) * Math.PI / 180;
  var a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
          Math.cos(puntoA.lat * Math.PI / 180) * Math.cos(puntoB.lat * Math.PI / 180) *
          Math.sin(lngDiff / 2) * Math.sin(lngDiff / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distancia = 6371 * c * 1000; // Radio de la Tierra en metros

  return distancia;
}


function obtenerUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var userLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        alert('Tu ubicación actual es: ' + userLatLng.lat + ', ' + userLatLng.lng);
      }, function(error) {
        // Manejar errores de geolocalización
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert('El usuario denegó la solicitud de geolocalización.');
            break;
          case error.POSITION_UNAVAILABLE:
            alert('La información de ubicación no está disponible.');
            break;
          case error.TIMEOUT:
            alert('La solicitud para obtener la ubicación del usuario ha expirado.');
            break;
          case error.UNKNOWN_ERROR:
            alert('Ocurrió un error desconocido.');
            break;
        }
      });
    } else {
      // Manejar el caso en que el navegador no soporte la geolocalización
      alert('El navegador no soporta la geolocalización.');
    }
  }
