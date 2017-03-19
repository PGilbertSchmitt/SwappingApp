import { connect } from 'react-redux';

import ItemIndex from './item_index';
import { searchItems } from '../../actions/item_actions';

const mapStateToProps = ({ items }) => ({
  items
});

const mapDispatchToProps = dispatch => ({
  searchItems: searchParams => dispatch(searchItems(searchParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);