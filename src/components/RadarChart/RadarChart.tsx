import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Chart from 'chart.js/auto';
import './RadarChart.css';

const RadarChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-20% 0px -20% 0px"
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const companies = [
    {
      name: '[COMPANY NAME]',
      color: '#fff469',
      data: [
        { label: 'Sales', value: '25%' },
        { label: 'Marketing', value: '33%' },
        { label: 'Operation Management', value: '34%' },
        { label: 'Customer Service', value: '66%' },
        { label: 'Engineering', value: '59%' },
        { label: 'HR', value: '54%' },
      ]
    },
    {
      name: '[INDUSTRY]',
      color: '#ffffff',
      data: [
        { label: 'Sales', value: '65%' },
        { label: 'Marketing', value: '27%' },
        { label: 'Operation Management', value: '19%' },
        { label: 'Customer Service', value: '35%' },
        { label: 'Engineering', value: '81%' },
        { label: 'HR', value: '49%' },
      ]
    },
    {
      name: '[DATABASE]',
      color: '#666666',
      data: [
        { label: 'Sales', value: '71%' },
        { label: 'Marketing', value: '60%' },
        { label: 'Operation Management', value: '62%' },
        { label: 'Customer Service', value: '89%' },
        { label: 'Engineering', value: '93%' },
        { label: 'HR', value: '78%' },
      ]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!chartRef.current || !isInView) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const data = {
      labels: isMobile 
        ? ['S', 'M', 'OP', 'CS', 'E', 'HR'] // Shortened labels for mobile
        : ['SALES', 'MARKETING', 'OPERATION\nMANAGEMENT', 'CUSTOMER SERVICE', 'ENGINEERING', 'HR'],
      datasets: [
        {
          label: '[DATABASE]',
          data: [71, 60, 62, 89, 93, 78],
          borderColor: '#666666',
          backgroundColor: 'rgba(102, 102, 102, 0.2)',
          pointBackgroundColor: '#666666',
          pointBorderColor: '#666666',
          pointStyle: 'rect',
          pointRadius: isMobile ? 3 : 4,
          borderWidth: 2,
        },
        {
          label: '[INDUSTRY]',
          data: [65, 27, 19, 35, 81, 49],
          borderColor: '#FFFFFF',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          pointBackgroundColor: '#FFFFFF',
          pointBorderColor: '#FFFFFF',
          pointStyle: 'rect',
          pointRadius: isMobile ? 3 : 4,
          borderWidth: 2,
        },
        {
          label: '[COMPANY NAME]',
          data: [25, 33, 34, 66, 59, 54],
          borderColor: '#fff469',
          backgroundColor: 'rgba(255, 244, 105, 0.2)',
          pointBackgroundColor: '#fff469',
          pointBorderColor: '#fff469',
          pointStyle: 'rect',
          pointRadius: isMobile ? 3 : 4,
          borderWidth: 2,
        },
      ]
    };

    const config = {
      type: 'radar' as const,
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2000,
          easing: 'easeInOutQuart' as const
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            angleLines: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            pointLabels: {
              color: 'white',
              font: {
                size: isMobile ? 12 : 16,
                weight: 'bold' as const,
                family: 'Helvetica'
              },
              padding: isMobile ? 5 : 10
            },
            ticks: {
              color: '#a1a1a1',
              backdropColor: 'transparent',
              stepSize: 25,
              font: {
                size: isMobile ? 10 : 12
              }
            }
          }
        },
        plugins: {
          legend: {
            display: isMobile,
            position: 'bottom' as const,
            labels: {
              color: 'white',
              font: {
                size: 14,
                family: 'Helvetica'
              },
              padding: 20,
              usePointStyle: true,
              pointStyle: 'rect'
            }
          }
        }
      }
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, [isMobile, isInView]); // Added isInView dependency

  // Mobile legend explanation
  const legendExplanation = [
    { label: 'S', full: 'SALES' },
    { label: 'M', full: 'MARKETING' },
    { label: 'OP', full: 'OPERATION MANAGEMENT' },
    { label: 'CS', full: 'CUSTOMER SERVICE' },
    { label: 'E', full: 'ENGINEERING' },
    { label: 'HR', full: 'HR' }
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="chartjs-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="chartjs-header"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="chartjs-title">
          <h2>Radar chart</h2>
          <p>4-6 points</p>
        </div>
      </motion.div>

      <motion.div 
        className="chartjs-main-content"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div 
          className={`companies-list ${isMobile ? 'mobile' : ''}`}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {companies.map((company, index) => (
            <motion.div 
              key={company.name} 
              className="company-section"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
            >
              <div className="company-header">
                <div className="company-checkbox" style={{ backgroundColor: company.color }} />
                <span className="company-name" style={{ color: company.color }}>{company.name}</span>
              </div>
              <div className="company-data">
                {company.data.map((item) => (
                  <div key={item.label} className="company-data-item">
                    <span className="chart-data-label">{item.label}</span>
                    <span className="chart-data-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="chart-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="chartjs-content">
            <canvas ref={chartRef} />
          </div>
          {isMobile && (
            <motion.div 
              className="mobile-legend-explanation"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {legendExplanation.map((item, index) => (
                <motion.div 
                  key={item.label} 
                  className="legend-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                >
                  <span className="legend-short">{item.label}</span>
                  <span className="legend-separator">-</span>
                  <span className="legend-full">{item.full}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RadarChart;