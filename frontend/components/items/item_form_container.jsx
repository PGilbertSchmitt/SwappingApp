import { connect } from 'react-redux';

import {
  createItem,
  updateItem
} from '../../actions/item_actions';

import ItemForm from './item_form';

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === "new" ? createItem : updateItem;
  return {
    action: item => dispatch(action(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ItemForm);