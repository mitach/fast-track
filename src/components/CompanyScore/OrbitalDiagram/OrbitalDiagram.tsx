import { motion } from 'framer-motion';
import './OrbitalDiagram.css';

interface OrbitalDiagramProps {
    categories: Array<{ id: string; label: string }>;
    selectedCategory: String;
    onCategorySelect: (category: string) => void;
    isInView?: boolean;
}

export const OrbitalDiagram = ({ categories, selectedCategory, onCategorySelect, isInView = false }: OrbitalDiagramProps) => {

    const getNodePosition = (index: number, total: number) => {
        const rx = 400;
        const ry = 120;

        const angle = ((index - 1) / total) * 2 * Math.PI - Math.PI / 2;

        const rotationAngle = 4 * (Math.PI / 180);
        const x = Math.cos(angle) * rx;
        const y = Math.sin(angle) * ry;

        const rotatedX = x * Math.cos(rotationAngle) - y * Math.sin(rotationAngle);
        const rotatedY = x * Math.sin(rotationAngle) + y * Math.cos(rotationAngle);

        return {
            x: 480 + rotatedX,
            y: 335 + rotatedY
        };
    };

    const getTextSize = (yPos: number) => {
        const normalizedPosition = (yPos - 800) / 400;

        const minSize = 26;
        const maxSize = 50;

        return minSize + (normalizedPosition + 1) * (maxSize - minSize) / 2;
    };

    const getNodeSize = (yPos: number) => {
        const normalizedPosition = (yPos - 800) / 400;
        const minSize = 16;  // Minimum rectangle size
        const maxSize = 24; // Maximum rectangle size
        return minSize + (normalizedPosition + 1) * (maxSize - minSize) / 2;
    };

    return (
        <div className="orbital-container">
            <motion.div className="orbital-diagram">
                <svg viewBox="0 0 1000 600" className="orbital-svg" preserveAspectRatio="xMidYMid meet">
                    {/* Outer ellipse */}
                    <motion.g style={{ transformOrigin: '500px 300px' }}>
                        <motion.ellipse
                            className="orbit-path outer"
                            cx="500" cy="300" rx="400" ry="120"
                            transform="rotate(4)"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        />
                    </motion.g>

                    {/* Middle ellipse */}
                    <motion.g style={{ transformOrigin: '500px 300px' }}>
                        <motion.ellipse
                            className="orbit-path middle"
                            cx="500" cy="300" rx="280" ry="80"
                            transform="rotate(5)"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        />
                    </motion.g>

                    {/* Inner ellipse */}
                    <motion.g style={{ transformOrigin: '500px 300px' }}>
                        <motion.ellipse
                            className="orbit-path inner"
                            cx="500" cy="300" rx="160" ry="40"
                            transform="rotate(3)"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        />
                    </motion.g>

                    {/* Strategies - on the outer orbit */}
                    <motion.g style={{ transformOrigin: '500px 300px' }}>
                        {categories.map((strategy, index) => {
                            const pos = getNodePosition(index, categories.length);
                            const textSize = getTextSize(pos.y);
                            const nodeSize = getNodeSize(pos.y);
                            const isSelected = selectedCategory === strategy.id;

                            return (
                                <motion.g
                                    key={strategy.id}
                                    className={`category-node ${isSelected ? 'active' : ''}`}
                                    onClick={() => onCategorySelect(strategy.id)}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { 
                                        opacity: 1, 
                                        scale: 1,
                                        transition: {
                                            delay: 1.5 + (index * 0.1),
                                            duration: 0.5,
                                            scale: {
                                                type: "spring",
                                                damping: 8
                                            }
                                        }
                                    } : { 
                                        opacity: 0, 
                                        scale: 0 
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <motion.rect
                                        x={pos.x - nodeSize / 2}
                                        y={pos.y - nodeSize / 2}
                                        width={nodeSize}
                                        height={nodeSize}
                                        animate={{
                                            fill: isSelected ? "#fff469" : "#fff",
                                            width: isSelected ? nodeSize * 1.2 : nodeSize,
                                            height: isSelected ? nodeSize * 1.2 : nodeSize,
                                            x: isSelected ? pos.x - (nodeSize * 1.2) / 2 : pos.x - nodeSize / 2,
                                            y: isSelected ? pos.y - (nodeSize * 1.2) / 2 : pos.y - nodeSize / 2,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.text
                                        x={pos.x}
                                        y={pos.y}
                                        dy="-30"
                                        style={{ fontFamily: 'Oswald, sans-serif' }}
                                        className={isSelected ? 'selected-text' : ''}
                                        animate={{
                                            fontSize: isSelected ? `${textSize * 1.2}px` : `${textSize}px`,
                                            fill: isSelected ? "#f4d03f" : "#fff"
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {strategy.label}
                                    </motion.text>
                                </motion.g>
                            );
                        })}
                    </motion.g>
                </svg>
            </motion.div>
        </div>
    );
}; 