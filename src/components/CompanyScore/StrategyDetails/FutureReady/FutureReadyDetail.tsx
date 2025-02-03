import { motion } from 'framer-motion';
import { Consequences } from '../shared/Consequences/Consequences';
import './FutureReadyDetail.css';

export const FutureReadyDetail = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="strategy-detail future-ready-detail"
        >
            <h2 className="strategy-title">Future Ready</h2>

            <div className="detail-section">
                <h3>Innovation Pipeline</h3>
                <div className="innovation-grid">
                    <div className="innovation-card">
                        <div className="card-icon">🔬</div>
                        <span className="card-label">Active Research Projects</span>
                        <span className="card-value">12</span>
                    </div>
                    <div className="innovation-card">
                        <div className="card-icon">📜</div>
                        <span className="card-label">Patents Pending</span>
                        <span className="card-value">8</span>
                    </div>
                    <div className="innovation-card">
                        <div className="card-icon">📈</div>
                        <span className="card-label">Innovation Score</span>
                        <span className="card-value">92/100</span>
                    </div>
                    <div className="innovation-card">
                        <div className="card-icon">💡</div>
                        <span className="card-label">R&D Investment</span>
                        <span className="card-value">32% of Revenue</span>
                    </div>
                </div>
            </div>

            <div className="detail-section">
                <h3>Future Trends</h3>
                <div className="trends-list">
                    {[
                        { trend: "Quantum AI Integration", readiness: 85, timeframe: "2025", investment: "High" },
                        { trend: "Sustainable Computing", readiness: 78, timeframe: "2024", investment: "Medium" },
                        { trend: "Edge AI Solutions", readiness: 92, timeframe: "2024", investment: "High" }
                    ].map((item, index) => (
                        <div key={index} className="trend-item">
                            <div className="trend-header">
                                <h4>{item.trend}</h4>
                                <span className={`investment-badge ${item.investment.toLowerCase()}`}>
                                    {item.investment} Investment
                                </span>
                            </div>
                            <div className="trend-details">
                                <span className="timeframe">Target: {item.timeframe}</span>
                                <div className="readiness-meter">
                                    <span className="readiness-label">Readiness: {item.readiness}%</span>
                                    <div className="readiness-bar">
                                        <div
                                            className="readiness-fill"
                                            style={{ width: `${item.readiness}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="detail-section">
                <h3>Capability Development</h3>
                <div className="capabilities-grid">
                    <div className="capability-card">
                        <span className="capability-label">Talent Pipeline</span>
                        <span className="capability-value">Strong</span>
                    </div>
                    <div className="capability-card">
                        <span className="capability-label">Technology Stack</span>
                        <span className="capability-value">Advanced</span>
                    </div>
                    <div className="capability-card">
                        <span className="capability-label">Infrastructure</span>
                        <span className="capability-value">Cloud-Native</span>
                    </div>
                    <div className="capability-card">
                        <span className="capability-label">Research Partnerships</span>
                        <span className="capability-value">15 Active</span>
                    </div>
                </div>
            </div>

            <Consequences data={
                {
                    positive: "Early adoption of emerging technologies positions us as industry leaders in next-gen AI solutions.",
                    negative: "High investment in future technologies may impact short-term profitability and increase financial risk."
                }
            } />

            <div className="detail-section">
                <h3>Missed Opportunities</h3>
                <ul className="opportunities-list">
                    {[
                        "Blockchain AI integration",
                        "Green AI computing solutions",
                        "AI Ethics framework development"
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
                        { action: "Quantum Computing Lab", timeline: "18 months", completion: 40 },
                        { action: "Green AI Initiative", timeline: "12 months", completion: 25 },
                        { action: "Ethics Framework", timeline: "6 months", completion: 60 }
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