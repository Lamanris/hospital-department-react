import {SET_EMPLOYEES, SET_WORKLOG} from "../constants";

const initialState = {
    employees: [],
    worklog: []
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return {...state, employees: action.payload}
        case SET_WORKLOG:
            return {...state, worklog: action.payload}
        default:
            return state
    }
}