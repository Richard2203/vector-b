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
} from './actionTypes';

export const variablesReducer = (initialState=[], action)=>{
    switch (action.type) {
        case ADD_VARIABLE:
            return [...initialState, action.payload];
        case REMOVE_VARIABLE:      
            return state.length > 0 ? state.slice(0, -1) : state;  // Elimina el último elemento si hay alguno
        case UPDATE_VARIABLE: // Nuevo caso para actualizar un valor
            const { index, newValue } = action.payload;
            return state.map((item, idx) =>
                idx === index ? newValue : item
            );
        default:
            return initialState;
    } 
}

export const restrictionsReducer = (initialState=[], action)=>{
    switch (action.type) {
        case ADD_VARIABLE:
            return;
        case REMOVE_VARIABLE:
            return;
        case ADD_RESTRICTION:
            return;
        case REMOVE_RESTRICTION:
            return;
        default:
            return initialState;
    }
}

export const optimalSolutionReducer = (initialState=[], action)=>{
    switch (action.type) {
        case XB:
        case isFACTIBLE:
        case Z:
           return;
        default:
            return initialState;
    }
}

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