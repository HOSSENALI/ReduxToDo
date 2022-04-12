import * as Types from '../../types/Types'
//initialize a store object.............
const initializeState = {
  tasks: [],
};
//Do jobs on changes on action...........

function TaskReducer(state = initializeState, action) {
  switch (action.type) {
   
    case Types.ADD_TASK://if i make type this way,less mistake could happen
      return {
        ...state,
        tasks: [action.payload, ...state.tasks ],
        
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
export default TaskReducer;