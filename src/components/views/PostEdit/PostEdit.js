/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, getOnePost } from '../../../redux/postsRedux';

import styles from './PostEdit.module.scss';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

class Component extends React.Component {
  render() {
    const { className, post } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <TextField
                variant='outlined'
                className={styles.textField}
                required
                id='outlined-title'
                label='Title'
                inputProps={{ minLength: 10, maxLength: 40 }}
                defaultValue={post.title}
              />
              <TextField
                variant='outlined'
                className={styles.textField}
                required
                id='outlined-description'
                label='Description'
                multiline
                fullWidth
                inputProps={{ minLength: 10, maxLength: 500 }}
                defaultValue={post.text}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <TextField
                variant='outlined'
                className={styles.textField}
                required
                id='outlined-email'
                label='Email'
                defaultValue={post.email}
              />
              <TextField
                variant='outlined'
                className={styles.textField}
                required
                id='outlined-phone'
                label='Phone'
                defaultValue={post.phone}
              />
              <TextField
                variant='outlined'
                className={styles.textField}
                required
                id='outlined-location'
                label='Location'
                fullWidth
                defaultValue={post.location}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={styles.imageUploader}>
              <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <TextField
                variant='outlined'
                className={styles.textField}
                required
                id='outlined-price'
                label='Price'
                type='number'
                defaultValue={post.price}
              />
              <Button
                variant='contained'
                className={styles.btnSave}
                color='primary'
              >
                <SaveIcon className={styles.icon} />
                Save
              </Button>
              <FormControl variant='outlined' className={styles.status}>
                <InputLabel htmlFor='outlined-age-native-simple'>
                  Status
                </InputLabel>
                <Select native>
                  <option>{post.status}</option>
                  <option>published</option>
                  <option>draft</option>
                  <option>closed</option>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  match: PropTypes.object,
  params: PropTypes.object,
  post: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      datePublication: PropTypes.string,
      dateLastUpdate: PropTypes.string,
      email: PropTypes.string,
      status: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      phone: PropTypes.string,
      location: PropTypes.string,
    })
  ),
};

const mapStateToProps = (state, props) => ({
  posts: getAll(state),
  post: getOnePost(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
