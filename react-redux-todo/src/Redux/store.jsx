import { legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux"; // redux-toolkit
import { counterReducer} from "./Counter/reducer";
import { todoReducer} from "./Todo/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers ({
    
    todo: todoReducer,
    });

    // const middleware = (store) => (next) => (action) => {
    //     if (typeof action=== "function")
    //     {
    //        return action(store.dispatch);
    //     }
    //         next(action);
    //     };
export const store = createStore( rootReducer,applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
    // {counter: 0 ,todo:[]}); //(reducer,initialState)
    // 9308080808