import React, { useState } from "react";

const Steps: React.FC = () => {
  const [step, setStep] = useState(1);

  if (step === 1) {
    return (
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <button
          type="button"
          onClick={() => setStep(2)}
          className="btn btn-primary"
        >
          Next
        </button>
      </form>
    );
  }
  if (step === 2) {
    return (
      <form>
        <div className="form-group">
          <label>Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Address"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Postcode</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Postcode"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <button
          type="button"
          onClick={() => setStep(3)}
          className="btn btn-primary"
        >
          Next
        </button>
      </form>
    );
  } else {
    return (
      <button
        type="submit"
        onClick={() => setStep(1)}
        className="btn btn-primary"
      >
        Submit
      </button>
    );
  }
};

export default Steps;
