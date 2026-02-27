import React from "react";
// El historial debe mostrar algo como:
// [14:03:22] → 21 °C

function temperatureDisplay({ temperature }) {
  let mensaje = "";

  if (temperature < 15) {
    mensaje = "¡Hace frío!";
  } else if (temperature <= 25) {
    mensaje = "Temperatura agradable";
  } else {
    mensaje = "Hace calor";
  }

  return (
    <div>
      <h2>{temperature} ºC</h2>
      <p>{mensaje}</p>
    </div>
  );
}

export default temperatureDisplay;
