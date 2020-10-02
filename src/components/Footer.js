import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#eee',
      padding: theme.spacing(6),
    },
  
  
  }));

const Footer = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            &copy; Anonymous Python 2020
            </Typography>
        </footer>
    );
};


export default Footer;