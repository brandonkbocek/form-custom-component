import useInputAgain from "../hooks/use-input-again";
import useInput from "../hooks/use-input";

const BasicForm = () => {

  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    // isValid: firstNameIsValid,
    valueChangeHandler: onHandleFirstNameChange,
    inputBlurHandler: onHandleFirstNameBlur,
    reset: resetFirstName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    // isValid: lastNameIsValid,
    valueChangeHandler: onHandleLastNameChange,
    inputBlurHandler: onHandleLastNameBlur,
    reset: resetLastName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailHasError,
    // isValid: emailIsValid,
    valueChangeHandler: onHandleEmailChange,
    inputBlurHandler: onHandleEmailBlur,
    reset: resetEmail
  } = useInput(value => value.includes('@'));

  // console.log('first:', enteredFirstName);
  // console.log('last:', enteredLastName);
  // console.log('email:', enteredEmail);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const formIsValid = !firstNameHasError && !lastNameHasError && !emailHasError;

    if (formIsValid) {
      console.log('First name:', enteredFirstName);
      console.log('Last name:', enteredLastName);
      console.log('Email:', enteredEmail);
      resetFirstName();
      resetLastName();
      resetEmail();
    }
  }

  const firstNameClass = firstNameHasError
    ? 'form-control invalid' : 'form-control';

  const lastNameClass = lastNameHasError
    ? 'form-control invalid' : 'form-control';

  const emailClass = emailHasError
    ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={onHandleFirstNameChange}
            value={enteredFirstName}
            onBlur={onHandleFirstNameBlur}
          />
        {firstNameHasError && <p className='error-text'>Please enter a valid first name.</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={onHandleLastNameChange}
            value={enteredLastName}
            onBlur={onHandleLastNameBlur}
          />
        {lastNameHasError && <p className='error-text'>Please enter a valid last name.</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={onHandleEmailChange}
          value={enteredEmail}
          onBlur={onHandleEmailBlur}
        />
      {emailHasError && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
