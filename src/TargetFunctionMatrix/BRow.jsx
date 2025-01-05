import { InputNumber } from './InputNumber'

export const BRow = ({ changeRow, handleBRowChange }) => {
  return (
    <>
			<h3>¿Solución óptima para: </h3>

			<h3 style={{ display: 'inline-block', marginRight: '10px' }}>B =</h3>
			{changeRow.map((number, index) => (
				<InputNumber 
					key = {index} 
					index = {index}
					number = {number} 
					handleChange = {handleBRowChange}
					isRestrictionRow = { false }
				/>  
			))} <h3 style={{ display: 'inline-block'}}>?</h3>
    </>
  )
}
