import { useState } from "react";

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredLast, setEnteredLast] = useState("");
  const [lastIsTouched, setLastIsTouched] = useState(false);
  const [lastIsValid, setLastIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredLastIsValid = enteredLast.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  const nameInputIsInvalid = !enteredNameIsValid && nameIsTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && emailIsTouched;
  const lastInputIsInvalid = !enteredLastIsValid && lastIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredLastIsValid) {
    formIsValid = true;
  }

  const enteredNameHandler = (event) => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
  };

  const enteredLastHandler = (event) => {
    console.log(event.target.value);
    setEnteredLast(event.target.value);
  };

  const enteredEmailHandler = (event) => {
    console.log(event.target.value);
    setEnteredEmail(event.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };
  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };
  const lastBlurHandler = () => {
    setLastIsTouched(true);
  };

  const submitValidationHandler = (event) => {
    event.preventDefault();

    setNameIsTouched(true);
    setEmailIsTouched(true);
    setLastIsTouched(true);

    if (formIsValid) {
      return;
    }
    console.log("submiteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed");
    setEnteredName("");
    setEnteredEmail("");
    setEnteredLast("");
    setNameIsTouched(false);
    setEmailIsTouched(false);
    setLastIsTouched(false);
  };

  console.log(nameIsValid);
  console.log(emailIsValid);
  console.log(lastIsValid);

  const nameInputClasses = !nameIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = !emailIsValid
    ? "form-control invalid"
    : "form-control";

  const lastInputClasses = !lastIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitValidationHandler}>
      <div className={nameInputClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            onBlur={nameBlurHandler}
            onChange={enteredNameHandler}
            type="text"
            id="name"
          />
          {nameInputIsInvalid && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onBlur={lastBlurHandler}
            onChange={enteredLastHandler}
            type="text"
            id="name"
            value={enteredLast}
          />
          {lastInputIsInvalid && (
            <p className="error-text">Lastname must not be empty</p>
          )}
        </div>
      </div>
      <div className={lastInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onBlur={emailBlurHandler}
          onChange={enteredEmailHandler}
          type="email"
          id="name"
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">email must include "@"</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
