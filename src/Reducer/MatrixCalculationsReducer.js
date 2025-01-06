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
    SEARCH_LARGEST_NEGATIVE, 
    SEARCH_SMALLEST_POSITIVE_QUOTIENT, 
    DIVIDE_BY_ONE, 
    GAUSS_JORDAN, 
    GET_Z,
    UPDATE_VALUE,
    UPDATE_TYPE,
    UPDATE_INDEX,
    UPDATE_TABLE, 
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

    case XB: {
      // Implementación para XB
      return state;
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

export const dualSimpleReducer = (initialState=[], action)=>{
    switch (action.type) {
        case SEARCH_LARGEST_NEGATIVE:
            return;
        case SEARCH_SMALLEST_POSITIVE_QUOTIENT:
            return;
        case DIVIDE_BY_ONE:
            return;
        case GAUSS_JORDAN:
            return;
        case GET_Z:
            return;
        default:
            return initialState;
    }
}

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