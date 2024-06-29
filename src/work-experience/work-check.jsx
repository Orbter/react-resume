function isValueValid(value) {
  return value.length > 0;
}
function generateYearOptions(startYear, endYear) {
  let years = [];
  for (let year = startYear; year < endYear; year++) {
    years.push({ value: year.toString(), label: year.toString() });
  }
}

export { isValueValid, generateYearOptions };
