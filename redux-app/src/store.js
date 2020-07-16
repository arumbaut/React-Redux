import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";


//const initialState = {};
const middlewares = [thunk];

const store = createStore(
    rootReducer,
    //initialState,
    windows_REDUX_DEVTOOLS_EXTENSION && windows_REDUX_DEVTOOLS_EXTENSION_(),
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store;