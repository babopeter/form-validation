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
    }
  },
};

const form = document.querySelector('form');

Email.element.addEventListener('input', () => {
  if (Email.element.validity.valid) {
    Email.error.textContent = '';
    Email.error.className = 'error';
  } else {
    Email.showError();
  }
});

form.addEventListener('submit', (e) => {
  if (!Email.element.validity.valid) {
    Email.showError();
    e.preventDefault();
  }
});
