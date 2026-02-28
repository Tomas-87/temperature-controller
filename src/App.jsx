import React from "react";
import { useState, useEffect } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControls from "./components/TemperatureControls";
import HistoryList from "./components/HistoryList";
import "./App.css";

export default function App() {
  const [temperature, setTemperature] = useState(20);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(() => {
    //primer renderizado con localStorage si no hubiese seria useState([])
    const saved = localStorage.getItem("temperatureHistory");
    return saved ? JSON.parse(saved) : [];
  });

  //guardar cada cambio en localStorage
  useEffect(() => {
    localStorage.setItem("temperatureHistory", JSON.stringify(history));
  }, [history]);

  //añadir historial
  const addHistory = (newTemp) => {
    setHistory((prev) => [
      ...prev,
      { time: new Date().toLocaleTimeString(), temp: newTemp },
    ]);
  };

  //subir temperatura
  const incrementTemperature = () => {
    const newTemp = temperature + 1;

    if (newTemp > 40) return;

    setTemperature(newTemp);
    addHistory(newTemp);
  };

  //Bajar temperatura
  const decrementTemperature = () => {
    const newTemp = temperature - 1;

    if (newTemp < 0) return;

    setTemperature(newTemp);
    addHistory(newTemp);
  };

  //Reset
  const resetTemperature = () => {
    setTemperature(20);
    setHistory([]);
  };

  //simular carga en el historial
  useEffect(() => {
    if (history.length === 0) return;
    setLoading(true);

    const time = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(time);
  }, [history]);

  return (
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls
        incrementTemperature={incrementTemperature}
        decrementTemperature={decrementTemperature}
        resetTemperature={resetTemperature}
      />
      {loading ? (
        <div className="loading">
          <span className="spinner" />
          <span>Cargando historial...</span>
        </div>
      ) : (
        <HistoryList history={history} />
      )}
    </div>
  );
}
