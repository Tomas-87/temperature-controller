import React from "react";

function HistoryList({ history }) {
  return (
    <div>
      <h1>Historial</h1>
      {history.length === 0 ? (
        <p>No hay historial</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              [{item.time}]{item.temp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoryList;
