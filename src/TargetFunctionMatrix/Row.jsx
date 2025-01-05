import { InputNumber } from "./InputNumber";

export const Row = ({ functObjec, handleChange, isRestrictionRow}) => {
  return (
    <div className="row-Container">
      {functObjec.map((number, index) => (
        <InputNumber 
          key = {index} 
          index = {index}
          number = {number} 
          handleChange = {handleChange}
          isRestrictionRow = { isRestrictionRow }
          length = {functObjec.length }
        /> 
      ))}
    </div>
  );
};
