function ValidatePassword(data) {
  if (data.length < 8)
    return { value: false, msg: "Password must be greater than 8!" };
  return { value: true };
}
function ValidateEmail(data) {
  if (!/.+@.+\.[A-Za-z]+$/.test(data))
    return { value: true, msg: "Invalid Email!" };
  return { value: false };
}
function isEmpty(data) {
  return data === "";
}
module.exports = { ValidatePassword, isEmpty, ValidateEmail };
