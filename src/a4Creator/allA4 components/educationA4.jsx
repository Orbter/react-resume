function educationA4({ educationData }) {
  const capitalizeSentence = (str) => {
    return str
      .split(' ')
      .map((word) => word.chartAt(0).toUpperCase() + word.slice(1).join(' '));
  };
  return (
    <>
      {educationData.length !== 0 && (
        <div className='education-list'>
          <div className='headline-container'>
            <h2 className='language-header'>Education</h2>
          </div>
          <div className='under-line'></div>
          <ul className='ul-education'>
            {Array.isArray(educationData) &&
              educationData.map((education, index) => (
                <li key={index} className='education'>
                  <div>
                    <div className='education-date-container'>
                      <div className='education-date'>
                        {education.startDateMonth +
                          ' ' +
                          education.startDateYear}
                        {' - '}
                        {education.endDateMonth + ' ' + education.endDateYear}
                      </div>
                    </div>
                    <div className='education-main-content'>
                      <div className='education-headline-container'>
                        <h3 className='education-headline'>
                          {capitalizeSentence(education.education)}
                        </h3>
                      </div>
                      <div className='subheadline-education-container'>
                        <div className='education-school-container'>
                          <h4 className='education-school'>
                            {education.school}
                          </h4>
                        </div>
                        <div className='education-city-container'>
                          <h4 className='education-city'>
                            {education.school.trim() !== ''
                              ? ', ' + education.city
                              : education.city}
                          </h4>
                        </div>
                      </div>
                      <div className='education-description-container'>
                        <p className='education-description'>
                          {education.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}
