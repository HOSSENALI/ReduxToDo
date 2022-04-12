
//initialize a store object.............
const initializeState = {
  counter: 10,
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
      console.log("Nothing");
      return {
        ...state,
        counter: parseInt(action.payload),
      };
      break;
    default:
      break;
  }
  return state;
}
export default counterReducer;