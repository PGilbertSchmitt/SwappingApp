import { connect } from 'react-redux';

import Home from './home';
import { receiveSearchParam } from '../../actions/search_actions';

const mapStateToProps = ({ session: { currentUser } }) => {
  const id = currentUser ? currentUser.id : null;
  return {
    currentUserId: id
  };
};

const mapDispatchToProps = dispatch => ({
  receiveParam: param => dispatch(receiveSearchParam(param))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);