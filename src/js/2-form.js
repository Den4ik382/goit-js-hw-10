const formData = {
  email: '',
  message: '',
};

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const savedData = localStorage.getItem('feedback-form-state');
const submitBtn = document.querySelector('button');

console.log(savedData);

function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
  const savedFormData = JSON.parse(savedData) || {};
  formData.email = savedFormData.email || '';
  formData.message = savedFormData.message || '';
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

function clearFormData() {
  formData.email = '';
  formData.message = '';
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
}

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveFormData();
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    clearFormData();
  }
});

window.addEventListener('load', () => {
  loadFormData();
});
