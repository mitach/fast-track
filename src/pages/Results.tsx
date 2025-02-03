import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CompanySummary from "../components/CompanySummary/CompanySummary";
import ComparisonChart from "../components/ComparisonChart/ComparisonChart";
import CompanyScore from '../components/CompanyScore/CompanyScore';
import RadarChart from '../components/RadarChart/RadarChart';
import CEOVision from '../components/CEOVision/CEOVision';
import ScrollButton from '../components/ScrollButton/ScrollButton';

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-20% 0px -20% 0px"
    });

    return (
        <motion.section
            className="results-section"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
};

const Results: React.FC = () => {
    return (
        <div className="results-container">
            <div className="results-section">
                <CompanySummary />
            </div>

            <Section>
                    <ComparisonChart />
            </Section>

            <Section>
                    <CompanyScore />
            </Section>

            <Section>
                    <RadarChart />
            </Section>

            <Section>
                    <CEOVision />
            </Section>

            <ScrollButton />
        </div>
    );
};

export default Results;
