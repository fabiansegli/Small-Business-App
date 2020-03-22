import React from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = (props) => {

    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" 
          >
            <TextField
              required
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              name="password"
              label="Password"
              type="password" />
          <Link to={'/'}>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
              onClick={()=>props.login()}
              >Login</Button>
          </Link>
          </form>
        </Container>
      </div>
    );
};

export default Login; 