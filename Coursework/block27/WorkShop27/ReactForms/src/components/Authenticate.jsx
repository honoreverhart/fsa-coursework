import { useState, useEffect } from "react";

export default function SignUpForm({setToken}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    error: null,
  });

  function handleChange(e) {
    {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token)
      
    } catch (error) {
      setFormData(error.message)
    }
    
  }

  return (
    <>
      <div>
        <h2 className="h2">Sign Up!</h2>
        {formData.error && <p>{formData.error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="label">
            Username:{" "}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            Password:{" "}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button className="button">Submit</button>
        </form>
      </div>
    </>
  );
}
