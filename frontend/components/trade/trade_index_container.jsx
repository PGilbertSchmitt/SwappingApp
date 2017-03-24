import { connect } from 'react-redux';

import TradeIndex from './trade_index';
import {
  fetchTrades,
  updateTrade,
  destroyTrade
} from '../../actions/trade_actions';

const mapStateToProps = ({ trades }) => ({
  trades
});

const mapDispatchToProps = dispatch => ({
  fetchTrades: () => dispatch(fetchTrades()),
  updateTrade: tradeId => dispatch(updateTrade(tradeId)),
  destroyTrade: tradeId => dispatch(destroyTrade(tradeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeIndex);