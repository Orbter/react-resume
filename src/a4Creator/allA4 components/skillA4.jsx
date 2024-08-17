import { useState, useEffect } from 'react';
import '../../style/allA4/skillA4.css';

function SkillA4({ skillData }) {
  const [containsSoft, setContainsSoft] = useState(false);
  const [containsHard, setContainsHard] = useState(false);

  useEffect(() => {
    const checkForSoft = skillData.some((skill) => skill.type === 'Soft');
    const checkForHard = skillData.some((skill) => skill.type === 'Hard');
    setContainsSoft(checkForSoft);
    setContainsHard(checkForHard);
  }, [skillData]);

  return (
    <div className='skill-list'>
      {containsHard && (
        <div className='hard-skills-container'>
          <h3 className='hard-skills-headline'>HARD SKILLS</h3>
          <ul className='ul-a4'>
            {Array.isArray(skillData) &&
              skillData
                .filter((skill) => skill.skill !== '' && skill.type === 'Hard')
                .map((skill, index) => (
                  <li key={index} className='skill-container'>
                    <div className='skill-name'> {skill.skill}</div>
                    <div className='circle-a4-container'>
                      {[1, 2, 3, 4, 5].map((index) => (
                        <div
                          className={
                            'circle-skill' +
                            (index <= skill.level ? ' active' : '')
                          }
                          key={index + ' HARD'}
                        ></div>
                      ))}
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      )}

      {containsSoft && (
        <div className='soft-skills-container'>
          <h3 className='soft-skills-headLine'>SOFT SKILLS</h3>
          <ul className='ul-a4'>
            {Array.isArray(skillData) &&
              skillData
                .filter((skill) => skill.skill !== '' && skill.type === 'Soft')
                .map((skill, index) => (
                  <li key={index} className='skill-container'>
                    <div className='skill-name'> {skill.skill}</div>
                    <div className='circle-a4-container'>
                      {[1, 2, 3, 4, 5].map((index) => (
                        <div
                          className={
                            'circle-skill' +
                            (index <= skill.level ? ' active' : '')
                          }
                          key={index + ' Soft'}
                        ></div>
                      ))}
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default SkillA4;
