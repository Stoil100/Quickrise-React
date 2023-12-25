// FinalMessageSection.tsx
import React from 'react';
import "./FinalMessage.scss";

const FinalMessageSection: React.FC = () => (
  <section className="final-message">
    <div className="message-box center-box">
      <h1>
        Unlock the power of our innovative solutions and give your business a
        competitive edge. Take the first step towards transforming your
        challenges into opportunities. Your success is just one email away.
      </h1>
    </div>
    <a className="contact">
      Let's get to work <i className="fa-solid fa-arrow-right"></i>
    </a>
  </section>
);

export default FinalMessageSection;
