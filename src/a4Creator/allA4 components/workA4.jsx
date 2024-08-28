function WorkA4({ workData }) {
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
      {workData.length !== 0 && (
        <div className="work-list">
          <div className="headline-container">Work</div>
          <div className="under-line"></div>
          <ul className="ul-work">
            {Array.isArray(workData) &&
              workData.map((work, index) => (
                <li key={index} className="work">
                  <div className="flex-work">
                    <div className="work-date-container">
                      <div className="work-date">
                        {numberToMonths(work.startDateMonth) +
                          ' ' +
                          work.startDateYear}
                        {(work.startDateMonth || work.startDateYear) &&
                        (work.endDateMonth || work.endDateYear)
                          ? ' - '
                          : ''}
                        {numberToMonths(work.endDateMonth) +
                          ' ' +
                          work.endDateYear}
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
