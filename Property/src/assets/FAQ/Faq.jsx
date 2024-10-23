import React, { useState } from 'react';
import './Faq.css'

// Sample FAQ data
const faqs = [
  {
    question: "Do you charge any setup fees?",
    answer: "No, Tekana does not charge any setup fees. You can get started with no upfront costs."
  },
  {
    question: "Are there any monthly fees?",
    answer: "No, we do not charge monthly fees. Tekana is designed to be transparent with no hidden costs."
  },
  {
    question: "What are platform or MID fees?",
    answer: "Tekana does not charge platform or MID fees, ensuring you only pay for the services you need."
  },
  {
    question: "Is there a minimum commitment required?",
    answer: "No, there is no minimum commitment required. You can use Tekana as needed, with no long-term contracts."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No surprises here! Tekana is transparent with its pricing, and you will not encounter any hidden fees."
  }
];

// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ answer visibility
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" style={{marginTop: '100px'}}>
      <h2>Tekana System FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          <h3
            onClick={() => toggleFAQ(index)}
            style={{ cursor: 'pointer', fontSize: '18px', color: activeIndex === index ? '#007BFF' : '#333' }}
          >
            {faq.question}
          </h3>
          {activeIndex === index && (
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
