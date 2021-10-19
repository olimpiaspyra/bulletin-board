/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getStatus } from '../../../redux/usersSwitcherRedux.js';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { NotFound } from '../NotFound/NotFound.js';

class Component extends React.Component {
  state = {
    post: {
      title: '',
      text: '',
      datePublication: '',
      dateLastUpdate: '',
      email: '',
      status: '',
      image: '',
      price: '',
      phone: '',
      location: '',
    },
  }

  handleChange = (event) => {
    const { post } = this.state;

    this.setState({
      post: { ...post, [event.target.name]: event.target.value },
    });
  };

  submitForm = (e) => {
    const { post } = this.state;
    e.preventDefault();

    let error = null;
    const emailPattern =new RegExp(
      '^[a-zA-Z0-9][a-zA-Z0-9_.-]+@[a-zA-Z0-9][a-zA-Z0-9_.-]+.{1,3}[a-zA-Z]{2,4}'
    );

    if (post.title.length < 2) {
      alert('The title is too short');
      error = 'text too short';
    } else if (post.text.length < 2) {
      alert('The description is too short');
      error = 'text too short';
    } else if (!emailPattern.test(post.email)) {
      alert('Your email adress is incorrect!');
      error = 'wrong email';
    }

    if (!error) {
      post.datePublication = new Date().toISOString();

      const formData = new FormData();

      console.log(post);

      for (let key of [
        'title',
        'text',
        'datePublication',
        'dateLastUpdate',
        'email',
        'status',
        'image',
        'price',
        'phone',
        'location',
      ]) {
        formData.append(key, post[key]);
      }

      this.setState({
        post: {
          title: '',
          text: '',
          datePublication: '',
          dateLastUpdate: '',
          email: '',
          status: '',
          image: '',
          price: '',
          phone: '',
          location: '',
        },
      });
      alert('Your changes have been saved!');
    } else {
      alert('Please complete the fields!');
    }
  };

  render() {
    const { className, userStatus } = this.props;
    const { post } = this.state;

    return (
      <div className={clsx(className, styles.root)}>

        {userStatus === true ? (
          <Grid container align='center'>
            <Grid item align0='center' xs={12}>
              <Paper className={styles.form}>
                <form onSubmit={this.submitForm}>
                  <Typography variant='h6' className={styles.header}>
                  Add an announcement
                  </Typography>

                  <Grid item align='center' xs={12} sm={8} className={styles.grid} >
                    <TextField
                      required
                      name='title'
                      label='Title'
                      variant='filled'
                      onChange={this.handleChange}
                      helperText='min. 10 characters'
                      fullWidth
                    />
                  </Grid>
                  <Grid item align='center' xs={12} sm={8} className={styles.grid} >
                    <TextField
                      required
                      name='text'
                      label='Description'
                      variant='filled'
                      onChange={this.handleChange}
                      helperText='min. 10 characters'
                      fullWidth
                    />
                  </Grid>
                  <Grid item align='center' xs={12} sm={8} className={styles.grid} >
                    <TextField
                      required
                      name='email'
                      label='Your Email'
                      variant='filled'
                      onChange={this.handleChange}
                      helperText='Put your email'
                      fullWidth
                    />
                  </Grid>
                  <Grid item align='center' xs={12} sm={8} className={styles.grid} >
                    <TextField
                      required
                      name='location'
                      label='Location'
                      variant='filled'
                      onChange={this.handleChange}
                      helperText='Location'
                      fullWidth
                    />
                  </Grid>
                  <Grid item align='center' xs={12} sm={8} className={styles.grid} >
                    <TextField
                      required
                      name='price'
                      label='Price'
                      variant='filled'
                      onChange={this.handleChange}
                      helperText='Price'
                      fullWidth
                    />
                  </Grid>
                  <Grid item align='center' xs={12} sm={8} className={styles.grid} >
                    <TextField
                      required
                      name='phone'
                      label='Phone number'
                      variant='filled'
                      onChange={this.handleChange}
                      helperText='Phone number'
                      fullWidth
                    />
                  </Grid>
                  <Grid item align='center' xs={12} sm={8} className={styles.grid} >
                    <FormControl fullWidth>
                      <InputLabel id='status'>Status of your advert</InputLabel>
                      <Select
                        labelId='status'
                        id='status'
                        onChange={this.handleChange}
                        fullWidth
                        variant='filled'
                        name='status'
                        value={post.status}
                        required
                      >
                        <MenuItem value='draft'>draft</MenuItem>
                        <MenuItem value='published'>published</MenuItem>
                        <MenuItem value='closed'>closed</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={8} className={styles.paperCard__item}>
                    <Typography align='center' className={styles.header}>Add photo</Typography>
                    <ImageUploader
                      withIcon={true}
                      buttonText='Choose image'
                      imgExtension={['.jpg', '.gif', '.png', '.jpeg', '.jfif']}
                      maxFileSize={5242880}
                      withPreview={true}
                      className={styles.photo}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9} align='center'>
                    <Button variant='contained' type='submit' color='primary' className={styles.btnSubmit}>
                      Submit
                    </Button>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  userStatus: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  userStatus: getStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
