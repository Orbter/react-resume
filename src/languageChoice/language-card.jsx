import { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import down from '../assets/down.svg';
import up from '../assets/up.svg';
import deleteThis from '../assets/delete.svg';
import ok from '../assets/ok.svg';
import { isValueValid } from '../work-experience/work-check';
import { v4 as uuidv4 } from 'uuid';
import '../style/skill.css';
import { ResumeContext } from '../formProvider';

function LanguageCard({ isOpen, onClick }) {
  const { objSeen, objNotSeen } = useContext(ResumeContext);
  const { skillData, setSkillData } = objSeen;

  const [currentLanguage, setCurrentLanguage] = useState({
    language: '',
    index: uuidv4(), // Use uuid to generate a unique identifier for each skill
  });
  const [newLanguage, setNewLanguage] = useState('');

  const [formData, setFormData] = useState({
    language: '',
  });
  const [validation, setValidation] = useState({
    language: false,
  });

  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  const handleLanguageChange = (event) => {
    const updateLanguage = { ...currentLanguage, language: value };
    setCurrentLanguage(updateLanguage);

    const { name, value } = event.target;
    setValidation((prevState) => ({
      ...prevState,
      [name]: isValueValid(value),
    }));

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='card'>
      <div
        className={isOpen ? 'header-work' : 'header-close'}
        onClick={onClick}
      >
        <h1 className='card-header'>Languages</h1>
        <div className='action'>
          <img
            src={isOpen ? down : up}
            alt='open/close'
            className='action-img'
          />
        </div>
      </div>
      <div
        className={`card-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight }}
        ref={contentRef}
      >
        <form className='form-personal-work'>
          <div className='form-group'>
            <label
              htmlFor='skill'
              className={
                'label-personal' + (validation['skill'] ? ' valid-label' : '')
              }
            >
              Language
            </label>
            <input
              type='text'
              name='skill'
              id='skill'
              placeholder='english'
              value={formData['skill']}
              onChange={handleLanguageChange}
              className={
                'input-personal' + (validation['skill'] ? ' valid-input' : '')
              }
            />
          </div>
        </form>

        <div className='done-delete-container'>
          <div className='all-options'>
            <div className='delete-container'>
              <img src={deleteThis} alt='delete' className='delete-img' />
            </div>
            <button className='done-button'>
              <img src={ok} alt='vi' className='check' />
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

LanguageCard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LanguageCard;
