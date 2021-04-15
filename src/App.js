import React, { useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useDispatch} from "react-redux";

import Dashboard from "./components/Dashboard";
import Worklog from "./components/Worklog";
import Error404 from "./components/Error404";
import Header from "./components/Header";
import {setEmployees, setWorklog} from "./redux/actions";


const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        setEmployees(dispatch)
        setWorklog(dispatch)
    },[])

    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/worklog/:employeeId" component={Worklog}/>
                <Route component={Error404}/>
            </Switch>
        </Router>
    )
};

export default App;