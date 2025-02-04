import { motion } from 'framer-motion';
import './Account.css';

interface AccountStats {
    completedModules: number;
    totalModules: number;
    activeWorkshops: number;
    lastActive: string;
}

const accountStats: AccountStats = {
    completedModules: 3,
    totalModules: 12,
    activeWorkshops: 2,
    lastActive: '2024-03-15'
};

const AccountComponent: React.FC = () => {
    return (
        <div className="account-page">
            <div className="account-container">
                <motion.div 
                    className="account-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>YOUR<br /><span className="highlight">ACCOUNT</span></h1>
                    <p className="subtitle">Track your progress and manage your settings</p>
                </motion.div>

                <div className="account-content">
                    <motion.section 
                        className="account-stats"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>[PROGRESS]</h2>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-number">
                                    {accountStats.completedModules}/{accountStats.totalModules}
                                </div>
                                <div className="stat-label">Modules Completed</div>
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill"
                                        style={{ 
                                            width: `${(accountStats.completedModules / accountStats.totalModules) * 100}%` 
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">{accountStats.activeWorkshops}</div>
                                <div className="stat-label">Active Workshops</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-date">{accountStats.lastActive}</div>
                                <div className="stat-label">Last Active</div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section 
                        className="account-settings"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2>[SETTINGS]</h2>
                        <div className="settings-grid">
                            <div className="settings-card">
                                <h3>Profile Information</h3>
                                <button className="edit-button">EDIT</button>
                            </div>
                            <div className="settings-card">
                                <h3>Notification Preferences</h3>
                                <button className="edit-button">EDIT</button>
                            </div>
                            <div className="settings-card">
                                <h3>Privacy Settings</h3>
                                <button className="edit-button">EDIT</button>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    )
}

export default AccountComponent;