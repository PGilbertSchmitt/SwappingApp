import { connect } from 'react-redux';

import ItemIndex from './item_index';
import { searchItems } from '../../actions/item_actions';
import { receiveSearchParam } from '../../actions/search_actions';

const mapStateToProps = ({ items, searchParams }) => ({
  items,
  fetchParams: searchParams
});

const mapDispatchToProps = dispatch => ({
  searchItems: searchParams => dispatch(searchItems(searchParams)),
  receiveParam: param => dispatch(receiveSearchParam(param))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);