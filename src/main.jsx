import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './NavBar';
import ResumePaper from './resumeVs';
import ProfileCard from './profile/pofile-card.jsx';
import WorkCard from './work-experience/work-card.jsx';
import EducationCard from './education/education-card.jsx';
import SkillCard from './skills/skill-card.jsx';
import LanguageCard from './languageChoice/language-card.jsx';
import './index.css';
function App() {
  const [openCard, setOpenCard] = useState(null);
  return (
    <React.StrictMode>
      <NavBar />
      <main className="main-contact">
        <ProfileCard
          isOpen={openCard === 'profile'}
          onClick={() => setOpenCard(openCard === 'profile' ? null : 'profile')}
        />
        <WorkCard
          isOpen={openCard === 'work'}
          onClick={() => setOpenCard(openCard === 'work' ? null : 'work')}
        />
        <EducationCard
          isOpen={openCard === 'education'}
          onClick={() =>
            setOpenCard(openCard === 'education' ? null : 'education')
          }
        />
        <SkillCard
          isOpen={openCard === 'skills'}
          onClick={() => setOpenCard(openCard === 'skills' ? null : 'skills')}
        />
        <LanguageCard
          isOpen={openCard === 'language'}
          onClick={() =>
            setOpenCard(openCard === 'language' ? null : 'language')
          }
        />
      </main>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
