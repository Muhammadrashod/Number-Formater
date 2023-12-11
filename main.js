function isUzbekPhoneNumber(phoneNumber) {
  const pattern = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
  return pattern.test(phoneNumber);
}

function formatPhoneNumber(phoneNumber) {
  const pattern = /^(\+\d{3}) \((\d{2})\) (\d{3}-\d{2}-\d{2})$/;
  const match = phoneNumber.match(pattern);

  if (match) {
    return `${match[1]} (${match[2]}) ${match[3]}`;
  } else {
    return null;
  }
}

function formatPhoneNumberInput(input) {
  let value = input.value.replace(/\D/g, ""); 
  if (value.length > 2) {
    value = `+${value.substring(0, 3)} (${value.substring(
      3,
      5
    )}) ${value.substring(5, 8)}-${value.substring(
      8,
      10
    )}-${value.substring(10, 12)}`;
  }
  input.value = value;
}

function checkPhoneNumber() {
  const inputElement = document.getElementById("phoneNumber");
  const resultElement = document.getElementById("result");

  const phoneNumber = inputElement.value;

  if (isUzbekPhoneNumber(phoneNumber)) {
    const formattedNumber = formatPhoneNumber(phoneNumber);
    resultElement.textContent = `Введенный номер: ${formattedNumber} - это узбекский номер.`;
  } else {
    resultElement.textContent = "Это не узбекский номер телефона.";
  }
}

function removeData() {
  const inputElement = document.getElementById("phoneNumber");
  const resultElement = document.getElementById("result");

  inputElement.value = ""; 
  resultElement.textContent = ""; 
}