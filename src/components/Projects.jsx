import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: '피싱·스캠 예방 서비스',
      description: 'Android Studio를 활용한 어플리케이션 개발',
      tags: ['Android', 'Kotlin', 'AI'],
      github: 'https://github.com/Ieungsa/COLOCK',
      demo: '#'
    },
    {
      title: '기뢰탐지 AUV',
      description: '진행 중인 프로젝트',
      tags: ['ROS2', 'Python', 'Computer Vision'],
      github: 'https://github.com/Ieungsa/Naval-Mine-Detection-AUV',
      demo: '#'
    },
    {
      title: '다음 프로젝트',
      description: '',
      tags: [],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <h2 className="section-title">프로젝트</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="placeholder-image">프로젝트 이미지</div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">GitHub</a>
                  <a href={project.demo} className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
