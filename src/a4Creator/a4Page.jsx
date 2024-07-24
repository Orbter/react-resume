import { useState, useContext } from 'react';

import '../style/a4.css';
import { ResumeContext } from '../formProvider';

function A4() {
  const { objSeen, objNotSeen } = useContext(ResumeContext);
  const { skillData, setSkillData } = objSeen;

  console.log('skillData');

  console.log(skillData);

  return (
    <div className='a4-page'>
      <div className='a4'>
        <div className='a4-nav-bar'></div>
        <div className='a4-main-content'>
          <div className='a4-padding'></div>
          <div className='a4-header'>
            <h2>Skills</h2>
            <ul>
              {skillData.map((skill, index) => (
                <li key={index}>
                  {skill.skill} - Level: {skill.level} - Type: {skill.type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A4;
