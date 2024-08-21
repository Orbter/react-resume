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
import { MiniCardLanguage } from '../miniCards';

function LanguageCard({ isOpen, onClick }) {
  const { objSeen, objNotSeen } = useContext(ResumeContext);
  const { languageData, setLanguageData } = objSeen;

  const [currentLanguage, setCurrentLanguage] = useState({
    language: '',
    index: uuidv4(),
  });

  const [validation, setValidation] = useState({
    language: false,
  });
  const [currentDiv, setCurrentDiv] = useState('largeDiv');

  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);
  const switchDiv = () => {
    setCurrentDiv(currentDiv === 'largeDiv' ? 'miniDiv' : 'largeDiv');
  };
  const handleLanguageChange = (event) => {
    const updateLanguage = { ...currentLanguage, language: event.target.value };
    setCurrentLanguage(updateLanguage);
    setValidation((prevState) => ({
      ...prevState,
      language: true,
    }));
    const isLanguageExist = languageData.find(
      (obj) => obj.index === updateLanguage.index
    );
    if (isLanguageExist) {
      const updateLanguages = languageData.map((language) =>
        language.index === updateLanguage.index
          ? { ...language, language: updateLanguage.language }
          : language
      );
      setLanguageData(updateLanguages);
    } else {
      setLanguageData((prevLanguage) => [
        ...prevLanguage,
        {
          language: updateLanguage.language,
          index: updateLanguage.index,
        },
      ]);
    }
    console.log(languageData);
  };

  const handleAddLanguage = () => {
    if (currentLanguage.language.trim !== '') {
      switchDiv();
      setCurrentLanguage({
        language: '',
        index: uuidv4(),
      });
      setValidation({
        language: false,
      });
    }
  };

  const deleteItem = (deleteLanguage) => {
    const languageExists = languageData.some(
      (language) => language.index === deleteLanguage.index
    );

    if (languageExists) {
      setLanguageData((prevSkills) =>
        prevSkills.filter((language) => language.index !== deleteLanguage.index)
      );
      switchDiv();
      setCurrentLanguage({
        language: '',
        index: uuidv4(), // Reset to a new unique index after deletion
      });
      setValidation({
        language: false,
      });
    }
  };

  return (
    <div className="card">
      <div
        className={isOpen ? 'header-work' : 'header-close'}
        onClick={onClick}
      >
        <h1 className="card-header">Languages</h1>
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
        {currentDiv === 'largeDiv' ? (
          <>
            <form className="form-personal-work">
              <div className="form-group">
                <label
                  htmlFor="language"
                  className={
                    'label-personal' +
                    (validation['language'] ? ' valid-label' : '')
                  }
                >
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  id="language"
                  placeholder="english"
                  value={currentLanguage.language}
                  onChange={handleLanguageChange}
                  className={
                    'input-personal' +
                    (validation['language'] ? ' valid-input' : '')
                  }
                />
              </div>
            </form>

            <div className="done-delete-container">
              <div className="all-options">
                <div
                  className="delete-container"
                  onClick={() => deleteItem(currentLanguage)}
                >
                  <img src={deleteThis} alt="delete" className="delete-img" />
                </div>
                <button className="done-button" onClick={handleAddLanguage}>
                  <img src={ok} alt="vi" className="check" />
                  Done
                </button>
              </div>
            </div>
          </>
        ) : (
          <MiniCardLanguage
            languageData={languageData}
            setCurrentDiv={setCurrentDiv}
            setCurrentLanguage={setCurrentLanguage}
          />
        )}
      </div>
    </div>
  );
}

LanguageCard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LanguageCard;
