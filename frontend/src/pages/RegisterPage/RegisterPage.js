import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: ""
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="around-register">
      <form className="register-container" onSubmit={handleSubmit}>
        {" "}
        <div className="border-box">
          <h2> REGISTER BELOW</h2>
          <div className="grid-box">
            <label>
              USERNAME:
              <input
                type="text"
                name="username"
                placeholder="Enter Username..."
                value={formData.username}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="grid-box">
            <label>
              FIRST NAME:
              <input
                type="text"
                name="firstName"
                placeholder = "Enter First Name..."
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="grid-box">
            <label>
              LAST NAME:
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name..."
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="grid-box">
            <label>
              EMAIL:
              <input
                type="email"
                name="email"
                placeholder="Email Address..."
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="grid-box">
            <label>
              PASSWORD:
              <input
                type="text"
                name="password"
                placeholder="Enter Password..."
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="grid-box">
            <label>
              ROLE:
              <select name="role" onChange={handleInputChange}>
                <option>Choose Here</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Software Developer">Software Developer</option>
              </select>
            </label>
          </div>
          <div className="grid-box">
            <Link to="/login">LOGIN</Link>{" "}
            <button className="button">REGISTER</button>{" "}
          </div>
          <p className="note">
            NOTE: Make this an uncommon password with characters, numbers, and
            special characters!
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
