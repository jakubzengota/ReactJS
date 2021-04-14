import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avek from './images/avek.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
      margin: 'auto',
      marginTop: '50px',
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: 'auto',
    marginTop: '50px',
    
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: 'auto',
    marginTop: '50px',
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Jakub Zengota" src={avek} className={classes.small} />
      <Avatar alt="Jakub Zengota" src={avek} />
      <Avatar alt="Jakub Zengota" src={avek} className={classes.large} />
    </div>
  );
}