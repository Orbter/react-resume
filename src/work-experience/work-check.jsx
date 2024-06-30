function isValueValid(value) {
  return value.length > 0;
}
function generateYearOptions(startYear, endYear) {
  let years = [];
  for (let year = startYear; year < endYear + 1; year++) {
    years.push({ value: year.toString(), label: year.toString() });
  }
  return years;
}

export { isValueValid, generateYearOptions };
