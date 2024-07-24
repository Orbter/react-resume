import { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const FormProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [workData, setWorkData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [languageData, setLanguageData] = useState([]);

  const [workDataCopy, setWorkDataCopy] = useState([]);
  const [educationDataCopy, setEducationDataCopy] = useState([]);
  const [skillDataCopy, setSkillDataCopy] = useState([]);
  const [languageDataCopy, setLanguageDataCopy] = useState([]);

  const objSeen = {
    profileData,
    setProfileData,
    workData,
    setWorkData,
    educationData,
    setEducationData,
    skillData,
    setSkillData,
    languageData,
    setLanguageData,
  };
  const objNotSeen = {
    workDataCopy,
    setWorkDataCopy,
    educationDataCopy,
    setEducationDataCopy,
    skillDataCopy,
    setSkillDataCopy,
    languageDataCopy,
    setLanguageDataCopy,
  };

  return (
    <ResumeContext.Provider value={{ objSeen, objNotSeen }}>
      {children}
    </ResumeContext.Provider>
  );
};
