import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Typography from "@material-ui/core/Typography";
import { use3dEffect } from 'use-3d-effect';
import { animated } from 'react-spring';

const useStyles = makeStyles({
  root: {
    background: "transparent",
    marginLeft: "auto",
    marginRight: "auto"
  },
  copyright: {
    color: "#ccc",
    fontSize: "15px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const ref = React.useRef(null);
  const {style, ...mouseHandlers} = use3dEffect(ref);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <animated.div
      ref={ref}
      style={{
        background:"transparent",height: "30px",
        ...style
      }}
      {...mouseHandlers}
    >
        <Typography className={classes.copyright}>
          &copy; 2020-{new Date().getFullYear()} Covid-19 Tracker Developed with
          💗 By Bilal Shaikh
        </Typography>
    </animated.div>
    <hr />
    </BottomNavigation>
  );
}
