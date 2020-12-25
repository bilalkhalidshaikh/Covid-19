import React, { useRef, useState, forwardRef } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import styles from "./Cards.module.css";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  if (!confirmed) {
    return (
      <>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
          ref={ref}
          style={{ ...style }}
          {...mouseHandlers}
        >
          <CardContent
            style={{
              color: "#ccc",
            }}
          >
            <animated.div
              ref={ref}
              style={{
                ...style,
              }}
              {...mouseHandlers}
            >
              <Typography gutterBottom>Infected</Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography>{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2" component="p">
                Number of active cases of COVID-19
              </Typography>
            </animated.div>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent
            style={{
              color: "#ccc",
            }}
          >
            <Typography gutterBottom>Recovered</Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent
            style={{
              color: "#ccc",
            }}
          >
            <Typography gutterBottom>Deaths</Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
