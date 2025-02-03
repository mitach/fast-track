import { motion } from 'framer-motion';
import './PerformanceDetail.css';
import { Consequences } from '../shared/Consequences/Consequences';

export const PerformanceDetail = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="strategy-detail performance-detail"
        >
            <h2 className="strategy-title">Performance</h2>

            <div className="detail-section">
                <h3>Performance Metrics</h3>
                <div className="metrics-grid">
                    <div className="metric-card">
                        <span className="metric-label">Revenue Growth</span>
                        <span className="metric-value">28% YoY</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-label">Market Share</span>
                        <span className="metric-value">23%</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-label">Customer Satisfaction</span>
                        <span className="metric-value">4.8/5.0</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-label">Employee Engagement</span>
                        <span className="metric-value">92%</span>
                    </div>
                </div>
            </div>

            <Consequences data={
                {
                    positive: "Strong performance metrics attract top talent and investors, fueling further growth.",
                    negative: "High growth expectations create pressure that could affect product quality and team burnout."
                }
            } />

            <div className="detail-section">
                <h3>Missed Opportunities</h3>
                <ul className="opportunities-list">
                    {[
                        "Early adoption of cloud-native architecture",
                        "Expansion into emerging markets",
                        "Development of AI consulting services"
                    ].map((opportunity, index) => (
                        <li key={index} className="opportunity-item">
                            {opportunity}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="detail-section">
                <h3>Action Plan Progress</h3>
                <div className="action-plans">
                    {[
                        { action: "Cloud Migration Initiative", timeline: "Q4", completion: 35 },
                        { action: "Market Expansion Strategy", timeline: "8 months", completion: 45 },
                        { action: "Launch Consulting Division", timeline: "12 months", completion: 15 }
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