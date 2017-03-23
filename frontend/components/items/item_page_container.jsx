import { connect } from 'react-redux';

import ItemPage from './item_page';
import {
  getItem,
  destroyItem
} from '../../actions/item_actions';

const mapStateToProps = ({ currentItem, session: { currentUser } }) => ({
  currentItem,
  currentUser
});

const mapDispatchToProps = dispatch => ({
  getItem: itemId => dispatch(getItem(itemId)),
  destroyItem: itemId => dispatch(destroyItem(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage);