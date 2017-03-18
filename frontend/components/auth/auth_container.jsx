import React from 'react';
import { connect } from 'react-redux';

import Auth from './auth';
import {
  signup,
  login,
  cleanAuthErrors
} from '../../actions/auth_actions';

const mapStateToProps = ({ errors }, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let errorList;
  if (errors.auth.length > 0) {
    errorList = errors.auth;
  }
  return { formType, errorList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let action = formType === "login" ? login : signup;
  return {
    action: user => dispatch(action(user)),
    cleanErrors: () => dispatch(cleanAuthErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);