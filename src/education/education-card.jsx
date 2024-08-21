import { useState, useRef, useEffect, useContext } from 'react';
import down from '../assets/down.svg';
import up from '../assets/up.svg';
import deleteThis from '../assets/delete.svg';
import ok from '../assets/ok.svg';
import { isValueValid, generateYearOptions } from './education-check';
import '../style/education.css';
import { MiniCardEducation } from '../miniCards';
import { ResumeContext } from '../formProvider';
import { v4 as uuidv4 } from 'uuid';

function EducationCard({ isOpen, onClick }) {
  const { objSeen, objNotSeen } = useContext(ResumeContext);

  const { educationData, setEducationData } = objSeen;

  const [currentEducation, setCurrentEducation] = useState({
    education: '',
    school: '',
    city: '',
    startDateMonth: '',
    startDateYear: '',
    endDateMonth: '',
    endDateYear: '',
    description: '',
    index: uuidv4(),
  });
  const [currentDiv, setCurrentDiv] = useState('largeDiv');
  const [validation, setValidation] = useState({
    education: false,
    school: false,
    city: false,
    startDateMonth: false,
    startDateYear: false,
    endDateMonth: false,
    endDateYear: false,
    description: false,
  });
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const switchDiv = () => {
    setCurrentDiv(currentDiv === 'largeDiv' ? 'miniDiv' : 'largeDiv');
  };
  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  const handleEducationChange = (event) => {
    const { name, value, index } = event.target;
    const updateEducation = { ...currentEducation, [name]: event.target.value };

    setValidation((prevState) => ({
      ...prevState,
      [name]: isValueValid(value),
    }));
    setCurrentEducation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    const isEducationExist = educationData.some(
      (obj) => obj.index === currentEducation.index
    );

    if (isEducationExist) {
      const updateEducations = educationData.map((education) =>
        education.index === index ? { ...education, [name]: value } : education
      );
      setEducationData(updateEducations);
    } else {
      setEducationData((prevState) => [
        ...prevState,
        {
          education: updateEducation.education,
          school: updateEducation.school,
          city: updateEducation.city,
          startDateMonth: updateEducation.startDateMonth,
          startDateYear: updateEducation.startDateYear,
          endDateMonth: updateEducation.endDateMonth,
          endDateYear: updateEducation.endDateYear,
          description: updateEducation.description,
          index: updateEducation.index,
        },
      ]);
    }
  };

  const handleAddEduction = () => {
    if (
      currentEducation.education.trim !== '' &&
      currentEducation.school.trim !== '' &&
      currentEducation.city.trim !== ''
    ) {
      switchDiv();
      setCurrentEducation({
        education: '',
        school: '',
        city: '',
        startDateMonth: '',
        startDateYear: '',
        endDateMonth: '',
        endDateYear: '',
        description: '',
        index: uuidv4(),
      });
      setValidation({
        education: false,
        school: false,
        city: false,
        startDateMonth: false,
        startDateYear: false,
        endDateMonth: false,
        endDateYear: false,
        description: false,
      });
    }
  };

  const formFields = [
    {
      label: 'Education',
      name: 'education',
      type: 'text',
      example: "Bachelor's Degree in Computer Science",
    },
    {
      label: 'School',
      name: 'school',
      type: 'text',
      example: 'Harvard',
    },
    {
      label: 'City',
      name: 'city',
      type: 'text',
      example: 'Tel Aviv',
    },
  ];

  const dateFields = [
    [
      {
        label: 'Start date',
        name: 'startDateMonth',
        type: 'select',
        options: [
          { value: '01', label: 'January' },
          { value: '02', label: 'February' },
          { value: '03', label: 'March' },
          { value: '04', label: 'April' },
          { value: '05', label: 'May' },
          { value: '06', label: 'June' },
          { value: '07', label: 'July' },
          { value: '08', label: 'August' },
          { value: '09', label: 'September' },
          { value: '10', label: 'October' },
          { value: '11', label: 'November' },
          { value: '12', label: 'December' },
        ],
        example: 'april',
      },
      {
        name: 'startDateYear',
        type: 'select',
        options: generateYearOptions(1950, new Date().getFullYear()),
        example: '2020',
      },
    ],
    [
      {
        label: 'End date',
        name: 'endDateMonth',
        type: 'select',
        options: [
          { value: '01', label: 'January' },
          { value: '02', label: 'February' },
          { value: '03', label: 'March' },
          { value: '04', label: 'April' },
          { value: '05', label: 'May' },
          { value: '06', label: 'June' },
          { value: '07', label: 'July' },
          { value: '08', label: 'August' },
          { value: '09', label: 'September' },
          { value: '10', label: 'October' },
          { value: '11', label: 'November' },
          { value: '12', label: 'December' },
        ],
        example: 'june',
      },
      {
        name: 'endDateYear',
        type: 'select',
        options: generateYearOptions(1950, new Date().getFullYear()),
        example: '2024',
      },
    ],
  ];

  return (
    <div className="card">
      <div
        className={+isOpen ? 'header-work' : 'header-close'}
        onClick={onClick}
      >
        <h1 className="card-header">Education</h1>
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
              {formFields.map((field, index) => (
                <div className="form-group" key={index}>
                  <label
                    htmlFor={field.name}
                    className={
                      'label-personal' +
                      (validation[field.name] ? ' valid-label' : '')
                    }
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    placeholder={field.example}
                    value={currentEducation[field.name]}
                    onChange={handleEducationChange}
                    className={
                      'input-personal' +
                      (validation[field.name] ? ' valid-input' : '')
                    }
                  />
                </div>
              ))}
            </form>
            <form className="form-personal-work-date">
              {dateFields.map((fieldGroup, index) => (
                <div className="date-group" key={index}>
                  {fieldGroup.map((dateFieldItem, subIndex) => (
                    <div className="form-group-work" key={subIndex}>
                      {dateFieldItem.label && (
                        <label
                          htmlFor={dateFieldItem.name}
                          className={
                            'label-personal' +
                            (validation[dateFieldItem.name]
                              ? ' valid-label'
                              : '')
                          }
                        >
                          {dateFieldItem.label}
                        </label>
                      )}
                      <select
                        name={dateFieldItem.name}
                        id={dateFieldItem.name + '-work'}
                        value={currentEducation[dateFieldItem.name]}
                        onChange={handleEducationChange}
                        className={
                          validation[dateFieldItem.name]
                            ? ' valid-input input-personal-work'
                            : 'input-personal-work border'
                        }
                      >
                        {dateFieldItem.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              ))}
            </form>

            <form className="form-personal-work description-container">
              <div className="form-group">
                <label
                  htmlFor="description"
                  className={
                    'label-personal' +
                    (validation['description'] ? ' valid-label' : '')
                  }
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description-work"
                  placeholder=""
                  value={currentEducation['description']}
                  onChange={handleEducationChange}
                  className={
                    'input-personal' +
                    (validation['description'] ? ' valid-input' : '')
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
          </>
        ) : (
          <MiniCardEducation
            educationData={educationData}
            setCurrentDiv={setCurrentDiv}
            setCurrentEducation={setCurrentEducation}
          />
        )}
      </div>
    </div>
  );
}

export default EducationCard;
