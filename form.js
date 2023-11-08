const Email = {
  element: document.getElementById('email'),
  error: document.querySelector('#email + span.error'),
  showError() {
    if (this.element.validity.valueMissing) {
      this.error.textContent = 'You need to enter an e-mail address.';
    } else if (this.element.validity.typeMismatch) {
      this.error.textContent = 'Entered value needs to be an e-mail address.';
    } else if (this.element.validity.tooShort) {
      this.error.textContent = `Email should be at least ${this.element.minLength} characters; you entered ${this.element.value.length}.`;
    } else {
      this.error.textContent = '';
      this.error.className = 'error';
    }
  },
};

const Country = {
  element: document.getElementById('country'),
  error: document.querySelector('#country + span.error'),
  showError() {
    if (this.element.value === '') {
      this.error.textContent = 'You need to select a country.';
    } else {
      this.error.textContent = '';
      this.error.className = 'error';
    }
  },
};

const Zip = {
  element: document.getElementById('zip'),
  error: document.querySelector('#zip + span.error'),
  showError() {
    if (this.element.validity.valueMissing) {
      this.error.textContent = 'You need to enter a ZIP code.';
    } else if (this.element.validity.patternMismatch) {
      this.error.textContent = 'ZIP should be 4 digits.';
    } else {
      this.error.textContent = '';
      this.error.className = 'error';
    }
  },
};

const Password = {
  element: document.getElementById('password'),
  error: document.querySelector('#password + span.error'),
  showError() {
    const regex = /(?=.*[A-Z])(?=.*\d)(?=.*[?!@#$%^&*])(?=.{8,})/;
    if (this.element.validity.valueMissing) {
      this.error.textContent = 'You need to enter a password.';
    } else if (!regex.test(this.element.value)) {
      this.error.textContent = 'Password should be at least 8 characters long, contain at least one uppercase letter, one number and one special character.';
    } else {
      this.error.textContent = '';
      this.error.className = 'error';
    }
  },
};

const ConfirmPassword = {
  element: document.getElementById('confirm_password'),
  error: document.querySelector('#confirm_password + span.error'),
  showError() {
    if (this.element.validity.valueMissing) {
      this.error.textContent = 'You need to confirm your password.';
    } else if (this.element.value !== Password.element.value) {
      this.error.textContent = 'Passwords do not match.';
    } else {
      this.error.textContent = '';
      this.error.className = 'error';
    }
  },
};

const form = document.querySelector('form');

Email.element.addEventListener('input', () => {
  Email.showError();
});

Zip.element.addEventListener('input', () => {
  Zip.showError();
});

Password.element.addEventListener('input', () => {
  Password.showError();
});

ConfirmPassword.element.addEventListener('input', () => {
  ConfirmPassword.showError();
});

form.addEventListener('submit', (e) => {
  if (!Email.element.validity.valid) {
    Email.showError();
    e.preventDefault();
  }
  if (!Country.element.validity.valid) {
    Country.showError();
    e.preventDefault();
  }
  if (!Zip.element.validity.valid) {
    Zip.showError();
    e.preventDefault();
  }
  if (!Password.element.validity.valid) {
    Password.showError();
    e.preventDefault();
  }
  if (!ConfirmPassword.element.validity.valid) {
    ConfirmPassword.showError();
    e.preventDefault();
  }
});
