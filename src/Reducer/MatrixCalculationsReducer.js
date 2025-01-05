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

export const matrixReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_RESTRICTION:
            const newArrayLength = state.FunctionObject.length + 1;
            const newArray = Array.from({ length: newArrayLength }, () => 0);
            return {
                ...state,
                Restrictions: [...state.Restrictions, newArray],
            };
        case REMOVE_RESTRICTION:  
            if( state.Restrictions.length <= 1 ) return state;    
            return {
                ...state,
                Restrictions: state.Restrictions.slice(0, -1),
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
            return state;
        default:
            return state;
    };
};