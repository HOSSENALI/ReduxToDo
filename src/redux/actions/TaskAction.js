import axios from "axios";
import * as Types from '../types/Types'
export const getTasksDataAction = () => (dispatch) => {
    axios
        .get("https://todo-app37.herokuapp.com/loadTodo")
        .then((response) => {
            let data = response.data;
            data.sort();

            data.reverse();
            dispatch({ type: Types.GET_TASK, payload: data });
        });
};

export const storeTasksDataAction = (taskItem) => (dispatch) => {
    let isAdded = false;
    axios
    .post("https://todo-app37.herokuapp.com/addTodo", taskItem)
        // .then((response) => {

        //     isAdded = response.data;
        //     dispatch({ type: "ADD_TASK", payload: taskItem });
        //     dispatch(getTasksDataAction());
        // });
};