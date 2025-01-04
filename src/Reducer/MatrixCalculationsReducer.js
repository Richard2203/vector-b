import { 
    ADD_VARIABLE, 
    REMOVE_VARIABLE, 
    ADD_RESTRICTION, 
    REMOVE_RESTRICTION, 
    XB, 
    isFACTIBLE, 
    Z, 
    SEARCH_LARGEST_NEGATIVE, 
    SEARCH_SMALLEST_POSITIVE_QUOTIENT, 
    DIVIDE_BY_ONE, 
    GAUSS_JORDAN, 
    GET_Z 
} from './actionTypes';

export const restricVarReducer = (initialState=[], action)=>{
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