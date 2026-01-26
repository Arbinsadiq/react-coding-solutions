import { useState } from "react";
import "./style.css";

function AsteriskFieldValidation() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({ name: false, location: false });
  const [successMessage, setSuccessMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    const newErrors = {
      name: name.trim() === "",
      location: location.trim() === "",
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.location) {
      setSuccessMessage(
        `Submitted Successfully!\nName: ${name}\nLocation: ${location}`,
      );
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>
      <form className="form" onSubmit={handleClick} data-testid="form">
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            className={`input ${errors.name ? "input-error" : ""}`}
            type="text"
            placeholder="Enter your name"
            data-testid="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <span className="error" data-testid="name-error">
              Name is required.
            </span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            id="location"
            className={`input ${errors.location ? "input-error" : ""}`}
            type="text"
            placeholder="Enter your location"
            data-testid="location-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errors.location && (
            <span className="error" data-testid="location-error">
              Location is required.
            </span>
          )}
        </div>

        <button
          type="submit"
          data-testid="submit-button"
          className="submit-button"
        >
          Submit
        </button>
      </form>
      {successMessage && (
        <pre className="success-message" data-testid="success-message">
          {successMessage}
        </pre>
      )}
    </div>
  );
}

export default AsteriskFieldValidation;
