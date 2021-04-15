import {SET_EMPLOYEES, SET_WORKLOG} from "./constants";

export function setEmployees (employees) {
    return {
        type: SET_EMPLOYEES,
        payload: employees
    }
}

export function setWorklog (worklog) {
    return {
        type: SET_WORKLOG,
        payload: worklog
    }
}