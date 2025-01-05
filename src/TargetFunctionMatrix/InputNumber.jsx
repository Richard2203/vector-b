import React from 'react'

export const InputNumber = ({handleChange, number, index, length, isRestrictionRow}) => {
  
	const highlightStyle = { 
		fontSize: '2em',
		fontWeight: 'bold', 
		color: 'var( --color-azul-grisaceo-oscuro)',
		marginRight: '10px'
	};

	return (
		<div className="input-container">
			{ isRestrictionRow && index === length - 1 && <span style={highlightStyle}>&le;</span> }
			<input
					className="inputNumber"
					type="number"
					value={number}
					onChange={(e) => handleChange(index, parseFloat(e.target.value))}
			/>
			<span className="focus-border"><i></i></span>
			{
				( isRestrictionRow && index===length-1 ) 
					? <></>
					: (<>X<sub>{index + 1}</sub></>) 
			}

			
		</div>
  )
};