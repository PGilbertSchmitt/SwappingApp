import React from 'react';
import { connect } from 'react-redux';

import Auth from './auth';
import {
  signup,
  login,
  cleanErrors
} from '../../actions/auth_actions';

const mapStateToProps = ({ session }, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let errors;
  if (session.errors.length > 0) {
    errors = session.errors;
  }
  return { formType, errors };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let action = formType === "login" ? login : signup;
  return {
    action: user => dispatch(action(user)),
    cleanErrors: () => dispatch(cleanErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);