export const Row = ({ functObjec, handleFunctionObjectChange }) => {
  return (
    <div className="row-Container">
      {functObjec.map((number, index) => (
        <div key={index}>
          <div className="input-container">
            <input
              className="inputNumber"
              type="number"
              value={number}
              onChange={(e) => handleFunctionObjectChange(index, parseFloat(e.target.value))}
            />
            <span className="focus-border"><i></i></span>
            X <sub>{index + 1}</sub>
          </div>
        </div>
      ))}
    </div>
  );
};
