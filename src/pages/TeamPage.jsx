import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamPage.css';

function TeamPage() {
  const navigate = useNavigate();

  const members = [
    { name: '이왕재', id: 'lee-wangjae' },
    { name: '이성재', id: 'lee-sungjae' },
    { name: '오서진', id: 'oh-seojin' },
    { name: '원종은', id: 'won-jongeun' }
  ];

  return (
    <div className="team-page">
      <div className="container">
        <h1 className="page-title">팀원 소개</h1>
        <p className="page-subtitle">각 팀원을 클릭하면 개인 포트폴리오를 볼 수 있습니다</p>
        <div className="team-grid">
          {members.map((member, index) => (
            <div
              key={index}
              className="team-member-card"
              onClick={() => navigate(`/team/${member.id}`)}
            >
              <div className="team-member-image">
                <div className="no-image">No image</div>
              </div>
              <h2>{member.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
