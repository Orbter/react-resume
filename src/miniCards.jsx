import { useState, useRef, useEffect, useContext } from 'react';
import editIcon from './assets/editIcon.svg';
import plusIcon from './assets/plus.svg';
import './style/miniCard.css';

const levelText = (level, options) => {
  const mastery = options.find((option) => option.value === level);
  return mastery.label;
};

function MiniCardSkill(skillData) {
  console.log(skillData); // Debugging line

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
        {skillData.skill.map((skill, index) => (
          <div className="mini-card-container" key={index}>
            <div className="miniCard-content">
              <h3 className="mini-card-header">{skill.skill}</h3>
              <span className="mini-card-level">
                {levelText(skill.level, optionMastery)}
              </span>
            </div>
            <div className="edit-container">
              <img src={editIcon} alt="edit" className="edit-icon"></img>
            </div>
          </div>
        ))}
      </ul>
      <div className="language-container">
        <div className="plus-container">
          <img src={plusIcon} className="plus"></img>
        </div>
        <p className="add-language">Add Language</p>
      </div>
    </div>
  );
}

export default MiniCardSkill;
