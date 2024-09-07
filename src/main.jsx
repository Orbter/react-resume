import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './NavBar';
import ProfileCard from './profile/pofile-card.jsx';
import WorkCard from './work-experience/work-card.jsx';
import EducationCard from './education/education-card.jsx';
import SkillCard from './skills/skill-card.jsx';
import LanguageCard from './languageChoice/language-card.jsx';
import A4 from './a4Creator/a4Page.jsx';
import { FormProvider } from './formProvider.jsx';
import doc from './assets/doc.svg';
import './index.css';
import './style/openA4.css';
import { CloseOrOpenDIv } from './a4Creator/openA4.jsx';
import { downloadDivAsPDF } from './div-to-pdf.jsx';
function App() {
  const divRef = useRef(); // Reference to the div
  const [isAbove1000px, setIsAbove1000px] = useState(window.innerWidth > 1000);
  const [openA4, setOpenA4] = useState('close');
  const [openCard, setOpenCard] = useState({
    profile: true,
    work: false,
    education: false,
    skills: false,
    language: false,
    lastOpen: 'profile',
  });
  useEffect(() => {
    const handleResize = () => {
      setIsAbove1000px(window.innerWidth > 1000);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownloadPDF = () => {
    downloadDivAsPDF(divRef); // Call the function to download the div as PDF
  };

  const openOrClose = (place) => {
    const lastCard = openCard['lastOpen'];
    setOpenCard((prevState) => ({
      ...prevState,
      [lastCard]: false,
      [place]: true,
      lastOpen: place,
    }));
  };
  const openDiv = () => {
    setOpenA4(openA4 === 'open' ? 'close' : 'open');
  };
  return (
    <React.StrictMode>
      <NavBar downloadPdf={handleDownloadPDF} />
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
          <>{isAbove1000px && <A4 ref={divRef} />}</>
          <>
            {openA4 !== 'close' && !isAbove1000px && (
              <CloseOrOpenDIv
                openA4={openA4}
                setOpenA4={setOpenA4}
                downloadPdf={handleDownloadPDF}
                divRef={divRef}
              />
            )}
          </>
        </div>
      </FormProvider>
      <div className='circle-a4' onClick={openDiv}>
        <img src={doc} alt='doc' />
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
