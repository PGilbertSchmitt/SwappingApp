import { connect } from 'react-redux';

import SearchPage from './search_page';
import {
  receiveSearchParam
} from '../../actions/search_actions';

const mapStateToProps = ({ searchParams }) => ({
  searchParams
});

const mapDispatchToProps = dispatch => ({
  receiveSearchParam: param => dispatch(receiveSearchParam(param))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);