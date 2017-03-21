import { connect } from 'react-redux';

import {
  createItem,
  updateItem,
  receiveItemError,
  cleanItemErrors
} from '../../actions/item_actions';

import ItemForm from './item_form';

const mapStateToProps = ({ errors: { item } }) => ({
  errors: item
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === "new" ? createItem : updateItem;
  return {
    action: item => dispatch(action(item)),
    receiveError: error => dispatch(receiveItemError(error)),
    cleanErrors: () => dispatch(cleanItemErrors())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ItemForm);