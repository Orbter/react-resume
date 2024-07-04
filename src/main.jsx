import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './NavBar';
import ResumePaper from './resumeVs';
import ProfileCard from './profile/pofile-card.jsx';
import WorkCard from './work-experience/work-card.jsx';
import EducationCard from './education/education-card.jsx';
import SkillCard from './skills/skill-card.jsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <main className="main-contact">
      <ProfileCard />
      <WorkCard />
      <EducationCard />
      <SkillCard />
    </main>
  </React.StrictMode>
);
