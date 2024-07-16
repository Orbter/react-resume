import { useState } from 'react';
import down from '../assets/down.svg';
import up from '../assets/up.svg';

import { isValueValid, generateYearOptions } from './education-check';
import '../style/education.css';

function EducationCard({ isOpen, onClick }) {
  const [formData, setFormData] = useState({
    education: '',
    school: '',
    city: '',
    startDateMonth: '',
    startDateYear: '',
    endDateMonth: '',
    endDateYear: '',
    description: '',
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Changing ${name} to ${value}`);
    setValidation((prevState) => ({
      ...prevState,
      [name]: isValueValid(value),
    }));
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
      {isOpen && (
        <div className="card-content">
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
                  value={formData[field.name]}
                  onChange={handleChange}
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
                          (validation[dateFieldItem.name] ? ' valid-label' : '')
                        }
                      >
                        {dateFieldItem.label}
                      </label>
                    )}
                    <select
                      name={dateFieldItem.name}
                      id={dateFieldItem.name + '-work'}
                      value={formData[dateFieldItem.name]}
                      onChange={handleChange}
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
                value={formData['description']}
                onChange={handleChange}
                className={
                  'input-personal' +
                  (validation['description'] ? ' valid-input' : '')
                }
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EducationCard;
