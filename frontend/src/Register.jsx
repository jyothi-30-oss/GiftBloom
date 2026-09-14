import { useState } from "react";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      );

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      console.log("Register Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-icon">🎁</div>

        <h1>Create Your Account</h1>

        <p className="register-subtitle">
          Join GiftBloom and discover perfect gifts
        </p>

        <form onSubmit={handleRegister}>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="register-button">
            ✨ Create Account
          </button>

        </form>

        <p className="register-footer">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>

      </div>
    </div>
  );
}

export default Register;
