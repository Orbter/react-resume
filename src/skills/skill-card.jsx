import { useState } from 'react';
import down from '../assets/down.svg';
import { v4 as uuidv4 } from 'uuid';
import './skill-check.css';

function SkillCard() {
  const [formData, setFormData] = useState({
    skill: '',
    level: 0,
    skillMastery: '',
  });
  const [validation, setValidation] = useState({
    language: false,
    level: false,
    skillMastery: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleRating = (event) => {};

  return (
    <div className="card">
      <div className="header-work">
        <h1 className="card-header">Skills</h1>
        <div className="action">
          <img src={down} alt="open/close" className="action-img" />
        </div>
      </div>
      <div className="card-content">
        <form className="form-personal-work">
          <div className="form-group">
            <label
              htmlFor="skill"
              className={
                'label-personal' + (validation['skill'] ? ' valid-label' : '')
              }
            >
              Skill
            </label>
            <input
              type={'text'}
              name={'skill'}
              id={'skill'}
              placeholder={'fastest runner'}
              value={formData['skill']}
              onChange={handleChange}
              className={
                'input-personal' + (validation['skill'] ? ' valid-input' : '')
              }
            />
          </div>
        </form>
        <div className="level-container">
          <label
            htmlFor="level"
            className={
              'label-personal' + (validation['skill'] ? ' valid-label' : '')
            }
          >
            Level
          </label>
          <div className="circle-rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <div
                className="circle"
                id={'circle' + value}
                key={value}
                onClick={(handleRating(value), handleChange)}
              ></div>
            ))}
          </div>
        </div>
        <div className="done/delete-container"></div>
      </div>
    </div>
  );
}
