import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './NavBar';
import ResumePaper from './resumeVs';
import ProfileCard from './profile/pofile-card.jsx';
import WorkCard from './work-experience/work-card.jsx';
import EducationCard from './education/education-card.jsx';
import SkillCard from './skills/skill-card.jsx';
import LanguageCard from './languageChoice/language-card.jsx';
import A4 from './a4Creator/a4Page.jsx';
import { FormProvider } from './formProvider.jsx';
import './index.css';

function App() {
  const [openCard, setOpenCard] = useState({
    profile: true,
    work: false,
    education: false,
    skills: false,
    language: false,
    lastOpen: 'profile',
  });
  const openOrClose = (place) => {
    const lastCard = openCard['lastOpen'];
    setOpenCard((prevState) => ({
      ...prevState,
      [lastCard]: false,
      [place]: true,
      lastOpen: place,
    }));
  };

  return (
    <React.StrictMode>
      <NavBar />
      <FormProvider>
        <div className='main-container'>
          <main className='main-contact'>
            <ProfileCard
              isOpen={openCard.profile}
              onClick={() => openOrClose('profile')}
            />
            <WorkCard
              isOpen={openCard.work}
              onClick={() => openOrClose('work')}
            />
            <EducationCard
              isOpen={openCard.education}
              onClick={() => openOrClose('education')}
            />
            <SkillCard
              isOpen={openCard.skills}
              onClick={() => openOrClose('skills')}
            />
            <LanguageCard
              isOpen={openCard.language}
              onClick={() => openOrClose('language')}
            />
          </main>
          <A4 />
        </div>
      </FormProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
