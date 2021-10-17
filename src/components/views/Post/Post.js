/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, getOnePost } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';

const Component = ({className, post}) =>  {
  return (
    <div className={clsx(className, styles.root)}>
      <Grid container className={styles.postContainer}>
        <Grid item xs={12} sm={5} md={6}>
          <img className={styles.postImage} src={post.image} alt='img' />
        </Grid>
        <Grid item xs={12} sm={7} md={6} className={styles.content}>
          <div className={styles.titleWrapper}>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              className={styles.title}
            >
              {post.title}
            </Typography>
            <Link href={`/post/${post.id}/edit`} className={styles.postEdit}>
              <Typography className={styles.editContent}>Edit</Typography>
              <EditIcon className={styles.editIcon} />
            </Link>
          </div>
          <Typography
            variant='body2'
            color='textSecondary'
            component='div'
            className={styles.postDescription}
          >
            {post.text}
          </Typography>

          <div className={styles.postDetails}>
            <LocalOfferIcon className={styles.detailsIcon} />
            <Typography variant='body2' component='div' className={styles.author}>
              {post.price}
            </Typography>
          </div>

          <div className={styles.postDetails}>
            <MailOutlineIcon className={styles.detailsIcon} />
            <Typography variant='body2' component='div' className={styles.author}>
              {post.email}
            </Typography>
          </div>

          <div className={styles.postDetails}>
            <LocalPhoneIcon className={styles.detailsIcon} />
            <Typography variant='body2' component='div' className={styles.phone}>
              {post.phone}
            </Typography>
          </div>

          <div className={styles.postDetails}>
            <LocationOnIcon className={styles.detailsIcon} />
            <Typography variant='body2' component='div' className={styles.author}>
              {post.location}
            </Typography>
          </div>

          <div className={styles.date}>
            <Typography variant='body2' color='textSecondary' component='div'>
              Date publication: {post.datePublication}
            </Typography>

            <Typography variant='body2' color='textSecondary' component='div'>
              Last update: {post.dateLastUpdate}
            </Typography>
            <Typography  color='textSecondary' className={styles.postStatus}>Status: {post.status}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  postsAll: getAll(state),
  post: getOnePost(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
