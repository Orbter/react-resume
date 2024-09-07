import '../style/profile.css';
import { useState, useRef, useEffect, useContext } from 'react';
import down from '../assets/down.svg';
import up from '../assets/up.svg';
import person from '../assets/person.svg';
import { formatPhoneNumber, isValueValid } from './profile-check';
import { v4 as uuidv4 } from 'uuid';
import { ResumeContext } from '../formProvider';
function ProfileCard({ isOpen, onClick }) {
  const { objSeen } = useContext(ResumeContext);
  const { profileData, setProfileData } = objSeen;

  const [currentProfile, setCurrentProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    picture: '',
  });

  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    picture: false,
  });
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    const updateHeight = () => {
      if (isOpen) {
        setTimeout(() => {
          setMaxHeight(`${contentRef.current.scrollHeight}px`);
        }, 0);
      } else {
        setMaxHeight('0px');
      }
    };
    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, [isOpen]);

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    // Format phone number if necessary
    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value);
    }
    const updatedProfile = { ...currentProfile, [name]: formattedValue };

    setValidation((prevState) => ({
      ...prevState,
      [name]: isValueValid(value, name),
    }));

    setCurrentProfile(updatedProfile);

    setProfileData(updatedProfile);
  };
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = URL.createObjectURL(event.target.files[0]);
      setCurrentProfile((prevState) => ({
        ...prevState,
        picture: image,
      }));
      setValidation((prevState) => ({
        ...prevState,
        picture: true,
      }));
      setProfileData((prevData) => ({
        ...prevData,
        picture: image,
      }));
    }
  };

  const formFields = [
    { label: 'Name', name: 'firstName', type: 'text', example: 'Orbter' },
    { label: 'Last name', name: 'lastName', type: 'text', example: 'Souline' },
    {
      label: 'Email address',
      name: 'email',
      type: 'text',
      example: 'poding147@gmail.com',
    },
  ];
  const personalForms = [
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
    <div className='card'>
      <div
        className={+isOpen ? 'header-personal' : 'header-close'}
        onClick={onClick}
      >
        <h1 className='card-header'>Personal details</h1>
        <div className='action'>
          <img
            src={isOpen ? down : up}
            alt='open/close'
            className='action-img'
          />
        </div>
      </div>

      <div
        className={`card-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight }}
        ref={contentRef}
      >
        <form className='form-personal'>
          <div className='personal-row'>
            <div className='picture-container'>
              <label
                className={
                  'label-personal label-picture' +
                  (validation['picture'] ? ' valid-label' : '')
                }
              >
                add picture
              </label>
              <div className='add-picture'>
                <input
                  type='file'
                  name='image'
                  className='file-input'
                  onChange={handleImageChange}
                ></input>
                <img src={person} alt='profile' />
              </div>
            </div>
            <div className='personal-information-container'>
              {formFields.map((field, index) => (
                <div className='form-group personal-information' key={index}>
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
                    value={currentProfile[field.name]}
                    onChange={handleProfileChange}
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
              <div className='form-group' key={index}>
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
                  value={currentProfile[field.name]}
                  onChange={handleProfileChange}
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
