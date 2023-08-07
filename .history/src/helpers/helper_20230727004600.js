const validateEmail = (input) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(input);
};

const validatePassword = (input) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return passwordRegex.test(input);
};

const validatePhone = (input) => {
  const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  return phoneRegex.test(input);
};

const ChangeGenderToNumber = (input) => {
  const result = input == "Other" ? 0 : input == "Male" ? 1 : 2;
  return result;
};

const changeDateToString = (input) => {
  const date = new Date(input);
  const reuslt = formatDateToYYYYMMDD(date);
  return reuslt;
};

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0, nên cộng thêm 1
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function change2Dto1D(arr) {
  if (!arr) return [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {}
  return result;
}

export {
  validateEmail,
  validatePassword,
  validatePhone,
  ChangeGenderToNumber,
  changeDateToString,
};
