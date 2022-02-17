import { useState } from "react";

const useInputAgain = (validateInput) => {

    const [enteredInput, setEnteredInput] = useState('');
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const inputIsValid = validateInput(enteredInput);
    const hasError = !inputIsValid && inputIsTouched;

    const valueChangedHandler = (event) => {
        console.log('Setting value to', event.target.value);
        setEnteredInput(event.target.value);
    };

    const inputBlurHandler = () => {
        setInputIsTouched(true);
    };

    const reset = () => {
        setEnteredInput('');
        setInputIsTouched(false);
    };

    return {
        value: enteredInput,
        isValid: inputIsValid,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        reset
    };
}

export default useInputAgain;