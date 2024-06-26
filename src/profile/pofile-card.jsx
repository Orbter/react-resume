import '../style/profile.css';
import { useState } from 'react';
import down from '../assets/down.svg';
import person from '../assets/person.svg';
import { formatPhoneNumber, isValueValid } from './profile-check';

function ProfileCard() {
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
    {
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
    },
  ];

  return (
    <div className="card">
      <div className="header-personal">
        <h1 className="card-header">Personal details</h1>
        <div className="action">
          <img src={down} alt="open/close" className="action-img" />
        </div>
      </div>
      <div className="card-content">
        <form className="form-personal">
          <div className="add-picture">
            <img src={person} alt="profile" />
          </div>

          {formFields.map((field) => (
            <div className="form-group" key={field.name}>
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
      </div>
    </div>
  );
}

export default ProfileCard;
