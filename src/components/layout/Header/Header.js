import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core//Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Component = ({className, children}) => {
  const classes = useStyles();
  const [user, setUser] = useState(false);
  const handleChange = (event) => {
    setUser(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className={clsx(className, styles.root)}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={user}
                onChange={handleChange}
                aria-label='login switch'
              />
            }
            label={user ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position='static'>
          <Toolbar className={styles.toolbar}>
            <IconButton
              size='small'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              className={classes.menuButton}
            >
              <HomeIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} className={classes.title}>
            Bulletin Board
            </Typography>

            {!user && (
              <div>
                <IconButton
                  size='small'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  color='inherit'
                  href='https://google.com'
                >
                  <AccountCircle />
                Login
                </IconButton>
              </div>
            )}
            {user && (
              <div>
                <IconButton
                  size='small'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  color='inherit'
                  href='/'
                >
                  <Link to={'/'} className={styles.link}>
                  Yours adverts
                  </Link>
                  <AccountCircle />
                Logout
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
        {children}
      </div>
    </Box>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
