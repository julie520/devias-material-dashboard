import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, withRouter } from "react-router-dom";
import validate from "validate.js";
import {
  Grid,
  Typography,
  IconButton,
  Button,
  TextField,
  Link
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "@material-ui/icons/PlayForWorkOutlined";

import Minimal from "../../layouts/Minimal";
import { useStyles } from "./sign-in.styles";

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128
    }
  }
};

const SignIn = props => {
  const { history } = props;
  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleBack = () => {
    history.goBack();
  };

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = event => {
    event.preventDefault();
    history.push("/");
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Minimal>
      <div className={classes.root}>
        <Grid container className={classes.grid}>
          <Grid item lg={5} className={classes.quoteContainer}>
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography variant="h1" className={classes.quoteText}>
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
                </Typography>
                <div className={classes.person}>
                  <Typography className={classes.name} variant="body1">
                    Takamaru Ayako
                  </Typography>
                  <Typography className={classes.bio} variant="body2">
                    Manager at invision
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={7} xs={12} className={classes.content}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton onClick={handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form} onSubmit={handleSignIn}>
                  <Typography className={classes.title} variant="h2">
                    Sign in
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Sign in with social media
                  </Typography>
                  <Grid container spacing={2} className={classes.socialButtons}>
                    <Grid item>
                      <Button
                        color="primary"
                        onClick={handleSignIn}
                        size="large"
                        variant="contained"
                      >
                        <FacebookIcon className={classes.socialIcon} />
                        Login with Facebook
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={handleSignIn}
                        size="large"
                        variant="contained"
                      >
                        <GoogleIcon className={classes.socialIcon} />
                        Login with Google
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography
                    align="center"
                    className={classes.sugestion}
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                  <TextField
                    className={classes.textField}
                    error={hasError("email")}
                    fullWidth
                    helperText={
                      hasError("email") ? formState.errors.email[0] : null
                    }
                    label="Email address"
                    name="email"
                    onChange={handleChange}
                    type="text"
                    value={formState.values.email || ""}
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textField}
                    error={hasError("password")}
                    fullWidth
                    helperText={
                      hasError("password") ? formState.errors.password[0] : null
                    }
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={formState.values.password || ""}
                    variant="outlined"
                  />
                  <Button
                    className={classes.signInButton}
                    color="primary"
                    disabled={!formState.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                  <Typography color="textSecondary" variant="body1">
                    Don't have an account?{" "}
                    <Link component={RouterLink} to="/sign-up" variant="h6">
                      Sign up
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Minimal>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
