import './style/profile.css';
import React, { useState } from 'react';

function ProfileCard() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const formFields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Last name', name: 'lastName', type: 'text' },
    { label: 'Email address', name: 'email', type: 'text' },
    { label: 'Phone number', name: 'phone', type: 'number' },
    { label: 'Address', name: 'Address', type: 'text' },
  ];

  return (
    <div className="card">
      <h1 className="card-header">Personal details</h1>
      <div className="card-content">
        <div className="add-picture"></div>
        <form>
          {formFields.map((field) => (
            <div className="form-group" key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={field.name}
                onChange={handleChange}
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
