import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { getAll } from '../../../redux/postsRedux';
import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const Component = ({className, postsAll}) => {
  const [login, setLogin] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();

  const handleChange = (event) => {
    setLogin(!login);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Link to='#' onClick={handleChange}>
        {login ? 'Logout' : 'Login'}
      </Link>
      {login && (
        <div >
          <Link className={styles.addCard} to={'/post/add'} variant='subtitle1'>
            <Fab
              size='small'
              color='primary'
              aria-label='add'
              variant='extended'
            >
              Add new
            </Fab>
          </Link>
          <div className={styles.card}>
            {postsAll.map((post) => (
              <Card key={post.id} className={styles.card__item} sx={{ maxWidth: 345 }}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={post.title}
                  subheader={post.datePublication}
                />
                <CardMedia
                  className={styles.image}
                  component='img'
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography variant='subtitle2'>
                    {post.text}
                  </Typography>
                  <div className={styles.price}>
                    <Typography variant='subtitle1'>
                        Price: {post.price}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Location: {post.location}
                    </Typography>
                  </div>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{post.text}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


Component.propTypes = {
  className: PropTypes.string,
  postsAll: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      datePublication: PropTypes.string,
      dateLastUpdate: PropTypes.string,
      email: PropTypes.string,
      status: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string,
      phone: PropTypes.string,
      location: PropTypes.string,
    })
  ),
};

const mapStateToProps = state => ({
  postsAll: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
