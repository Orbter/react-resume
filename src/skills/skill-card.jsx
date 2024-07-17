import { useState, useRef, useEffect } from 'react';
import down from '../assets/down.svg';
import up from '../assets/up.svg';
import deleteThis from '../assets/delete.svg';
import ok from '../assets/ok.svg';
import { isValueValid } from '../work-experience/work-check';
import { v4 as uuidv4 } from 'uuid';
import '../style/skill.css';

function SkillCard({ isOpen, onClick }) {
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
  const [optionText, setOptionText] = useState('make a choice');

  const optionMastery = [
    { value: 1, label: 'Novice' },
    { value: 2, label: 'Beginner' },
    { value: 3, label: 'Intermediate' },
    { value: 4, label: 'Advanced' },
    { value: 5, label: 'Master' },
  ];
  const hardOrSoft = [
    { value: '01', label: 'Hard' },
    { value: '02', label: 'Soft' },
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
  const changeTextChoice = (number) => {
    const level = optionMastery.find((option) => option.value === number);
    setOptionText(level.label);
  };
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);
  const handleRating = (value) => {
    setRating(value);
    changeTextChoice(value);
    setValidation((prevState) => ({
      ...prevState,
      level: true,
    }));
  };

  return (
    <div className="card">
      <div
        className={isOpen ? 'header-work' : 'header-close'}
        onClick={onClick}
      >
        <h1 className="card-header">Skills</h1>
        <div className="action">
          <img
            src={isOpen ? down : up}
            alt="open/close"
            className="action-img"
          />
        </div>
      </div>
      <div
        className={`card-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight }}
        ref={contentRef}
      >
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
              <div className="rating-words">
                <p className="rating-skill">{optionText}</p>
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
                {hardOrSoft.map((mastery) => (
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
