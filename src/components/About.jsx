import React from 'react';
import './About.css';

function About() {
  const members = [
    {
      name: '이왕재',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'CyberMarine System LAB (2025.01~ )',
      image: null // 나중에 이미지 경로 추가
    },
    {
      name: '이성재',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'TEAM Navigator (2025.03 ~ 2025.11)',
      image: null
    },
    {
      name: '오서진',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'CyberMarine System LAB (2024.09~ )',
      image: null
    },
    {
      name: '원종은',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'AI 신호처리 연구실(2025.03 ~ 2025.12)',
      image: null
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">팀원 소개</h2>
        <div className="members-grid">
          {members.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-image">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="no-image">No image</div>
                )}
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
