import React, { useState } from 'react';
import { DrawMatrix } from './DrawMatrix';

export const Xb = ({ 
  handleSegmentMatrix, 
  handleCalculateXb, 
  BminusOne = [], 
  changeVectorB = [],
  XbResult = [],
  isFactible = null }) => {

  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = (BminusOne, changeVectorB) => {
    handleSegmentMatrix();
    handleCalculateXb(BminusOne, changeVectorB);
    setHasCalculated(true);
  }
  
  return (
    <>
      <button 
        type="button" 
        className='button button-calculate'
        onClick={() => handleCalculate(BminusOne, changeVectorB)}> 
        Calcular 
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <strong>
          X<sub>B</sub> = B<sup>-1</sup>b<sup>*</sup> =
        </strong>
        <DrawMatrix matriz={BminusOne} /> {/* matriz B^-1 */}
        <strong> * </strong>
        <DrawMatrix matriz={changeVectorB} /> {/* vector b* */}
        <strong> = </strong>
        <DrawMatrix matriz={XbResult} /> {/* result */}

        {
          hasCalculated && (
            isFactible ? (
              <p>Puesto que {XbResult.join(", ")} es POSITIVO, el cambio propuesto es factible</p>
            ) : (
              <p>Puesto que {XbResult.join(", ")} es NEGATIVO, el cambio propuesto NO ES FACTIBLE</p>
            )
          )
        }
      </div>
    </>
  );
};
