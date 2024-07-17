import { useState, useRef, useEffect } from 'react';
import down from '../assets/down.svg';
import up from '../assets/up.svg';
import deleteThis from '../assets/delete.svg';
import ok from '../assets/ok.svg';
import { isValueValid, generateYearOptions } from './work-check';
import { v4 as uuidv4 } from 'uuid';
import '../style/work.css';

function WorkCard({ isOpen, onClick }) {
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
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    setValidation((prevState) => ({
      ...prevState,
      [name]: isValueValid(value),
    }));

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
      <div
        className={+isOpen ? 'header-work' : 'header-close'}
        onClick={onClick}
      >
        <h1 className="card-header">Work Experience</h1>
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

export default WorkCard;
