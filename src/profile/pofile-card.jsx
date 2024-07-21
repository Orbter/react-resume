import '../style/profile.css';
import { useState, useRef, useEffect } from 'react';
import down from '../assets/down.svg';
import up from '../assets/up.svg';
import person from '../assets/person.svg';
import { formatPhoneNumber, isValueValid } from './profile-check';
import { v4 as uuidv4 } from 'uuid';

function ProfileCard({ isOpen, onClick }) {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [validation, setValidation] = useState({
    name: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
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

    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value);
      
      setValidation((prevState) => ({
        ...prevState,
        phone: isValueValid(value, 'phone'),
      }));
    }

    if (name === 'email') {
      setValidation((prevState) => ({
        ...prevState,
        email: isValueValid(value, 'email'),
      }));
    }
    if (name === 'name') {
      setValidation((prevState) => ({
        ...prevState,
        name: isValueValid(value, 'firstName'),
      }));
    }
    if (name === 'lastName') {
      setValidation((prevState) => ({
        ...prevState,
        lastName: isValueValid(value, 'lastName'),
      }));
    }
    if (name === 'address') {
      setValidation((prevState) => ({
        ...prevState,
        address: isValueValid(value, 'address'),
      }));
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const formFields = [
    { label: 'Name', name: 'name', type: 'text', example: 'Orbter' },
    { label: 'Last name', name: 'lastName', type: 'text', example: 'Souline' },
    {
      label: 'Email address',
      name: 'email',
      type: 'text',
      example: 'poding147@gmail.com',
    },

  ];
const personalForms = [    {
  label: 'Phone number',
  name: 'phone',
  type: 'tel',
  example: '053-957-4388',
},
{
  label: 'Address',
  name: 'address',
  type: 'text',
  example: 'Tel aviv, vaitsman 18',
},]
  return (
    <div className="card">
      <div
        className={+isOpen ? 'header-personal' : 'header-close'}
        onClick={onClick}
      >
        <h1 className="card-header">Personal details</h1>
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
        <form className="form-personal">
          <div className='personal-row'>
          <div className="picture-container">
            <label className="label-personal label-picture">add picture</label>
            <div className="add-picture">
              <img src={person} alt="profile" />
            </div>
          </div> 
          <div className='personal-information-container'>
          {formFields.map((field, index) => (
            <div className="form-group personal-information" key={index}>
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
          </div>
          </div>
          <div className='general-information'>
          {personalForms.map((field, index) => (
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
