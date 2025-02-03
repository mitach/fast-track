import { motion } from 'framer-motion';
import './MarketDetail.css';
import { Consequences } from '../shared/Consequences/Consequences';

export const MarketDetail = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="strategy-detail market-detail"
        >
            <h2 className="strategy-title">Market Understanding</h2>

            <div className="detail-section">
                <h3>Market Data</h3>
                <div className="market-data-grid">
                    <div className="market-data-item">
                        <span className="data-label">Market Size</span>
                        <span className="data-value">USD 150 billion</span>
                    </div>
                    <div className="market-data-item">
                        <span className="data-label">Growth Rate</span>
                        <span className="data-value">25% CAGR</span>
                    </div>
                </div>

                <div className="key-players">
                    <h4>Key Players</h4>
                    <div className="players-list">
                        {["AlphaAI", "BetaTech", "GammaSystems"].map((player) => (
                            <span key={player} className="player-tag">{player}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="detail-section">
                <h3>Market Position</h3>
                <p>{`Top 3 AI technology providers with a strong presence in North America and Europe.`}</p>
                <div className="market-metrics">
                    <div className="metric">
                        <span className="metric-label">Market Share</span>
                        <span className="metric-value">15%</span>
                    </div>
                    <div className="metric">
                        <span className="metric-label">Growth Rate</span>
                        <span className="metric-value">5% YoY</span>
                    </div>
                </div>
            </div>

            <Consequences data={
                {
                    positive: "Market leadership ensures long-term profitability and brand recognition.",
                    negative: "Complacency could lead to stagnation and loss of competitive edge."
                }
            } />

            <div className="detail-section">
                <h3>Missed Opportunities</h3>
                <ul className="opportunities-list">
                    {[
                        "Diversifying product offerings to include AI-powered cybersecurity",
                        "Leveraging big data partnerships for enhanced analytics",
                        "Investing in AI-driven personalized marketing solutions"
                    ].map((opportunity, index) => (
                        <li key={index} className="opportunity-item">{opportunity}</li>
                    ))}
                </ul>
            </div>

            <div className="detail-section">
                <h3>Action Plan Progress</h3>
                <div className="action-plans">
                    {[
                        { action: "Develop AI Cybersecurity Solutions", timeline: "Q3", completion: 25 },
                        { action: "Form Strategic Alliances with Big Data Firms", timeline: "6 months", completion: 30 },
                        { action: "Create a Personalized Marketing AI Platform", timeline: "12 months", completion: 10 }
                    ].map((plan) => (
                        <div key={plan.action} className="action-item">
                            <div className="action-header">
                                <h4>{plan.action}</h4>
                                <span className="timeline">{plan.timeline}</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${plan.completion}%` }}>
                                    {plan.completion}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}; 