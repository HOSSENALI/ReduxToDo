import * as Types from '../types/Types'
//initialize a store object.............
const initializeState = {
    counter: 10,
    tasks: []
  };
  //Do jobs on changes on action...........
  
function counterReducer(state = initializeState, action) {
    switch (action.type) {
      case "INCREMENT_ONE":
        const upDatedValue = typeof action.payload === "undefined" ? 1 : action.payload;
        return {
          ...state,
          counter: state.counter + parseInt(upDatedValue),
        };
        break;
      case "DECREMENT_ONE":
        return {
          ...state,
          counter: state.counter - 1,
        };
        break;
      case "UPDATE":
        return {
          ...state,
          counter: parseInt(action.payload),
        };
        break;
      case Types.ADD_TASK://if i make type this way,less mistake could happen
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
        break;
      case Types.GET_TASK:
        return {
          ...state,
          tasks: action.payload,
          
        }
        break;
      default:
        break;
    }
    return state;
  }
  export default counterReducer;