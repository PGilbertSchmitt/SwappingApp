import { connect } from 'react-redux';

import Garage from './garage';
import {
  fetchUserData,
  cleanUserErrors
} from '../../actions/user_actions';

import {
  receiveSearchParam,
  cleanSearchParams
} from '../../actions/search_actions';

const mapStateToProps = state => ({
  user: state.user,       // Not same as currentUser
  currentUser: state.session.currentUser,
  userErrors: state.errors.user,
  searchParams: state.searchParams
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: userId => dispatch(fetchUserData(userId)),
  cleanUserErrors: () => dispatch(cleanUserErrors()),
  receiveSearchParam: param => dispatch(receiveSearchParam(param)),
  cleanSearchParams: () => dispatch(cleanSearchParams())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Garage);