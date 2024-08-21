function educationA4({ educationData }) {
  const capitalizeSentence = (str) => {
    return str
      .split(' ')
      .map((word) => word.chartAt(0).toUpperCase() + word.slice(1).join(' '));
  };
  return (
    <>
      {educationData.length !== 0 && (
        <div className="education-list">
          <div className="headline-container"></div>
        </div>
      )}
    </>
  );
}
