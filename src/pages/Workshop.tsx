import BubbleChart from '../components/BubbleChart/BubbleChart';
// import './Workshop.css';
import '../styles/Workshop.css';

const Workshop: React.FC = () => {
    const workshops = [
        {
            title: "Strategy Development",
            description: "Learn how to develop effective business strategies through hands-on exercises and real-world scenarios.",
            status: "Coming Soon",
            difficulty: "Advanced"
        },
        {
            title: "Market Analysis",
            description: "Master the art of analyzing market trends and competitive landscapes with practical tools and methodologies.",
            status: "Coming Soon",
            difficulty: "Intermediate"
        },
        {
            title: "Business Fundamentals",
            description: "Build a strong foundation in business principles and decision-making processes.",
            status: "Coming Soon",
            difficulty: "Beginner"
        }
    ];

    return (
        <div className="workshop-page">
            <div className="workshop-background"></div>
            <div >
                <BubbleChart />
            </div>
            <div className="workshop-container">
                <div className="workshop-header">
                    <h1>Workshop</h1>
                    <p className="subtitle">Interactive learning experiences to enhance your business acumen</p>
                </div>
                
                <div className="workshops-grid">
                    {workshops.map((workshop, index) => (
                        <div key={index} className="workshop-card">
                            <div className="workshop-card-content">
                                <div className="workshop-card-header">
                                    <h2>{workshop.title}</h2>
                                    <span className="difficulty-badge">{workshop.difficulty}</span>
                                </div>
                                <p className="workshop-description">{workshop.description}</p>
                                <div className="workshop-status">
                                    <span className="status-indicator"></span>
                                    {workshop.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workshop;