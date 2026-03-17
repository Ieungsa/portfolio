import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1 className="hero-title">
          안녕하세요, <span className="highlight">이응사</span>입니다
        </h1>
        <p className="hero-subtitle">
          도전을 포기하지 않는 열정적인 이응사입니다
        </p>
        <a href="#projects" className="cta-button">프로젝트 보기</a>
      </div>
    </section>
  );
}

export default Hero;
