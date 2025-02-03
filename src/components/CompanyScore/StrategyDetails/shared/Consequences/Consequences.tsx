import './Consequences.css';

export const Consequences = ({ data }: { data: { positive: string; negative: string } }) => {
    return (
        <div className="detail-section">            <h3>Consequences</h3>
            <div className="consequences-container">
                <div className="consequence positive">
                    <h4>Positive</h4>
                    <p>{data.positive}</p>
                </div>
                <div className="consequence negative">
                    <h4>Negative</h4>
                    <p>{data.negative}</p>
                </div>
            </div>
        </div>
    );
}