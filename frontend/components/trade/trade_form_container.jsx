import { connect } from 'react-redux';

import TradeForm from './trade_form';
import { getItemListings } from '../../actions/item_actions';
import { createTrade } from '../../actions/trade_actions';

const mapStateToProps = ({ listings, errors: { trade } }) => ({
  listings,
  tradeErrors: trade
});

const mapDispatchToProps = dispatch => ({
  getListings: id => dispatch(getItemListings(id)),
  createTrade: trade => dispatch(createTrade(trade))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeForm);