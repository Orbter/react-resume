import '../../style/allA4/educationA4.css';

function EducationA4({ educationData }) {
  const capitalizeSentence = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  const months = [
    { value: '01', label: 'Jan' },
    { value: '02', label: 'Feb' },
    { value: '03', label: 'Mar' },
    { value: '04', label: 'Apr' },
    { value: '05', label: 'May' },
    { value: '06', label: 'Jun' },
    { value: '07', label: 'Jul' },
    { value: '08', label: 'Aug' },
    { value: '09', label: 'Sep' },
    { value: '10', label: 'Oct' },
    { value: '11', label: 'Nov' },
    { value: '12', label: 'Dec' },
  ];
  const numberToMonths = (number) => {
    const result = months.find((month) => month.value === number)?.label;

    return result !== undefined ? result : '';
  };
  return (
    <>
      {educationData.length !== 0 && (
        <div className="education-list">
          <div className="headline-container">Education</div>
          <div className="under-line"></div>
          <ul className="ul-education">
            {Array.isArray(educationData) &&
              educationData.map((education, index) => (
                <li key={index} className="education">
                  <div className="flex-education">
                    <div className="education-date-container">
                      <div className="education-date">
                        {numberToMonths(education.startDateMonth) +
                          ' ' +
                          education.startDateYear}
                        {(education.startDateMonth ||
                          education.startDateYear) &&
                        (education.endDateMonth || education.endDateYear)
                          ? ' - '
                          : ''}
                        {numberToMonths(education.endDateMonth) +
                          ' ' +
                          education.endDateYear}
                      </div>
                    </div>
                    <div className="education-main-content">
                      <div className="education-headline-container">
                        <h3 className="education-headline">
                          {capitalizeSentence(education.education)}
                          {console.log(education)}
                        </h3>
                      </div>
                      <div className="subheadline-education-container">
                        <div className="education-school-container">
                          <h4 className="education-school">
                            {education.school}
                          </h4>
                        </div>
                        <div className="education-city-container">
                          <h4 className="education-city">
                            {education.school.trim() !== ''
                              ? ', ' + education.city
                              : education.city}
                          </h4>
                        </div>
                      </div>
                      <div className="education-description-container">
                        <p className="education-description">
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

export { EducationA4 };
