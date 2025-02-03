import { AnimatePresence } from 'framer-motion';
// import { IdentityDetail } from './IdentityDetail';
import { IdentityDetail } from './Identity/IdentityDetail';
import { MarketDetail } from './Market/MarketDetail';
import { StrategyDetail } from './Strategy/StrategyDetail';
import { PerformanceDetail } from './Performance/PerformanceDetail';
import { ExecutionDetail } from './Execution/ExecutionDetail';
import { FutureReadyDetail } from './FutureReady/FutureReadyDetail';
// import './shared/StrategyDetail.css';
import './StrategyDetails.css';

export const StrategyDetails = ({ selectedCategory }: { selectedCategory: string }) => {
  const renderStrategyDetail = () => {
    switch (selectedCategory) {
      case 'IDENTITY':
        return <IdentityDetail />;
      case 'MARKET':
        return <MarketDetail />;
      case 'STRATEGY':
        return <StrategyDetail />;
      case 'PERFORMANCE':
        return <PerformanceDetail />;
      case 'EXECUTION':
        return <ExecutionDetail />;
      case 'FUTURE_READY':
        return <FutureReadyDetail />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {selectedCategory && renderStrategyDetail()}
    </AnimatePresence>
  );
}; 