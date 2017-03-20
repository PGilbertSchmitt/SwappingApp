import { connect } from 'react-redux';

import Garage from './garage';
import {
  fetchUserData,
  cleanUserErrors
} from '../../actions/user_actions';

const mapStateToProps = state => ({
  user: state.user,       // Not same as currentUser
  currentUser: state.session.currentUser,
  userErrors: state.errors.user
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: userId => dispatch(fetchUserData(userId)),
  cleanUserErrors: () => dispatch(cleanUserErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Garage);