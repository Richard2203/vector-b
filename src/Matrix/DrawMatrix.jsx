import React from 'react'

export const DrawMatrix = ({ matriz }) => {
  if (matriz.length === 0) return null;

  const isMatrix = Array.isArray(matriz[0]);

  return (
    <div className={`matriz-container ${isMatrix ? '' : 'vertical-array'}`}>
      <table className="matriz-table">
        <tbody>
          {isMatrix
            ? matriz.map((fila, rowIndex) => (
                <tr key={rowIndex}>
                  {fila.map((valor, colIndex) => (
                    <td key={colIndex}>{valor}</td>
                  ))}
                </tr>
              ))
            : (
                matriz.map((valor, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{valor}</td>
                  </tr>
                ))
              )}
        </tbody>
      </table>
    </div>
  );
}

