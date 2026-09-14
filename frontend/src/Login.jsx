import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        alert("Login successful!");

        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Login Error:", error);
      alert("Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-icon">🎁</div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Login to your GiftBloom account
        </p>

        <form onSubmit={handleLogin}>

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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="login-button"
          >
            🔐 Login
          </button>

        </form>

        <p className="login-footer">
          Don't have an account?{" "}
          <a href="/register">Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;
