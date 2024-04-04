export function validateEmailForm() {
    const toField = document.getElementById('to-field');
    const topicField = document.getElementById('topic-field');
    const submitButton = document.querySelector('.email-form__button');
    const validMark = document.querySelector('.email-form__valid-mark');
    const acceptTermsCheckbox = document.getElementById('accept-terms');
    const emailForm = document.querySelector('.email-form');
  
    // Helper function to check if the 'To' field is valid
    function isValidEmail(email) {
      const trimmedEmail = email.trim();
      const atIndex = trimmedEmail.indexOf('@');
      return (
        atIndex > 0 &&
        atIndex < trimmedEmail.length - 1 &&
        trimmedEmail.length >= 4 &&
        !/\s/.test(trimmedEmail)
      );
    }
  
    // Event listener for 'To' field validation
    toField.addEventListener('input', () => {
      const isValid = isValidEmail(toField.value);
      validMark.classList.toggle('hidden', !isValid);
    });
  
    // Event listeners for 'Topic' field validation
    topicField.addEventListener('focus', () => {
      topicField.classList.remove('email-form__input_warning');
    });
  
    topicField.addEventListener('blur', () => {
      if (!topicField.value.trim()) {
        topicField.classList.add('email-form__input_warning');
      }
    });
  
    // Event listener for the 'Accept Terms' checkbox
    acceptTermsCheckbox.addEventListener('change', () => {
      submitButton.disabled = !acceptTermsCheckbox.checked;
    });
  
    // Event listener for form submission
    emailForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const customEvent = new CustomEvent('email-form-submit', { bubbles: true });
      emailForm.dispatchEvent(customEvent);
    });
  }
  