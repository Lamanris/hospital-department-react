import React, { useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getEmployees, getWorklog } from "./api";
import {useDispatch} from "react-redux";

import Table from "./components/Table";
import Worklog from "./components/Worklog";
import Error404 from "./components/Error404";
import Header from "./components/Header";
import {setEmployees, setWorklog} from "./redux/actions";


const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        async function fetch () {
            const doctors = await getEmployees()
            dispatch(setEmployees(doctors))
            const worktime = await getWorklog()
            dispatch(setWorklog(worktime))
        }
        fetch()
    },[])

    return (
        <Router>
            <Route path="/" component={Header}/>
            <Switch>
                <Route exact path="/"><Table /></Route>
                <Route exact path="/worklog/:employeeId"><Worklog /></Route>
                <Route component={Error404}/>
            </Switch>
        </Router>
    )
};

export default App;