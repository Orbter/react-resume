import { useState, useContext } from 'react';
import SkillA4 from './allA4 components/skillA4';
import LanguageA4 from './allA4 components/languageA4';
import '../style/a4.css';
import '../style/allA4/languageA4.css';
import { EducationA4 } from './allA4 components/educationA4';
import '../style/allA4/skillA4.css';
import { ResumeContext } from '../formProvider';
import { WorkA4 } from './allA4 components/workA4';

function A4() {
  const { objSeen, objNotSeen } = useContext(ResumeContext);
  const { skillData, setSkillData } = objSeen;
  const { languageData, setLanguageData } = objSeen;
  const { educationData, setEducationData } = objSeen;
  const { workData } = objSeen;
  return (
    <div className='a4-page'>
      <div className='a4'>
        <div className='a4-nav-bar'>
          <SkillA4 skillData={skillData} />
        </div>
        <div className='a4-header-content'>
          <div className='a4-padding'></div>
          <div className='a4-header'></div>
        </div>
        <div className='a4-main-content'>
          <WorkA4 workData={workData} />
          <EducationA4 educationData={educationData} />
          <LanguageA4 languageData={languageData} />
        </div>
      </div>
    </div>
  );
}

export default A4;
