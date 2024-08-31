/* eslint-disable react/prop-types */
import '../../style/allA4/profileA4.css';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import home from '../../assets/home.svg';
function ProfileA4({ profileData }) {
  return (
    <>
      {profileData.length !== 0 && (
        <div className='profile-list'>
          <div className='photo-container'>
            <img src={profileData.picture} alt='your-photo' />
          </div>
          <div className='main-content'>
            <div className='headline-container'>
              <h1 className='first-name'>
                {profileData.firstName} {profileData.lastName}
              </h1>
            </div>
            <div className='main-text-container'>
              <div className='phone-number-container'>
                {profileData.phone !== '' && (
                  <img
                    src={phone}
                    alt='home-photo'
                    className='mini-photo-profile'
                  />
                )}
                <h4 className='phone-number profile-text'>
                  {profileData.phone}
                </h4>
              </div>
              <div className='email-container'>
                {profileData.email !== '' && (
                  <img
                    src={mail}
                    alt='mail-picture'
                    className='mini-photo-profile'
                  />
                )}
                <h4 className='email profile-text'>{profileData.email}</h4>
              </div>
              <div className='home-container'>
                {profileData.address !== '' && (
                  <img
                    src={home}
                    alt='home-photo'
                    className='mini-photo-profile'
                  />
                )}
                <h4 className='home profile-text'>{profileData.address}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { ProfileA4 };
