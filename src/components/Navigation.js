import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddRestaurant from '../containers/AddRestaurant';

const Navigation = ( props ) => {
    console.log(props)
    return (
        <AppBar position="relative">
            <Toolbar style= {{ backgroundColor: 'black'}}>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Local Restaurants App
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add-restaurant">Add Restaurant</Link>
                    </li>
                    { props.user.loggedIn ?
                        <li className="nav-list-item"
                                onClick={() => {
                                props.logout()
                            }}>
                            Logout
                        </li>
                    :
                        <li className="nav-list-item"
                            onClick={() => {
                                document.cookie = "loggedIn="
                                window.location.replace("/login")
                            }}>
                            Login
                        </li> 
                    }
                </ul>
            </Toolbar>
                    <Toolbar style={{ backgroundColor: 'rgb(71, 139, 62)'}}>{props.user.loggedIn ? props.user.username : 'Logged Out'}</Toolbar>
                    {props.user.loggedIn ? <AddRestaurant /> : ''}
        </AppBar>
    )
}

export default Navigation;