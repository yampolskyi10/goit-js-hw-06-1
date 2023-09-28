const validationInput = document.getElementById('validation-input');
const validClass = 'valid';
const invalidClass = 'invalid';

function validateInput() {
  const requiredLength = parseInt(validationInput.getAttribute('data-length'), 10);
  const inputValue = validationInput.value.trim();

  if (inputValue.length === requiredLength) {
    validationInput.classList.remove(invalidClass);
    validationInput.classList.add(validClass);
  } else {
    validationInput.classList.remove(validClass);
    validationInput.classList.add(invalidClass);
  }
}

validationInput.addEventListener('blur', validateInput);
