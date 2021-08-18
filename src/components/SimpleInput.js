import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameisTouched, setEnteredNameisTouched] = useState(false);
  const [enteredEmailisTouched, setEnteredEmailisTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@")
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameisTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailisTouched;

  
 
  let formIsValid = false
  
  if(enteredNameIsValid){
    formIsValid=true}

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameisTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailisTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameisTouched(true);
    setEnteredEmailisTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName,enteredEmail);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameisTouched(false);
    setEnteredEmailisTouched(false);
  };

  const nameinputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
    const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameinputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your e-mail</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must includes "@"</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
