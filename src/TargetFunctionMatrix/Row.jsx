export const Row = ({ objectiveFunction, handleUpdateVariable }) => {
  const handleInputChange = (event, index) => {
    const value = event.target.value;
    handleUpdateVariable(index, parseFloat(value)); // Llamamos a la función que actualiza el valor en el reducer
  };

  return (
    <div className="row-Container">
      {objectiveFunction.map((number, index) => (
        <div key={index}>
          <div className="input-container">
            <input
              className="inputNumber"
              type="number"
              value={number}
              onChange={(e) => handleInputChange(e, index)} // Asignamos el manejador onChange
            />
            <span className="focus-border"><i></i></span>
            X <sub>{index + 1}</sub>
          </div>
        </div>
      ))}
    </div>
  );
};
