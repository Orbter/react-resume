const formatPhoneNumber = (value) => {
  const phoneNumber = value.replace(/\D/g, ''); // Remove non-numeric characters
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength <= 3) return phoneNumber;
  if (phoneNumberLength <= 6) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
  }
  if (phoneNumberLength <= 10) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6)}`;
  }
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

function isValueValid(value, type) {
  if (type === 'email') {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{3,4}$/;
    return pattern.test(value);
  }
  if (type === 'phone') {
    const phoneNumber = value.replace(/\D/g, ''); // Remove non-numeric characters
    return phoneNumber.length === 10;
  }
  if (type === 'firstName' || type === 'lastName' || type === 'address') {
    return value.length > 0;
  }

  return false;
}
export { formatPhoneNumber, isValueValid };
