import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './TeamComponent.css';

interface TeamMember {
    name: string;
    role: string;
    description: string;
    expertise: string[];
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "John Davidson",
        role: "Chief Executive Officer",
        description: "Leading AI innovation with over 15 years of experience in machine learning and enterprise solutions.",
        expertise: ["Strategic Leadership", "AI Architecture", "Business Development"],
        image: "/team/ceo.jpg" // Add placeholder images or actual team photos
    },
    {
        name: "David Rodriguez",
        role: "Chief Technology Officer",
        description: "Pioneering breakthrough AI technologies with a focus on scalable and ethical solutions.",
        expertise: ["Machine Learning", "System Architecture", "Tech Strategy"],
        image: "/team/cto.jpg"
    },
    {
        name: "Emily Watson",
        role: "Head of Research",
        description: "Driving innovation in NLP and computer vision through cutting-edge research initiatives.",
        expertise: ["Deep Learning", "Research Direction", "Academic Partnership"],
        image: "/team/research.jpg"
    },
    {
        name: "Michael Chang",
        role: "Product Director",
        description: "Transforming complex AI capabilities into intuitive and powerful product experiences.",
        expertise: ["Product Strategy", "UX Design", "Market Analysis"],
        image: "/team/product.jpg"
    }
];

const TeamMemberSkeleton = () => (
    <div className="team-member-card skeleton">
        <div className="member-image-container skeleton-image">
            <div className="skeleton-shine"></div>
        </div>
        <div className="member-content">
            <div className="skeleton-text skeleton-name"></div>
            <div className="skeleton-text skeleton-role"></div>
            <div className="skeleton-text skeleton-description"></div>
            <div className="skeleton-tags">
                <div className="skeleton-tag"></div>
                <div className="skeleton-tag"></div>
                <div className="skeleton-tag"></div>
            </div>
        </div>
    </div>
);

const TeamComponent: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20% 0px -20% 0px" });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="team-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Hero Section */}
            <motion.div
                className="team-hero"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <h1>OUR TEAM</h1>
                <p className="team-subtitle">Pioneering the Future of AI Together</p>
            </motion.div>

            {/* Team Grid with Skeleton Loading */}
            <div className="team-grid">
                {isLoading ? (
                    // Show skeletons while loading
                    Array(4).fill(null).map((_, index) => (
                        <TeamMemberSkeleton key={index} />
                    ))
                ) : (
                    // Show actual team members after loading
                    teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            className="team-member-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="member-image-container">
                                <motion.div
                                    className="member-image"
                                    style={{ backgroundImage: `url(${member.image})` }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div className="member-content">
                                <h2>{member.name}</h2>
                                <div className="role-badge">{member.role}</div>
                                <p className="member-description">{member.description}</p>
                                <div className="expertise-tags">
                                    {member.expertise.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            className="expertise-tag"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>

            {/* Vision Section */}
            <motion.div
                className="team-vision"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2>Our Vision</h2>
                <div className="vision-content">
                    <p>
                        We're building a future where AI empowers humanity, enhances creativity,
                        and solves complex challenges. Our diverse team brings together expertise
                        from multiple disciplines to create innovative and ethical AI solutions.
                    </p>
                    <motion.div
                        className="vision-stats"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years Combined Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Research Papers</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">30+</span>
                            <span className="stat-label">Patents</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default TeamComponent;