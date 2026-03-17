import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">연락처</h2>
        <div className="contact-content">
          <p className="contact-text">
            프로젝트 협업이나 문의사항이 있으시면 언제든지 연락주세요!
          </p>
          <div className="contact-links">
            <a href="mailto:ieungsa204@gmail.com" className="contact-item">
              <span className="icon">✉</span>
              <span>ieungsa204@gmail.com</span>
            </a>
            <a href="https://github.com/Ieungsa" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="icon">🔗</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
