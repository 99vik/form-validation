const form = document.querySelector('form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipcode = document.querySelector('#zipcode');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');

function addValidClass(inputElement) {
  inputElement.classList.remove('invalid');
  inputElement.classList.add('valid');
}

function addInvalidClass(inputElement) {
  inputElement.classList.remove('valid');
  inputElement.classList.add('invalid');
}

function checkEmail() {
  const error = email.nextElementSibling;
  const emailValue = email.value;
  error.innerHTML = '';

  if (emailValue === '') {
    addInvalidClass(email);
    error.innerHTML = 'Field can not be empty.';
  } else if (
    !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(emailValue)
  ) {
    addInvalidClass(email);
    error.innerHTML = 'Please enter valid email adress.';
  } else {
    addValidClass(email);
    error.innerHTML = '';
  }
}

function checkCountry() {
  const error = country.nextElementSibling;
  const countryValue = country.value;
  error.innerHTML = '';

  if (countryValue === '') {
    addInvalidClass(country);
    error.innerHTML = 'Field can not be empty.';
  } else {
    addValidClass(country);
    error.innerHTML = '';
  }
}

function checkZipcode() {
  const error = zipcode.nextElementSibling;
  const zipcodeValue = zipcode.value;
  error.innerHTML = '';

  if (zipcodeValue === '') {
    addInvalidClass(zipcode);
    error.innerHTML = 'Field can not be empty.';
  } else if (!(/^\d{5}$/).test(zipcodeValue)) {
    addInvalidClass(zipcode);
    error.innerHTML = 'Please enter valid Zip Code.';
  } else {
    addValidClass(zipcode);
    error.innerHTML = '';
  }
}

function checkPassword() {
  const error = password.nextElementSibling;
  const passwordValue = password.value;
  error.innerHTML = '';

  if (passwordValue === '') {
    addInvalidClass(password);
    error.innerHTML = 'Field can not be empty.';
  } else if (passwordValue.length < 8) {
    addInvalidClass(password);
    error.innerHTML = 'Password must be at least 8 characters long.';
  } else if (!(/^[a-zA-Z0-9]+$/).test(passwordValue)) {
    addInvalidClass(password);
    error.innerHTML = 'Only letters and numbers are allowed.';
  } else {
    addValidClass(password);
    error.innerHTML = '';
  }
}

function checkPasswordConfirmation() {
  const error = passwordConfirmation.nextElementSibling;
  const passwordConfirmationValue = passwordConfirmation.value;
  error.innerHTML = '';

  if (passwordConfirmationValue === '') {
    addInvalidClass(passwordConfirmation);
    error.innerHTML = 'Field can not be empty.';
  } else if (passwordConfirmationValue !== password.value) {
    addInvalidClass(passwordConfirmation);
    error.innerHTML = 'Password does not match.';
  } else {
    addValidClass(passwordConfirmation);
    error.innerHTML = '';
  }
}

email.addEventListener('focusout', () => {
  checkEmail();
});

country.addEventListener('input', () => {
  checkCountry();
});

zipcode.addEventListener('focusout', () => {
  checkZipcode();
});

password.addEventListener('focusout', () => {
  checkPassword();
});

passwordConfirmation.addEventListener('focusout', () => {
  checkPasswordConfirmation();
});

function checkInputs() {
  checkEmail();
  checkCountry();
  checkZipcode();
  checkPassword();
  checkPassword();
  checkPasswordConfirmation();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});
