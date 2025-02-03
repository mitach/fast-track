import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./ComparisonChart.css";

interface ChartData {
    label: string;
    value: number;
    color: string;
    description: string;
    trend: 'up' | 'down';
}

const ComparisonChart: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-20% 0px -20% 0px"
    });

    const data: ChartData[] = [
        {
            label: "YOU VS EVERYONE",
            value: 34,
            color: "#FFE566",
            description: "Better compared to other companies in your industry",
            trend: 'up'
        },
        {
            label: "YOUR INDUSTRY",
            value: 86,
            color: "#CCCCCC",
            description: "Better than the average companies in FT database",
            trend: 'up'
        },
        {
            label: "YOUR LOCATION",
            value: 15,
            color: "#FFFFFF",
            description: "NOT better than the companies in your location",
            trend: 'down'
        }
    ];

    const getBarHeight = (value: number) => {
        const minHeight = 45; // Base height (0%)
        const maxAdditionalHeight = 55; // Remaining available height (100% - minHeight)
        
        // Calculate additional height based on the value percentage
        const additionalHeight = (value / 100) * maxAdditionalHeight;
        
        return (minHeight + additionalHeight) + '%';
    };

    useGSAP(() => {
        gsap.from(".chart-percentage-number", {
            textContent: 0,
            duration: 1.5,
            snap: { textContent: 1 },
            ease: "power1.inOut",
        });
    }, [isInView]);

    return (
        <div ref={ref} className="comparison-chart">
            <h2 className="chart-title">COMPARE<br />TO OTHERS</h2>
            
            <div className="charts-container">
                {data.map((item, index) => (
                    <div key={index} className="chart-column">
                        <div className="chart-label">[{item.label}]</div>
                        <div className="chart-bar-container">
                            <motion.div 
                                className="chart-bar-value"
                                initial={{ height: getBarHeight(0) }}
                                animate={isInView ? { height: getBarHeight(item.value) } : { height: getBarHeight(0) }}
                                transition={{ 
                                    duration: 1.5,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                style={{ backgroundColor: item.color }}
                            >
                                <div className="chart-percentage-wrapper">
                                    <span className="chart-percentage-number">{item.value}</span>
                                    <div className="chart-symbols-column">
                                        <span className="chart-percentage-symbol">%</span>
                                        <img 
                                            src="/arrow.svg"
                                            alt={`${item.trend} trend`}
                                            className={`chart-trend-arrow ${item.trend === 'down' ? 'rotate-arrow' : ''}`}
                                        />
                                    </div>
                                </div>
                                <p className="chart-description">{item.description}</p>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComparisonChart; 