import {createStore} from 'redux'
import {employeeReducer} from "./reducers/employeeReducer";

export const store = createStore(
    employeeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
