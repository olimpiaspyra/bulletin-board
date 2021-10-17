/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Switcher.module.scss';
import { connect } from 'react-redux';
import { getUserStatus } from '../../../redux/usersSwitcherRedux.js';

class Component extends React.Component {
  handleOnChange = (event) => {
    const { getUserStatus, user } = this.props;

    if (event === 'true') {
      user.active = true;
      getUserStatus(true);

    } else {
      user.active = false;
      getUserStatus(false);
    }
  };
  render() {
    const { className } = this.props;

    return (
      <div>
        <div>
          <div className={clsx(className, styles.root)}>
            <select
              name='userStatus'
              id='userStatus'
              onChange={(event) => this.handleOnChange(event.target.value)}
            >
              <option value='true'>Logged user</option>
              <option value='false'>Unlogged user</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.object,
  getUserStatus: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUserStatus: (status) => dispatch(getUserStatus(status)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as Switcher, Component as SwitcherComponent };
