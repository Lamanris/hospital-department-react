import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import logo from '../assets/media/logo.svg'

const Header = () => {
    let history = useHistory();
    const handleClick = () => history.push("/")

    return (
        <div className="header">
            <Button variant="contained" className="btn" onClick={handleClick}>
                Home
            </Button>
            <img className="logo" src={logo} alt="Logo"/>
        </div>
    );
};

export default Header;