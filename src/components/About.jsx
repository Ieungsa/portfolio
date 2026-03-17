import React, { useState } from 'react';
import './About.css';

function About() {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      name: '이왕재',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'CyberMarine System LAB (2025.01~ )',
      image: null,
      details: {
        email: 'example@kmou.ac.kr',
        skills: ['React', 'Node.js', 'Python'],
        projects: ['피싱·스캠 예방 서비스', '기뢰탐지 AUV'],
        interests: '풀스택 개발, AI/ML'
      }
    },
    {
      name: '이성재',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'TEAM Navigator (2025.03 ~ 2025.11)',
      image: null,
      details: {
        email: 'example@kmou.ac.kr',
        skills: ['React', 'JavaScript', 'UI/UX'],
        projects: ['피싱·스캠 예방 서비스'],
        interests: '프론트엔드 개발, 사용자 경험'
      }
    },
    {
      name: '오서진',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'CyberMarine System LAB (2024.09~ )',
      image: null,
      details: {
        email: 'example@kmou.ac.kr',
        skills: ['Python', 'ROS2', 'Computer Vision'],
        projects: ['기뢰탐지 AUV'],
        interests: '로보틱스, 컴퓨터 비전'
      }
    },
    {
      name: '원종은',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'AI 신호처리 연구실(2025.03 ~ 2025.12)',
      image: null,
      details: {
        email: 'example@kmou.ac.kr',
        skills: ['UI/UX Design', 'Figma', 'React'],
        projects: ['피싱·스캠 예방 서비스'],
        interests: 'UI/UX 디자인, 인터랙션'
      }
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">팀원 소개</h2>
        <div className="members-grid">
          {members.map((member, index) => (
            <div
              key={index}
              className="member-card"
              onClick={() => setSelectedMember(member)}
            >
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

      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>×</button>
            <div className="modal-header">
              <div className="modal-image">
                {selectedMember.image ? (
                  <img src={selectedMember.image} alt={selectedMember.name} />
                ) : (
                  <div className="no-image-large">No image</div>
                )}
              </div>
              <div className="modal-title">
                <h2>{selectedMember.name}</h2>
                <p className="modal-role">{selectedMember.role}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>소속</h3>
                <p>{selectedMember.bio}</p>
              </div>
              <div className="modal-section">
                <h3>기술 스택</h3>
                <div className="skills-tags">
                  {selectedMember.details.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h3>참여 프로젝트</h3>
                <ul>
                  {selectedMember.details.projects.map((project, idx) => (
                    <li key={idx}>{project}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <h3>관심 분야</h3>
                <p>{selectedMember.details.interests}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
