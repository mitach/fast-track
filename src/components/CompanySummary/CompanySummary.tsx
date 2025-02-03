import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./CompanySummary.css";

const CompanySummary: React.FC = () => {
    useGSAP(() => {
        gsap.from(".percentage-number", {
            textContent: 0,
            duration: 1.5,
            delay: 0,
            snap: { textContent: 1 },
            ease: "power2.out",
        });
    });

    return (
        <>
            <motion.div
                className="summary-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 0.3 }}
            ></motion.div>

            <section className="results-summary">
                <div className="results-summary-left">
                    <motion.div
                        className="results-summary-left-label"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                                                <h2><span className="yellow-text">Company</span>
                                                <br />Summary</h2>
                        {/* <p><span className="yellow-text">Company</span></p>
                        <p>Summary</p> */}
                    </motion.div>
                    <motion.div
                        className="results-summary-left-percentage"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7}}
                    >
                        <div className="percentage-wrapper">
                            <div className="percentage-number">72</div>
                            <div className="percentage-symbols-wrapper">
                                <div className="percentage-symbol">%</div>
                                <img className="percentage-arrow" src="/arrow.svg" alt="uprising arrow" />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="results-summary-right">
                    <div className="results-summary-right-whitespace"></div>
                    <motion.div
                        className="results-summary-right-wrapper"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <p className="results-summary-right-text">Your company score is <span className="yellow-text">72%</span> better than the other companies who filled the questionnaire.</p>
                        <motion.button
                            className="results-summary-right-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See result details
                            <img className="" src="/diagonal-arrow.svg" alt="open results arrow icon" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default CompanySummary;