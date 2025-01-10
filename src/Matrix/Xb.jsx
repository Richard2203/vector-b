import React, { useEffect } from 'react'
import { DrawMatrix } from './DrawMatrix';
import Fraction from 'fraction.js';

export const Xb = ({ handleSegmentMatrix, handleCalculateXb, BminusOne = [], changeVectorB = [] }) => {
  
  const handleCalculate = (BminusOne, changeVectorB) => {
    handleSegmentMatrix();
    handleCalculateXb(BminusOne, changeVectorB);
  }
  
  // console.log(BminusOne, changeVectorB);
  return (
    <>
      <button 
			type="button" 
			className='button button-calculate'
			onClick = { ()=> handleCalculate(BminusOne, changeVectorB) }> Calcular </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <strong>
          X<sub>B</sub> = B<sup>-1</sup>b<sup>*</sup> =
        </strong>
        <DrawMatrix matriz={BminusOne} /> {/* matriz B^-1 */}
        <strong> * </strong>
        <DrawMatrix matriz={changeVectorB} /> {/* vector b* */}
        <strong> = </strong>
      </div>
    </>
  );
};
