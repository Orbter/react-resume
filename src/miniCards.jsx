import { useState, useRef, useEffect, useContext } from 'react';
import editIconImg from './assets/editIcon.svg';
import plusIcon from './assets/plus.svg';
import './style/miniCard.css';

const levelText = (level, options) => {
  const mastery = options.find((option) => option.value === level);
  return mastery.label;
};

function MiniCardSkill({ skillData, setCurrentDiv, setCurrentSkill }) {
  const addSkill = () => {
    setCurrentDiv('largeDiv');
  };
  const editIcon = (currentSkill) => {
    const editSkill = {
      skill: currentSkill.skill,
      level: currentSkill.level,
      type: currentSkill.type,
      index: currentSkill.index,
    };
    setCurrentSkill(editSkill);
    addSkill();
  };
  const optionMastery = [
    { value: 1, label: 'Novice' },
    { value: 2, label: 'Beginner' },
    { value: 3, label: 'Intermediate' },
    { value: 4, label: 'Advanced' },
    { value: 5, label: 'Master' },
  ];
  return (
    <div className="mini-card">
      <ul>
        {skillData.map((skill, index) => (
          <div className="mini-card-container" key={index}>
            <div className="miniCard-content">
              <h3 className="mini-card-header">{skill.skill}</h3>
              <span className="mini-card-level">
                {levelText(skill.level, optionMastery)}
              </span>
            </div>
            <div className="edit-container" onClick={() => editIcon(skill)}>
              <img src={editIconImg} alt="edit" className="edit-icon"></img>
            </div>
          </div>
        ))}
      </ul>
      <div className="language-container">
        <div className="add-container" onClick={addSkill}>
          <div className="plus-container">
            <img src={plusIcon} className="plus"></img>
          </div>
          <p className="add-language">Add Skill</p>
        </div>
      </div>
    </div>
  );
}
function MiniCardLanguage({ languageData, setCurrentDiv, setCurrentLanguage }) {
  const addLanguage = () => {
    setCurrentDiv('largeDiv');
  };
  const editIcon = (currentLanguage) => {
    const editSkill = {
      language: currentLanguage.language,
      index: currentLanguage.index,
    };
    setCurrentLanguage(editSkill);
    addSkill();
  };
  return (
    <div className="mini-card">
      <ul>
        {languageData.map((language, index) => (
          <div className="mini-card-container" key={index}>
            <div className="miniCard-content">
              <h3 className="mini-card-header">{language.language}</h3>
            </div>
            <div className="edit-container" onClick={() => editIcon(language)}>
              <img src={editIconImg} alt="edit" className="edit-icon"></img>
            </div>
          </div>
        ))}
      </ul>
      <div className="language-container">
        <div className="add-container" onClick={addLanguage}>
          <div className="plus-container">
            <img src={plusIcon} className="plus"></img>
          </div>
          <p className="add-language">Add Language</p>
        </div>
      </div>
    </div>
  );
}
export { MiniCardSkill, MiniCardLanguage };
