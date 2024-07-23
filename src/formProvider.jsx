import { createContext, useState } from 'react';

export const ProfileContext = createContext();
export const WorkContext = createContext();
export const EducationContext = createContext();
export const SkillContext = createContext();
export const LanguageContext = createContext();

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

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <WorkContext.Provider value={{ workData, setWorkData }}>
        <EducationContext.Provider value={{ educationData, setEducationData }}>
          <SkillContext.Provider value={{ skillData, setSkillData }}>
            <LanguageContext.Provider value={{ languageData, setLanguageData }}>
              {children}
            </LanguageContext.Provider>
          </SkillContext.Provider>
        </EducationContext.Provider>
      </WorkContext.Provider>
    </ProfileContext.Provider>
  );
};
