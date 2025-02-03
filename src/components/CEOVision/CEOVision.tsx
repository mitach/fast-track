import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Chart from 'chart.js/auto';
import gsap from 'gsap';
import './CEOVision.css';

interface VisionMetric {
  label: string;
  companyPercentage: number;
  databasePercentage: number;
}

const CEOVision = () => {
  const containerRef = useRef(null);
  const chartRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-20% 0px -20% 0px"
  });

  const metrics: VisionMetric[] = [
    {
      label: "MISSION",
      companyPercentage: 46,
      databasePercentage: 70
    },
    {
      label: "VISION",
      companyPercentage: 65,
      databasePercentage: 70
    },
    {
      label: "VALUES",
      companyPercentage: 61,
      databasePercentage: 70
    }
  ];

  const calculateDifference = (company: number, database: number) => {
    return Math.abs(database - company);
  };

  const isHigher = (company: number, database: number) => {
    return company > database;
  };

  useEffect(() => {
    if (!isInView) return;

    metrics.forEach((metric, index) => {
      const canvas = chartRefs.current[index];
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const existingChart = Chart.getChart(canvas);
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              // Company percentage (inner ring)
              data: [metric.companyPercentage, 100 - metric.companyPercentage],
              backgroundColor: [
                '#FFFFFF',
                'rgba(255, 255, 255, 0.1)' // Subtle white for missing part
              ],
              borderWidth: 0,
              circumference: 270,
              rotation: 225,
              weight: 1
            },
            {
              // Database percentage (outer ring)
              data: [metric.databasePercentage, 100 - metric.databasePercentage],
              backgroundColor: [
                'rgba(255, 255, 255, 0.3)',
                'rgba(255, 255, 255, 0.05)' // Very subtle white for missing part
              ],
              borderWidth: 0,
              circumference: 270,
              rotation: 225,
              weight: 0.7
            }
          ]
        },
        options: {
          cutout: '75%',
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        }
      });
    });

    // Animate each number when in view
    metrics.forEach((metric, index) => {
      const numberElement = numberRefs.current[index];
      if (!numberElement) return;

      const difference = calculateDifference(metric.companyPercentage, metric.databasePercentage);
      
      gsap.fromTo(numberElement, {
        textContent: '0',
      }, {
        duration: 2,
        textContent: difference.toString(),
        snap: { textContent: 1 },
        ease: 'power2.out',
        delay: 0.4 + (index * 0.2), // Match the delay with card animation
      });
    });
  }, [isInView, metrics]);

  return (
    <motion.div 
      ref={containerRef}
      className="ceo-vision-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="ceo-vision-header"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>REFLECTING THE<br />CEO'S VISION</h2>
      </motion.div>

      <motion.div 
        className="chart-legend"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="legend-item">
          <span className="legend-color company"></span>
          <span className="legend-label">[Company name]</span>
        </div>
        <div className="legend-item">
          <span className="legend-color database"></span>
          <span className="legend-label">[Database]</span>
        </div>
      </motion.div>

      <motion.div className="metrics-container">
        {metrics.map((metric, index) => {
          const higher = isHigher(metric.companyPercentage, metric.databasePercentage);
          
          return (
            <motion.div 
              key={metric.label}
              className="metric-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
            >
              <div className="chart-container">
                <canvas 
                  ref={el => chartRefs.current[index] = el}
                  className="metric-chart"
                />
                <div className="metric-content">
                  <div className="metric-difference">
                    <div className="difference-wrapper">
                      <div className="arrow-wrapper">
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className={`trend-arrow ${higher ? 'up' : 'down'}`}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M12 4L19 11H15V20H9V11H5L12 4Z" 
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span 
                        ref={el => numberRefs.current[index] = el}
                        className="difference-value"
                      >
                        0
                      </span>
                      <span className="difference-symbol">%</span>
                    </div>
                  </div>
                  <div className="metric-description">
                    {higher ? 'Higher' : 'Lower'} than the FT<br />database average
                  </div>
                </div>
              </div>
              <h3 className="metric-label">[{metric.label}]</h3>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default CEOVision; 