// { type: , payload: "" }=>Action is a object

export const ADD_TODO = "ADD_TODO";


export const addTodo = (data) => {
    return {
    type: ADD_TODO,
    payload: data,
    };
    };


    export const getTodo = () => async (dispatch) => {
       const data= await fetch("http://localhost:8080/todo").then(x => x.json()).then(data => {
            dispatch(addTodo(data));
            }) 
        }