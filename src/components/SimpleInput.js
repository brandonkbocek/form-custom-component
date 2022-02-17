import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    // isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let emailWarning = '';

  if (!enteredEmailIsValid) {
    emailWarning = 'Please enter a valid email';
  }

  const formSubmissionHandler = event => {
    // prevent default stops the page from re-loading
    event.preventDefault();

    const formIsValid = !emailInputHasError && !nameInputHasError;

    if (formIsValid) {
      console.log('submitting form')
      console.log(enteredName);
      console.log(enteredEmail);
      resetNameInput();
      resetEmailInput();
    }
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={emailChangedHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className='error-text'>{emailWarning}</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
