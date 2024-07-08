import { useState } from 'react';
import down from '../assets/down.svg';
import deleteThis from '../assets/delete.svg';
import ok from '../assets/ok.svg';
import { isValueValid } from '../work-experience/work-check';
import { v4 as uuidv4 } from 'uuid';
import '../style/skill.css';

function SkillCard() {
  const [formData, setFormData] = useState({
    skill: '',
    level: 0,
    skillMastery: '',
  });
  const [validation, setValidation] = useState({
    skill: false,
    level: false,
    skillMastery: false,
  });
  const [rating, setRating] = useState(0);

  const optionMastery = [
    { value: '01', label: 'Novice' },
    { value: '02', label: 'Beginner' },
    { value: '03', label: 'Intermediate' },
    { value: '04', label: 'Advanced' },
    { value: '05', label: 'Master' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'skillMastery') {
      setValidation((prevState) => ({
        ...prevState,
        skillMastery: true,
      }));
    } else {
      setValidation((prevState) => ({
        ...prevState,
        [name]: isValueValid(value),
      }));
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleRating = (value) => {
    setRating(value);
    setValidation((prevState) => ({
      ...prevState,
      level: true,
    }));
  };

  return (
    <div className="card card-resize">
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
          <div className="row">
            <div className="level-container">
              <label
                htmlFor="level"
                className={
                  'label-personal' + (validation['level'] ? ' valid-label' : '')
                }
              >
                Level
              </label>
              <div className="circle-rating">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    className={'circle' + (index <= rating ? ' active' : '')}
                    id={'circle' + index}
                    key={index}
                    onClick={() => handleRating(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="skill-mastery-container">
              <label
                htmlFor="mastery"
                className={
                  'label-personal' +
                  (validation.skillMastery ? ' valid-label' : '')
                }
              >
                Skill mastery
              </label>
              <select
                name="skillMastery"
                value={formData.skillMastery}
                onChange={handleChange}
                className={
                  'input-personal-mastery ' +
                  (validation.skillMastery ? 'valid-input' : 'border')
                }
              >
                {optionMastery.map((mastery) => (
                  <option key={mastery.value}>{mastery.label}</option>
                ))}
              </select>
            </div>
          </div>
        </form>

        <div className="done-delete-container">
          <div className="all-options">
            <div className="delete-container">
              <img src={deleteThis} alt="delete" className="delete-img" />
            </div>
            <button className="done-button">
              <img src={ok} alt="vi" className="check" />
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillCard;
