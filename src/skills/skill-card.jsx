import { useState, useRef, useEffect, useContext } from 'react';
import down from '../assets/down.svg';
import up from '../assets/up.svg';
import deleteThis from '../assets/delete.svg';
import ok from '../assets/ok.svg';
import { v4 as uuidv4 } from 'uuid';
import '../style/skill.css';
import { ResumeContext } from '../formProvider';
import { MiniCardSkill } from '../miniCards';

function SkillCard({ isOpen, onClick }) {
  const { objSeen, objNotSeen } = useContext(ResumeContext);
  const { skillData, setSkillData } = objSeen;
  const { skillDataCopy, setSkillDataCopy } = objNotSeen;

  const [currentSkill, setCurrentSkill] = useState({
    skill: '',
    level: 0,
    type: 'Hard',
    index: uuidv4(), // Use uuid to generate a unique identifier for each skill
  });

  const [newSkill, setNewSkill] = useState('');
  const [level, setLevel] = useState(0);
  const [type, setType] = useState('Hard');
  const [currentDiv, setCurrentDiv] = useState('largeDiv');

  const [validation, setValidation] = useState({
    skill: false,
    level: false,
    skillMastery: false,
  });

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

  const handleSkillChange = (event) => {
    const updateSkill = { ...currentSkill, skill: event.target.value };
    setCurrentSkill(updateSkill);
    setValidation((prevState) => ({
      ...prevState,
      skill: true,
    }));
    setNewSkill(updateSkill.skill);

    const skillExists = skillData.find(
      (obj) => obj.index === updateSkill.index
    );

    if (skillExists) {
      const updatedSkills = skillData.map((skill) =>
        skill.index === updateSkill.index
          ? { ...skill, skill: updateSkill.skill }
          : skill
      );
      setSkillData(updatedSkills);
    } else {
      setSkillData((prevSkills) => [
        ...prevSkills,
        {
          skill: updateSkill.skill,
          level: updateSkill.level,
          type: updateSkill.type,
          index: updateSkill.index, // Use the same index generated initially
        },
      ]);
    }
  };

  const handleLevelChange = (value) => {
    const updateSkill = { ...currentSkill, level: value };
    changeTextChoice(value);
    setCurrentSkill(updateSkill);
    setValidation((prevState) => ({
      ...prevState,
      level: true,
    }));
    setLevel(updateSkill.level);

    const skillExists = skillData.find(
      (obj) => obj.index === updateSkill.index
    );

    if (skillExists) {
      const updatedSkills = skillData.map((skill) =>
        skill.index === updateSkill.index
          ? { ...skill, level: updateSkill.level }
          : skill
      );
      setSkillData(updatedSkills);
    } else {
      setSkillData((prevSkills) => [
        ...prevSkills,
        {
          skill: updateSkill.skill,
          level: updateSkill.level,
          type: updateSkill.type,
          index: updateSkill.index,
        },
      ]);
    }
  };

  const handleTypeChange = (event) => {
    const updateSkill = { ...currentSkill, type: event.target.value };
    setCurrentSkill(updateSkill);

    setValidation((prevState) => ({
      ...prevState,
      type: true,
    }));
    setType(updateSkill.type);

    const skillExists = skillData.find(
      (obj) => obj.index === updateSkill.index
    );

    if (skillExists) {
      const updatedSkills = skillData.map((skill) =>
        skill.index === updateSkill.index
          ? { ...skill, type: updateSkill.type }
          : skill
      );
      setSkillData(updatedSkills);
    } else {
      setSkillData((prevSkills) => [
        ...prevSkills,
        {
          skill: updateSkill.skill,
          level: updateSkill.level,
          type: updateSkill.type,
          index: updateSkill.index,
        },
      ]);
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '' && currentSkill.level !== 0) {
      setSkillDataCopy((prevSkills) => [
        ...prevSkills,
        { skill: newSkill, level, type, index: uuidv4() }, // New skill gets a unique ID
      ]);
      switchDiv();
      setCurrentSkill({
        skill: '',
        level: 0,
        type: 'Hard',
        index: uuidv4(), // Reset to a new unique index
      });
      setValidation({
        skill: false,
        level: false,
        skillMastery: false,
      });
    }
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

  const switchDiv = () => {
    setCurrentDiv(currentDiv === 'largeDiv' ? 'miniDiv' : 'largeDiv');
  };

  const deleteItem = (deleteSkill) => {
    const skillExists = skillData.some(
      (skill) => skill.index === deleteSkill.index
    );

    if (skillExists) {
      setSkillData((prevSkills) =>
        prevSkills.filter((skill) => skill.index !== deleteSkill.index)
      );
      switchDiv();
      setCurrentSkill({
        skill: '',
        level: 0,
        type: 'Hard',
        index: uuidv4(), // Reset to a new unique index after deletion
      });
      setValidation({
        skill: false,
        level: false,
        skillMastery: false,
      });
    }
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
        {currentDiv === 'largeDiv' ? (
          <>
            <form className="form-personal-work">
              <div className="form-group">
                <label
                  htmlFor="skill"
                  className={
                    'label-personal' +
                    (validation['skill'] ? ' valid-label' : '')
                  }
                >
                  Skill
                </label>
                <input
                  type="text"
                  name="skill"
                  id="skill"
                  placeholder="fastest runner"
                  value={currentSkill.skill}
                  onChange={handleSkillChange}
                  className={
                    'input-personal' +
                    (validation['skill'] ? ' valid-input' : '')
                  }
                />
              </div>
              <div className="row">
                <div className="level-container">
                  <label
                    htmlFor="level"
                    className={
                      'label-personal' +
                      (validation['level'] ? ' valid-label' : '')
                    }
                  >
                    Level
                  </label>
                  <div className="circle-row">
                    <div className="circle-rating">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <div
                          className={
                            'circle' +
                            (index <= currentSkill.level ? ' active' : '')
                          }
                          id={'circle' + index}
                          key={index}
                          onClick={() => handleLevelChange(index)}
                        ></div>
                      ))}
                    </div>
                    <div className="rating-words">
                      <p className="rating-skill">{optionText}</p>
                    </div>
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
                    value={currentSkill.type}
                    onChange={handleTypeChange}
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
              <div
                className="delete-container"
                onClick={() => deleteItem(currentSkill)}
              >
                <img src={deleteThis} alt="delete" className="delete-img" />
              </div>
              <button className="done-button" onClick={handleAddSkill}>
                <img src={ok} alt="vi" className="check" />
                Done
              </button>
            </div>
          </>
        ) : (
          <MiniCardSkill
            skillData={skillData}
            setCurrentDiv={setCurrentDiv}
            setCurrentSkill={setCurrentSkill}
          />
        )}
      </div>
    </div>
  );
}

export default SkillCard;
