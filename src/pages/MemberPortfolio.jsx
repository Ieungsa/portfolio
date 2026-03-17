import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MemberPortfolio.css';

function MemberPortfolio() {
  const { id } = useParams();
  const navigate = useNavigate();

  const memberData = {
    'lee-wangjae': {
      name: '이왕재',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'CyberMarine System LAB (2025.01~ )',
      email: 'wangjae@kmou.ac.kr',
      skills: ['React', 'Node.js', 'Python', 'AI/ML'],
      projects: [
        { name: '피싱·스캠 예방 서비스', desc: 'Android Studio를 활용한 보안 앱' },
        { name: '기뢰탐지 AUV', desc: 'ROS2 기반 자율 수중 로봇' }
      ],
      interests: '풀스택 개발, AI/ML, 로보틱스'
    },
    'lee-sungjae': {
      name: '이성재',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'TEAM Navigator (2025.03 ~ 2025.11)',
      email: 'sungjae@kmou.ac.kr',
      skills: ['React', 'JavaScript', 'UI/UX', 'TypeScript'],
      projects: [
        { name: '피싱·스캠 예방 서비스', desc: 'UI/UX 디자인 및 프론트엔드 개발' }
      ],
      interests: '프론트엔드 개발, 사용자 경험 디자인'
    },
    'oh-seojin': {
      name: '오서진',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'CyberMarine System LAB (2024.09~ )',
      email: 'seojin@kmou.ac.kr',
      skills: ['Python', 'ROS2', 'Computer Vision', 'Deep Learning'],
      projects: [
        { name: '기뢰탐지 AUV', desc: '컴퓨터 비전 및 제어 시스템 개발' }
      ],
      interests: '로보틱스, 컴퓨터 비전, 자율주행'
    },
    'won-jongeun': {
      name: '원종은',
      role: 'KMOU 인공지능공학부 4학년',
      bio: 'AI 신호처리 연구실(2025.03 ~ 2025.12)',
      email: 'jongeun@kmou.ac.kr',
      skills: ['UI/UX Design', 'Figma', 'React', 'Adobe XD'],
      projects: [
        { name: '피싱·스캠 예방 서비스', desc: 'UI/UX 디자인' }
      ],
      interests: 'UI/UX 디자인, 인터랙션 디자인'
    }
  };

  const member = memberData[id];

  if (!member) {
    return (
      <div className="member-portfolio">
        <div className="container">
          <h1>팀원을 찾을 수 없습니다</h1>
          <button onClick={() => navigate('/team')} className="back-button">팀원 목록으로</button>
        </div>
      </div>
    );
  }

  return (
    <div className="member-portfolio">
      <div className="container">
        <button onClick={() => navigate('/team')} className="back-button">← 팀원 목록으로</button>

        <div className="portfolio-header">
          <div className="portfolio-image">
            <div className="no-image-large">No image</div>
          </div>
          <div className="portfolio-info">
            <h1>{member.name}</h1>
            <p className="portfolio-role">{member.role}</p>
            <p className="portfolio-bio">{member.bio}</p>
            <p className="portfolio-email">📧 {member.email}</p>
          </div>
        </div>

        <div className="portfolio-section">
          <h2>기술 스택</h2>
          <div className="skills-tags">
            {member.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="portfolio-section">
          <h2>참여 프로젝트</h2>
          <div className="projects-list">
            {member.projects.map((project, idx) => (
              <div key={idx} className="project-item">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-section">
          <h2>관심 분야</h2>
          <p>{member.interests}</p>
        </div>
      </div>
    </div>
  );
}

export default MemberPortfolio;
