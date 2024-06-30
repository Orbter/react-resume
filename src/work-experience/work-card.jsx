import { useState } from 'react';
import down from '../assets/down.svg';
import { isValueValid, generateYearOptions } from './work-check';
import { v4 as uuidv4 } from 'uuid';
import '../style/work.css';

function WorkCard() {
  const [formData, setFormData] = useState({
    position: '',
    workingPlace: '',
    city: '',
    startDateMonth: '',
    startDateYear: '',
    endDateMonth: '',
    endDateYear: '',
    description: '',
  });
  const [validation, setValidation] = useState({
    position: false,
    workingPlace: false,
    city: false,
    startDateMonth: false,
    startDateYear: false,
    endDateMonth: false,
    endDateYear: false,
    description: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    if (name === 'position') {
      setValidation((prevState) => ({
        ...prevState,
        position: isValueValid(value, 'position'),
      }));
    }

    if (name === 'workingPlace') {
      setValidation((prevState) => ({
        ...prevState,
        workingPlace: isValueValid(value, 'workingPlace'),
      }));
    }
    if (name === 'city') {
      setValidation((prevState) => ({
        ...prevState,
        city: isValueValid(value, 'city'),
      }));
    }
    if (name === 'startDateMonth') {
      setValidation((prevState) => ({
        ...prevState,
        startDateMonth: isValueValid(value, 'startDateMonth'),
      }));
    }
    if (name === 'startDateYear') {
      setValidation((prevState) => ({
        ...prevState,
        startDateYear: isValueValid(value, 'startDateYear'),
      }));
    }
    if (name === 'endDateMonth') {
      setValidation((prevState) => ({
        ...prevState,
        endDateMonth: isValueValid(value, 'endDateMonth'),
      }));
    }
    if (name === 'endDateYear') {
      setValidation((prevState) => ({
        ...prevState,
        endDateYear: isValueValid(value, 'endDateYear'),
      }));
    }
    if (name === 'description') {
      setValidation((prevState) => ({
        ...prevState,
        description: isValueValid(value, 'description'),
      }));
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const formFields = [
    {
      label: 'Position',
      name: 'position',
      type: 'text',
      example: 'software engineer',
    },
    {
      label: 'Working place',
      name: 'workingPlace',
      type: 'text',
      example: 'software engineer',
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
      <div className="header-work">
        <h1 className="card-header">Work Experience</h1>
        <div className="action">
          <img src={down} alt="open/close" className="action-img" />
        </div>
      </div>
      <div className="card-content">
        <form className="form-personal-work">
          {formFields.map((field) => (
            <div className="form-group" key={uuidv4()}>
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
          {dateFields.map((fieldGroup) => (
            <div className="date-group" key={uuidv4()}>
              {fieldGroup.map((dateFieldItem) => (
                <div className="form-group-work" key={uuidv4()}>
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
                      'input-personal-work' +
                      (validation[dateFieldItem.name] ? ' valid-input' : '')
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

        <form className="form-personal-work">
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
    </div>
  );
}

export default WorkCard;
