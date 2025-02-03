import { motion } from 'framer-motion';
import './CategoryNav.css';

interface CategoryNavProps {
  categories: Array<{ id: string; label: string }>;
  selectedCategory: String;
  onCategorySelect: (category: string) => void;
}

export const CategoryNav = ({ categories, selectedCategory, onCategorySelect }: CategoryNavProps) => {
  return (
    <div className="categories-container">
      <nav className="category-nav">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`nav-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategorySelect(category.id)}
          >
            {category.label}
          </motion.button>
        ))}
      </nav>
    </div>
  );
}; 