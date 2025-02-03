import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CategoryNav } from './CategoryNav/CategoryNav';
import { OrbitalDiagram } from './OrbitalDiagram/OrbitalDiagram';
import { StrategyDetails } from './StrategyDetails/StrategyDetails';
import './CompanyScore.css';

type Category = string;
const CATEGORIES = [
  { id: 'IDENTITY', label: 'IDENTITY' },
  { id: 'MARKET', label: 'MARKET' },
  { id: 'STRATEGY', label: 'STRATEGY' },
  { id: 'EXECUTION', label: 'EXECUTION' },
  { id: 'PERFORMANCE', label: 'PERFORMANCE' },
  { id: 'FUTURE_READY', label: 'FUTURE READY' },
];

const CompanyScore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px -20% 0px"
  });

  const [selectedCategory, setSelectedCategory] = useState('PERFORMANCE');

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <motion.div
      ref={ref}
      className="company-score-main-content"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="company-score-heading">
        <motion.h2
          className="company-score-title"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          COMPANY<br />SCORE
        </motion.h2>

        <motion.div
          className="company-score-category-nav"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CategoryNav
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <OrbitalDiagram
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          isInView={isInView}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.8,
          delay: 1 // Wait for orbital animation to complete
        }}
      >
        <StrategyDetails selectedCategory={selectedCategory} />
      </motion.div>

    </motion.div>
  );
};

export default CompanyScore;
