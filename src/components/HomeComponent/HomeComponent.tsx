import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Chart from 'chart.js/auto';
import './HomeComponent.css';

const HomeComponent: React.FC = () => {
    const containerRef = useRef(null);
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const isInView = useInView(containerRef, {
        once: true,
        margin: "-20% 0px -20% 0px"
    });

    const criticalFactors = [
        "Advanced machine learning algorithms",
        "Scalable cloud infrastructure",
        "Data security and privacy compliance",
        "Skilled talent acquisition",
        "Strong R&D investment"
    ];

    const coreProcesses = [
        "Agile software development",
        "Continuous deployment and integration",
        "Data collection and preprocessing",
        "Model training and validation",
        "Customer feedback integration"
    ];

    const futureTrends = [
        "Explainable AI",
        "AI Ethics and Governance",
        "Edge AI",
        "AI in Healthcare",
        "Autonomous Systems"
    ];

    useEffect(() => {
        if (!chartRef.current || !isInView) return;

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        const existingChart = Chart.getChart(chartRef.current);
        if (existingChart) {
            existingChart.destroy();
        }

        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['NLP', 'Computer Vision', 'Analytics', 'Automation', 'Data Integration'],
                datasets: [{
                    label: 'Core Capabilities',
                    data: [90, 85, 95, 88, 92],
                    fill: true,
                    backgroundColor: 'rgba(204, 255, 0, 0.2)',
                    borderColor: '#CCFF00',
                    pointBackgroundColor: '#CCFF00',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#CCFF00'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1,  // Force square aspect ratio
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: '#a1a1a1',
                            font: {
                                family: 'monospace',
                                size: 11
                            }
                        },
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }, [isInView]);

    return (
        <motion.div
            ref={containerRef}
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="hero-section"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>SHAPING THE<br />FUTURE OF AI</h1>
                        <div className="mindset-indicators">
                            <div className="mindset-item">
                                <span className="mindset-label">Innovation Focus</span>
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: "80%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    />
                                </div>
                            </div>
                            <div className="mindset-item">
                                <span className="mindset-label">Customer-Centric Focus</span>
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: "75%" }}
                                        transition={{ duration: 1, delay: 0.7 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="hero-logo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img src="/logo.png" alt="Company Logo" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Enhanced Grid Sections */}
            <div className="grid-sections">
                <motion.div
                    className="grid-section critical-factors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2>CRITICAL SUCCESS FACTORS</h2>
                    <div className="items-grid">
                        {criticalFactors.map((item, index) => (
                            <motion.div
                                key={item}
                                className="grid-item with-icon"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="item-number">{(index + 1).toString().padStart(2, '0')}</div>
                                <div className="item-content">{item}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="grid-section capabilities"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2>CORE CAPABILITIES</h2>
                    <div className="chart-wrapper">
                        <canvas ref={chartRef}></canvas>
                    </div>
                </motion.div>

                <motion.div
                    className="grid-section processes"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2>CORE PROCESSES</h2>
                    <div className="items-grid process-grid">
                        {coreProcesses.map((item, index) => (
                            <motion.div
                                key={item}
                                className="grid-item process-item"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="process-icon">→</div>
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="grid-section trends"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2>FUTURE TRENDS</h2>
                    <div className="items-grid trends-grid">
                        {futureTrends.map((item, index) => (
                            <motion.div
                                key={item}
                                className="grid-item trend-item"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="trend-marker"></div>
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Agility vs Momentum Section */}
            <motion.div
                className="balance-section"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h2>AGILITY VS MOMENTUM</h2>
                <div className="balance-container">
                    <div className="balance-item">
                        <span className="balance-label">Agility</span>
                        <div className="balance-bar">
                            <motion.div
                                className="balance-fill agility"
                                initial={{ width: 0 }}
                                animate={{ width: "70%" }}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                        </div>
                    </div>
                    <div className="balance-item">
                        <span className="balance-label">Momentum</span>
                        <div className="balance-bar">
                            <motion.div
                                className="balance-fill momentum"
                                initial={{ width: 0 }}
                                animate={{ width: "30%" }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                        </div>
                    </div>
                </div>
                <p className="balance-description">
                    High agility to adapt to rapid technological changes while maintaining steady momentum in product development.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default HomeComponent;
