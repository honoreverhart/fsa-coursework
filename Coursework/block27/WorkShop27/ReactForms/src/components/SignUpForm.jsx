import { useState, useEffect } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null)
  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json()
      setSuccessMessage(result.message)
    } catch (error) {
      setError(error.message)
    }

  }
  return (
    <>
      <h2 className="h2">Authenticate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {setError.error && <p>{setError.error}</p>}
      <button onClick={handleClick} className="button">
        Authenticate Token!
      </button>
    </>
  );
}
