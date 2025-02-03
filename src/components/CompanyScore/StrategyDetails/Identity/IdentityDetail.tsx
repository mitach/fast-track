import { motion } from 'framer-motion';
import './IdentityDetail.css';
import { Consequences } from '../shared/Consequences/Consequences';

export const IdentityDetail = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="strategy-detail identity-detail"
        >
            <h2 className="strategy-title">Identity</h2>

            <div className="detail-section">
                <h3>Dreams</h3>
                <p>To revolutionize industries with cutting-edge AI solutions that enhance human capabilities.</p>
            </div>

            <div className="detail-section">
                <h3>Values and Behaviours</h3>
                <ul className="values-list">
                    {["Integrity", "Innovation", "Collaboration", "Excellence", "Customer Focus"].map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div>

            <div className="detail-section">
                <h3>Trust Index</h3>
                <div className="trust-meter">
                    <div className="trust-fill" style={{ width: `${85}%` }}>
                        85%
                    </div>
                </div>
            </div>

            <Consequences data={
                {
                    positive: "High trust leads to sustained customer loyalty and market reputation.",
                    negative: "Failure to innovate could result in loss of market share."
                }
            } />

            <div className="detail-section">
                <h3>Action Plan Progress</h3>
                <div className="action-plans">
                    {[
                        { action: "Launch a Healthcare AI Division", timeline: "6 months", completion: 20 },
                        { action: "Establish University Partnerships", timeline: "3 months", completion: 10 },
                        { action: "Develop Asian Market Entry Strategy", timeline: "12 months", completion: 15 }
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