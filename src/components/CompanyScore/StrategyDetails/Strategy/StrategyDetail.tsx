import { motion } from 'framer-motion';
import './StrategyDetail.css';

import { Consequences } from '../shared/Consequences/Consequences';

export const StrategyDetail = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="strategy-detail strategy-strength-detail"
        >
            <h2 className="strategy-title">Strategy Strength</h2>

            <div className="detail-section">
                <h3>Strategic Pillars</h3>
                <div className="strategic-pillars">
                    {[
                        "Innovation and R&D",
                        "Customer-centric solutions",
                        "Scalable and secure infrastructure",
                        "Global market expansion",
                        "Sustainable practices"
                    ].map((pillar, index) => (
                        <div key={index} className="pillar-item">
                            <span className="pillar-number">{index + 1}</span>
                            <span className="pillar-text">{pillar}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Consequences data={
                {
                    positive: "Clear strategy ensures alignment across the organization and efficient resource allocation.",
                    negative: "Lack of strategic focus could lead to fragmented efforts and reduced effectiveness."
                }
            } />

            <div className="detail-section">
                <h3>Missed Opportunities</h3>
                <ul className="opportunities-list">
                    {[
                        "Adopting sustainable AI practices early",
                        "Expanding into AI education and training services",
                        "Integrating AI with IoT for smart solutions"
                    ].map((opportunity, index) => (
                        <li key={index} className="opportunity-item">
                            <span className="opportunity-number">{index + 1}</span>
                            {opportunity}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="detail-section">
                <h3>Action Plan Progress</h3>
                <div className="action-plans">
                    {[
                        { action: "Implement Sustainable AI Initiatives", timeline: "End of the year", completion: 40 },
                        { action: "Launch AI Training Programs", timeline: "6 months", completion: 20 },
                        { action: "Develop AI-IoT Integrated Products", timeline: "12 months", completion: 15 }
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