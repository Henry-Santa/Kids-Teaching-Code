import React, { useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './FAQ.css';

function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What age groups do you teach?",
      answer: "Our program is designed for students between the ages of 8-11. We tailor our teaching methods and content to be age-appropriate while still challenging and engaging."
    },
    {
      id: 2,
      question: "Do students need prior coding experience?",
      answer: "No prior experience is necessary! Our curriculum is designed to accommodate complete beginners while also providing challenges for those with some coding background."
    },
    {
      id: 3,
      question: "What programming languages do you teach?",
      answer: "We teach block-based coding using platforms like Scratch to teach fundamental concepts."
    },
    {
      id: 4,
      question: "How can my child join the program?",
      answer: "Students who are members of the Boys and Girls Club can join our weekly sessions."
    },
    {
      id: 5,
      question: "Do you provide computers or should students bring their own?",
      answer: "We use the chromebooks provided by Greenwich Schools. Students can bring their own laptops if they prefer."
    }
  ];

  return (
    <section className="faq-section stagger-item">
      <Container>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          <Accordion defaultActiveKey="0" flush>
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={faq.id} className="faq-item">
                <Accordion.Header className="faq-question">
                  {faq.question}
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;