// GrowthSection.tsx
import React from 'react';
import Card from '../Card/card'; // Assuming you have a Card component
import './GrowthSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPeopleGroup,faFaceLaughBeam,faLightbulb,faUpRightAndDownLeftFromCenter, faGaugeHigh  } from '@fortawesome/free-solid-svg-icons';


const icons = [
  <FontAwesomeIcon icon={faDollarSign} className='iconEl'/>,
  <FontAwesomeIcon icon={faFaceLaughBeam} className='iconEl'/>,
  <FontAwesomeIcon icon={faLightbulb} className='iconEl'/>,
  <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='iconEl'/>,
  <FontAwesomeIcon icon={faGaugeHigh} className='iconEl'/>,
  <FontAwesomeIcon icon={faPeopleGroup} className='iconEl'/>,
];

interface GrowthSectionProps {
    cardText: { title: string; description: string }[];
}

const GrowthSection: React.FC<GrowthSectionProps> = ({ cardText }) => (
    <section>
        <div className="growth">
            <div className="message-box center-box">
                <div className="message">
                    <h2>We grow together!</h2>
                    <p>
                        Your triumphs propel us forward. It's a{' '}
                        <span>TEAM</span> effort. For you, we've selected 6
                        factors that indicate your business is headed in the
                        right direction:
                    </p>
                </div>
            </div>
            <div className="growth-grid">
                {cardText.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                    >
                        {icons[index]}
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export default GrowthSection;
