import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import { register, login } from "../../actions/authenActions.js";

import style from "./style.css";

const styleJss = theme => ({
  noShadow: {
    [theme.breakpoints.down(600)]: {
      boxShadow: "none"
    }
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  spacingText: {
    margin: "24px 0"
  }
});

const Authentication = ({ classes }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Card className={style.formContainer} classes={{ root: classes.noShadow }}>
        {isLogin ? <Login setIsLogin={setIsLogin} /> : <Signup setIsLogin={setIsLogin} />}
      </Card>
    </div>
  );
};

let Login = ({ classes, setIsLogin, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const initLogin = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5" align="center">
        Welcome back!
      </Typography>
      <form onSubmit={initLogin}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus value={email} onChange={event => setEmail(event.target.value)} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input name="password" type="password" id="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} />
        </FormControl>
        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Log in
        </Button>
      </form>
      <Typography component="h6" variant="body2" align="center" className={`${classes.spacingText} ${classes.primaryColor}`}>
        Forgot Password?
      </Typography>
      <Typography component="h6" variant="body2" align="center" className={`${classes.primaryColor}`}>
        Need an account? <span onClick={() => setIsLogin(false)} className={style.pointer}>Register</span>
      </Typography>
    </React.Fragment>
  );
};

Login = withStyles(styleJss)(connect(null, { login })(Login));

let Signup = ({ classes, setIsLogin, register }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const initRegister = (event) => {
    event.preventDefault();
    register(email, username, password);
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5" align="center">
        Connect to the world
      </Typography>
      <form onSubmit={initRegister}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus value={email} onChange={event => setEmail(event.target.value)} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" name="username" autoComplete="username" autoFocus value={username} onChange={event => setUsername(event.target.value)} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input name="password" type="password" id="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} />
        </FormControl>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Register
        </Button>
      </form>
      <Typography component="h6" variant="body2" align="center" className={`${classes.spacingText} ${classes.primaryColor}`}>
        Already have an account? <span onClick={() => setIsLogin(true)} className={style.pointer}>Login</span>
      </Typography>
    </React.Fragment>
  );
};

Signup = withStyles(styleJss)(connect(null, { register })(Signup));

export default withStyles(styleJss)(Authentication);
