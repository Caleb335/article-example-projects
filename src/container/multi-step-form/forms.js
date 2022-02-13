import React from "react";
import propTypes from "prop-types";
import { MainFormWrapper } from "./style/form.styled";
import { Fade } from "react-awesome-reveal";

const MainForm = () => {
  const [formStep, setFormStep] = React.useState(0);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const prevForm = () => {
    setFormStep((currentStep) => currentStep - 1);
  };

  const nextForm = (e) => {
    e.preventDefault();
    setFormStep((currentStep) => currentStep + 1);
  };

  //
  const MAX_FORM_STEP = 3;

  return (
    <MainFormWrapper>
      <div className="form-head">
        <div className="texts">
          <h2>Form</h2>
          <p className="form-step">
            {formStep === MAX_FORM_STEP
              ? ""
              : `step ${formStep + 1} of ${MAX_FORM_STEP}`}
          </p>
          {formStep > 0 ? <p onClick={prevForm}>go back</p> : ""}
        </div>
        <div className="form-state">
          <code>
            <pre>firstName: {firstName}</pre>
            <pre>lastName: {lastName}</pre>
            <pre>email address: {email}</pre>
            <pre>Home address: {address}</pre>
            <pre>Phone Number: {phoneNumber}</pre>
          </code>
        </div>
      </div>
      <form className="mutli-form">
        {formStep === 0 && (
          <>
            <Fade direction="up" cascade triggerOnce>
              <div className="input-group">
                <label htmlFor="fullname">First Name</label>
                <input
                  name="firstname"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  name="lastname"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </Fade>
          </>
        )}
        {formStep === 1 && (
          <>
            <p className="interactive">
              Hello <span>{firstName}</span>, <br />
              please enter your email and home address
            </p>
            <SecondForm
              emailAddress={email}
              emailChange={(e) => setEmail(e.target.value)}
              address={address}
              addressChange={(e) => setAddress(e.target.value)}
            />
          </>
        )}
        {formStep === 2 && (
          <ThirdForm
            phoneNumber={phoneNumber}
            phoneChange={(e) => setPhoneNumber(e.target.value)}
          />
        )}
        {formStep === 3 && (
          <div className="final-step">
            <h3>Thank you for filling this form {firstName}. You Rock!</h3>
          </div>
        )}
        {/* if the form step is the last one don't show the button */}
        {formStep === MAX_FORM_STEP ? (
          ""
        ) : (
          <button className="btn" name="button" onClick={nextForm}>
            Next Step
          </button>
        )}
      </form>
    </MainFormWrapper>
  );
};

export default MainForm;

export const SecondForm = ({
  emailAddress,
  emailChange,
  address,
  addressChange,
}) => {
  return (
    <Fade direction="right" cascade triggerOnce>
      <div className="input-group">
        <label htmlFor="email address">Email address</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="email address"
          value={emailAddress}
          onChange={emailChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="home address">Address</label>
        <input
          name="address"
          id="homeAddress"
          type="text"
          placeholder="Home Address"
          value={address}
          onChange={addressChange}
        />
      </div>
    </Fade>
  );
};

SecondForm.propTypes = {
  emailAddress: propTypes.string.isRequired,
  emailChange: propTypes.func.isRequired,
  address: propTypes.string.isRequired,
  addressChange: propTypes.func.isRequired,
};

export const ThirdForm = ({ phoneNumber, phoneChange }) => {
  return (
    <Fade direction="right" cascade triggerOnce>
      <div className="input-group">
        <label htmlFor="email address">Phone Number</label>
        <input
          name="phoneNumber"
          id="phoneNumber"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={phoneChange}
        />
      </div>
    </Fade>
  );
};

ThirdForm.propTypes = {
  phoneNumber: propTypes.string.isRequired,
  phoneChange: propTypes.func.isRequired,
};
