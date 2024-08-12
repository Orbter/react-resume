import { useState, useContext } from 'react';
import SkillA4 from './allA4 components/skillA4';
import '../style/a4.css';

import '../style/allA4/skillA4.css';
import { ResumeContext } from '../formProvider';

function A4() {
  const { objSeen, objNotSeen } = useContext(ResumeContext);
  const { skillData, setSkillData } = objSeen;

  return (
    <div className="a4-page">
      <div className="a4">
        <div className="a4-nav-bar">
          <SkillA4 skillData={skillData} />
        </div>
        <div className="a4-main-content">
          <div className="a4-padding"></div>
          <div className="a4-header"></div>
        </div>
      </div>
    </div>
  );
}

export default A4;
