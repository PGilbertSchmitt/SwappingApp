import { connect } from 'react-redux';

import Search from './search';
import {
  receiveSearchParams,
  receiveSearchParam,
  cleanSearchParams
} from '../../actions/search_actions';

const mapStateToProps = ({ searchParams }) => ({
  searchParams
});

const mapDispatchToProps = dispatch => ({
  receiveSearchParams: params => dispatch(receiveSearchParams(params)),
  receiveSearchParam: param => dispatch(receiveSearchParam(param)),
  cleanSearchParams: () => dispatch(cleanSearchParams())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);