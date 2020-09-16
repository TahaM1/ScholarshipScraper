import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const AboutCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Typography variant="overline" component="p" color="textSecondary">
      Find LOCAL scholarships faster
    </Typography>
  );
};

export default AboutCard;
