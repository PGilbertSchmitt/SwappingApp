import { connect } from 'react-redux';

import TradeIndex from './trade_index';
import {
  fetchTrades,
  destroyTrade
} from '../../actions/trade_actions';

const mapStateToProps = ({ trades }) => ({
  trades
});

const mapDispatchToProps = dispatch => ({
  fetchTrades: () => dispatch(fetchTrades()),
  destroyTrades: tradeId => dispatch(destroyTrade(tradeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeIndex);