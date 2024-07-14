import { useState } from 'react';
import down from '../assets/down.svg';
import deleteThis from '../assets/delete.svg';
import ok from '../assets/ok.svg';
import { isValueValid } from '../work-experience/work-check';
import { v4 as uuidv4 } from 'uuid';
import '../style/skill.css';

function LanguageCard() {
  const [formData, setFormData] = useState({
    language: '',
  });
  const [validation, setValidation] = useState({
    language: false,
  });

  const handleChange = (event) => {
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
    <div className="card card-resize">
      <div className="header-work">
        <h1 className="card-header">Language</h1>
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
export default LanguageCard;
