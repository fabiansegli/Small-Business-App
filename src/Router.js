import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import cookie from 'cookie';
import Home from './containers/Home';
import Login from './containers/Login';
import Restaurant from './containers/Restaurant';
import AddRestaurant from './containers/AddRestaurant';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({component: Component,...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
        ? <Component {...props} />
        : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/restaurant/:id" component={Restaurant} />
            <ProtectedRoute path="/add-restaurant" component={AddRestaurant} />
        </Switch>
    );
};

export default Router;