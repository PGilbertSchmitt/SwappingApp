import { connect } from 'react-redux';

import Home from './home';
import { receiveSearchParam } from '../../actions/search_actions';

const mapDispatchToProps = dispatch => ({
  receiveParam: param => dispatch(receiveSearchParam(param))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);