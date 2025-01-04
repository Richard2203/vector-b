export const Row = ({objectiveFunction}) => {
  console.log(objectiveFunction);
  return (
    <div className="row-Container">
      <div className="input-container">
        <input className="inputNumber" type="number" defaultValue={1}/>
        <span className="focus-border"><i></i></span>
      </div>  
    </div>
  )
}
