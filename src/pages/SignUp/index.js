import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, withRouter } from "react-router-dom";
import validate from "validate.js";
import { useStyles } from "./sign-up.styles";
import {
  Grid,
  Typography,
  IconButton,
  TextField,
  Checkbox,
  Link,
  FormHelperText,
  Button
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Minimal from "../../layouts/Minimal";
import { schema } from "./sign-up.validiate";

const SignUp = props => {
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

  const handleBack = () => {
    history.goBack();
  };

  const handleSignUp = event => {
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
                <Typography className={classes.quoteText} variant="h1">
                  Hella narwhal Cosby sweater McSweeny's, salvia kitsch before
                  they sold out High Life.
                </Typography>
                <div className={classes.person}>
                  <Typography className={classes.name} variant="body1">
                    Takamaru Ayako
                  </Typography>
                  <Typography className={classes.bio} variant="body2">
                    Manager at inVision
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton onClick={handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form} onSubmit={handleSignUp}>
                  <Typography className={classes.title} variant="h2">
                    Create new account
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Use your email to create new account
                  </Typography>
                  <TextField
                    className={classes.textField}
                    error={hasError("firstName")}
                    fullWidth
                    helperText={
                      hasError("firstName")
                        ? formState.errors.firstName[0]
                        : null
                    }
                    label="First name"
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    value={formState.values.firstName || ""}
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textField}
                    error={hasError("lastName")}
                    fullWidth
                    helperText={
                      hasError("lastName") ? formState.errors.lastName[0] : null
                    }
                    label="Last name"
                    name="lastName"
                    onChange={handleChange}
                    type="text"
                    value={formState.values.lastName || ""}
                    variant="outlined"
                  />
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
                  <div className={classes.policy}>
                    <Checkbox
                      checked={formState.values.policy || false}
                      className={classes.policyCheckbox}
                      color="primary"
                      name="policy"
                      onChange={handleChange}
                    />
                    <Typography
                      className={classes.policyText}
                      color="textSecondary"
                      variant="body1"
                    >
                      I have read the{" "}
                      <Link
                        color="primary"
                        component={RouterLink}
                        to="#"
                        underline="always"
                        variant="h6"
                      >
                        Terms and Conditions
                      </Link>
                    </Typography>
                  </div>
                  {hasError("policy") && (
                    <FormHelperText error>
                      {formState.errors.policy[0]}
                    </FormHelperText>
                  )}
                  <Button
                    className={classes.signUpButton}
                    color="primary"
                    disabled={!formState.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                  <Typography color="textSecondary" variant="body1">
                    Have an account?{" "}
                    <Link component={RouterLink} to="/sign-in" variant="h6">
                      Sign in
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

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignUp);
