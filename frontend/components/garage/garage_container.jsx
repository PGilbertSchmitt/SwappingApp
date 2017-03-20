import { connect } from 'react-redux';

import Garage from './garage';
import { fetchUserData } from '../../actions/user_actions';

const mapStateToProps = ({ user, session: { currentUser } }) => ({
  user,       // Not same as currentUser
  currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: userId => dispatch(fetchUserData(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Garage);