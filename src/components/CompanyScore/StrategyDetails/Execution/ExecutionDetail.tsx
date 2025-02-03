import { motion } from 'framer-motion';
import { Consequences } from '../shared/Consequences/Consequences';
import './ExecutionDetail.css';


export const ExecutionDetail = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="strategy-detail execution-detail"
        >
            <h2 className="strategy-title">Execution</h2>

            <div className="detail-section">
                <h3>Execution Efficiency</h3>
                <div className="efficiency-grid">
                    <div className="efficiency-card">
                        <span className="efficiency-label">Project Completion Rate</span>
                        <div className="circular-progress" style={{ '--progress': '94%' } as any}>
                            <span className="efficiency-value">94%</span>
                        </div>
                    </div>
                    <div className="efficiency-card">
                        <span className="efficiency-label">Resource Utilization</span>
                        <div className="circular-progress" style={{ '--progress': '87%' } as any}>
                            <span className="efficiency-value">87%</span>
                        </div>
                    </div>
                    <div className="efficiency-card">
                        <span className="efficiency-label">Sprint Velocity</span>
                        <div className="circular-progress" style={{ '--progress': '92%' } as any}>
                            <span className="efficiency-value">92%</span>
                        </div>
                    </div>
                    <div className="efficiency-card">
                        <span className="efficiency-label">Quality Metrics</span>
                        <div className="circular-progress" style={{ '--progress': '96%' } as any}>
                            <span className="efficiency-value">96%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail-section">
                <h3>Implementation Status</h3>
                <div className="implementation-list">
                    {[
                        { initiative: "AI Platform Upgrade", status: "On Track", deadline: "Q4 2024", health: 95 },
                        { initiative: "Global Team Expansion", status: "At Risk", deadline: "Q2 2024", health: 65 },
                        { initiative: "Customer Success Program", status: "Completed", deadline: "Q1 2024", health: 100 }
                    ].map((item, index) => (
                        <div key={index} className="implementation-item">
                            <div className="implementation-header">
                                <h4>{item.initiative}</h4>
                                <span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                                    {item.status}
                                </span>
                            </div>
                            <div className="implementation-details">
                                <span className="deadline">Deadline: {item.deadline}</span>
                                <div className="health-bar">
                                    <div
                                        className="health-fill"
                                        style={{
                                            width: `${item.health}%`,
                                            backgroundColor: item.health >= 90 ? '#27ae60' :
                                                item.health >= 70 ? '#f1c40f' :
                                                    '#e74c3c'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Consequences data={
                {
                    positive: "High execution efficiency leads to faster time-to-market and competitive advantage.",
                    negative: "Rapid execution pace might impact work-life balance and increase technical debt."
                }
            } />

            <div className="detail-section">
                <h3>Missed Opportunities</h3>
                <ul className="opportunities-list">
                    {[
                        "Automation of deployment processes",
                        "Cross-team knowledge sharing",
                        "Early technical debt management"
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
                        { action: "Implement CI/CD Pipeline", timeline: "3 months", completion: 55 },
                        { action: "Knowledge Base Creation", timeline: "6 months", completion: 30 },
                        { action: "Technical Debt Reduction", timeline: "9 months", completion: 25 }
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