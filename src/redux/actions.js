import {SET_EMPLOYEES, SET_WORKLOG} from "./constants";
import {getEmployees, getWorklog} from "../api";

export const setEmployees = async (dispatch) => {
    const doctors = await getEmployees()
    dispatch({type: SET_EMPLOYEES, payload: doctors})
}

export const setWorklog = async (dispatch) => {
    const worklog = await getWorklog()
    dispatch({type: SET_WORKLOG, payload: worklog})
}
