import Fraction from 'fraction.js';
import { 
    ADD_VARIABLE, 
    REMOVE_VARIABLE, 
    ADD_RESTRICTION, 
    REMOVE_RESTRICTION, 
    UPDATE_VARIABLE,
    XB, 
    isFACTIBLE, 
    Z,
    UPDATE_VALUE,
    UPDATE_TYPE,
    UPDATE_INDEX,
    UPDATE_TABLE,
    SEGMENT_MATRIX, 
} from './actionTypes';

export const optimalSolutionReducer = (state = {}, action)=>{
  switch (action.type) {
    case UPDATE_VALUE: {
      const { filaIndex, valorIndex, nuevoValor } = action.payload;
      const nuevasFilasValor = [...state.filas];
      // Asignamos el valor directamente como cadena
      nuevasFilasValor[filaIndex].valores[valorIndex] = nuevoValor;
      return { ...state, filas: nuevasFilasValor };
    }
  
    case UPDATE_TYPE: {
      const { filaIndex: tipoFilaIndex, nuevoTipo } = action.payload;
      const nuevasFilasTipo = [...state.filas];
      // Actualizamos el tipo como cadena
      nuevasFilasTipo[tipoFilaIndex].tipo = nuevoTipo;
      return { ...state, filas: nuevasFilasTipo };
    }
  
    case UPDATE_INDEX: {
      const { filaIndex: indiceFilaIndex, nuevoIndice } = action.payload;
      const nuevasFilasIndice = [...state.filas];
      // Actualizamos el índice como número o null si está vacío
      nuevasFilasIndice[indiceFilaIndex].indice =
        nuevoIndice !== "" ? parseInt(nuevoIndice, 10) : null;
      return { ...state, filas: nuevasFilasIndice };
    }
    
    case UPDATE_TABLE: {
      const columnas = ["Ecuación"]; 
      for (let i = 1; i <= action.payload.VariablesNumber; i++) 
        columnas.push(`X${i}`); 

      for (let i = 1; i <= action.payload.RestrictionsNumber; i++) 
        columnas.push(`S${i}`); 
      
      columnas.push("Sol"); 
      
      const filas = []; 
      for (let i = 0; i <= action.payload.RestrictionsNumber; i++) { 
        filas.push({ 
          tipo: i === 0 ? 'Z' : 'S', 
          indice: i === 0 ? null : i, 
          valores: new Array(
            action.payload.VariablesNumber + action.payload.RestrictionsNumber + 1).fill("0") 
        }); 
      } 
      return { ...state, columnas, filas }; 
    }

    case SEGMENT_MATRIX: {
      let indexLetterS = 0;
	  
      // Encontrar el índice del primer elemento que contenga la letra 'S' en las columnas
      for (let i = 0; i < state.columnas.length; i++) {
        if (state.columnas[i].includes('S')) {
          indexLetterS = i-1; // Guardar el índice
          break;
        }
      }
      // Índices para segmentar
      const startIndex = indexLetterS;
      const endIndex = state.filas[0].valores.length - 1;
      
      // Segmentar los valores de cada fila
      const segmentedMatrix = state.filas.slice(1).map((fila) =>
        fila.valores.slice(startIndex, endIndex) // Desde startIndex hasta endIndex incluido
      );

      return{
        ...state, BminusOne: segmentedMatrix,
      }
    }

    case XB: {      
      const { matrixA, matrixB } = action.payload;
      console.log(matrixA, matrixB);
      const rowsA = matrixA.length;
      const colsA = matrixA[0].length;
      const sizeB = matrixB.length; // La longitud del vector B

      // Caso especial: ambas matrices tienen un único elemento
      if (rowsA === 1 && colsA === 1 && sizeB === 1) {
        const singleResult = new Fraction(matrixA[0][0]).mul(new Fraction(matrixB[0]));
        return {
          ...state,
          XbResult: [[singleResult.toFraction(true)]],
        };
      }

      // Inicializar el resultado como un vector
      const result = Array(rowsA).fill(new Fraction(0));
      console.log(result);

      // Multiplicar la matriz A por el vector B
      for (let i = 0; i < rowsA; i++) {
        for (let k = 0; k < colsA; k++) {
          const valueA = new Fraction(matrixA[i][k]);
          const valueB = new Fraction(matrixB[k]); // Acceder directamente al valor de matrixB[k]
          result[i] = result[i].add(valueA.mul(valueB));
        };
      };

      console.log(result);

      // Convertir los resultados a fracción y devolver el estado actualizado
      return {
        ...state,
        XbResult: result.map(el => el.toFraction(true)),
      };


    }
  
    case isFACTIBLE: {
      // Implementación para verificar factibilidad
      return state;
    }
  
    case Z: {
      // Implementación para Z
      return state;
    }
  
    default:
      return state;
  }  
};

export const matrixReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_RESTRICTION:
            const newArrayLength = state.FunctionObject.length + 1;
            const newArray = Array.from({ length: newArrayLength }, () => 0);
            return {
                ...state,
                Restrictions: [...state.Restrictions, newArray],
                changeRow: [...state.changeRow, 0],
            };
        case REMOVE_RESTRICTION:  
            if( state.Restrictions.length <= 1 ) return state;    
            return {
                ...state,
                Restrictions: state.Restrictions.slice(0, -1),
                changeRow: state.changeRow.slice(0, -1),
            };
        case ADD_VARIABLE:
            return {
                ...state,
                FunctionObject: [...state.FunctionObject, 0],
                Restrictions: state.Restrictions.map(restriction => [...restriction, 0]),
            };
        case REMOVE_VARIABLE:
            if (state.FunctionObject.length <= 2) return state
            return {
                ...state,
                FunctionObject: state.FunctionObject.slice(0, -1),
                Restrictions: state.Restrictions.map(restriction => restriction.slice(0, -1)),
            };
        case UPDATE_VARIABLE:
            if (action.payload.type === "FunctionObject") {
                const updatedFunctionObject = [...state.FunctionObject];
                updatedFunctionObject[action.payload.index] = action.payload.value;
                return { ...state, FunctionObject: updatedFunctionObject };
            }
        
            if (action.payload.type === "Restrictions") {
                const updatedRestrictions = [...state.Restrictions];
                updatedRestrictions[action.payload.row][action.payload.col] = action.payload.value;
                return { ...state, Restrictions: updatedRestrictions };
            }

            if (action.payload.type === "BRow") {
                const updatedBRow = [...state.changeRow];
                updatedBRow[action.payload.index] = action.payload.value;
                return { ...state, changeRow: updatedBRow };
            }

            return state;
        default:
            return state;
    };
};