import '../../style/allA4/languageA4.css';

function LanguageA4({ languageData }) {
  const capitalizeFirstLetter = (string) => {
    return string.language.charAt(0).toUpperCase() + string.language.slice(1);
  };
  return (
    <>
      {languageData.length !== 0 && (
        <div className="language-list">
          <div className="headline-container">
            <h2>Language</h2>
          </div>
          <div className="under-line"></div>
          <ul>
            {Array.isArray(languageData) &&
              languageData.map((language, index) => (
                <li key={index}>{capitalizeFirstLetter(language)}</li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default LanguageA4;
//length
