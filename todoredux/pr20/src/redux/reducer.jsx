const initialState = {todo : "",}

export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [ ...state , action.payload];  
      case "DELETE_TODO":
        return state.filter((_, i) => i !== action.payload); 
      case "CLEAR_TODO":
        return state = [];
      case "EDIT_TODO":
        // return state.filter[...state]
      default:
        return state; 
    }
  }


  


