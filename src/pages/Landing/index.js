import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Layout from "../../layouts/Layout";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const variants = {
  h1: "Lorem ipsum dolor sit amet",
  h2: "consectetur adipisicing elit.",
  h3: "Ratione in rerum odit error possimus eos harum fugit?",
  h4: "Laborum esse reprehenderit",
  h5: "optio assumenda",
  h6: "hic deleniti eligendi nam dolor suscipit ut harum",
  subtitle1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quod?",
  subtitle2: "Lorem ipsum dolor sit amet.",
  body1:
    "Justo proin curabitur dictumst semper auctor, consequat tempor, nostra aenean neque turpis nunc. Leo. Sapien aliquet facilisi turpis, elit facilisi praesent porta metus leo. Dignissim amet dis nec ac integer inceptos erat dis Turpis sodales ad torquent. Dolor, erat convallis.Laoreet velit a fames commodo tristique hendrerit sociosqu rhoncus vel sapien penatibus facilisis faucibus ad. Mus purus vehicula imperdiet tempor lectus, feugiat Sapien erat viverra netus potenti mattis purus turpis. Interdum curabitur potenti tristique. Porta velit dignissim tristique ultrices primis.",
  body2:
    "Justo proin curabitur dictumst semper auctor, consequat tempor, nostra aenean neque turpis nunc. Leo. Sapien aliquet facilisi turpis, elit facilisi praesent porta metus leo. Dignissim amet dis nec ac integer inceptos erat dis Turpis sodales ad torquent. Dolor, erat convallis.",
  caption: "Lorem, ipsum dolor.",
  overline: "Lorem ipsum dolor sit amet consectetur.",
  button: "Lorem, ipsum."
};

const Landing = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={4}>
          {Object.keys(variants).map((key, i) => (
            <Fragment key={1}>
              <Grid item sm={3} xs={12}>
                <Typography variant="caption">{key}</Typography>
              </Grid>
              <Grid item sm={9} xs={12}>
                <Typography variant={key}>{variants[key]}</Typography>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default Landing;
