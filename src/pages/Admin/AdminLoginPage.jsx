import { useState } from "react";
import "../../styles/adminLoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleForm = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    try {
      const { data } = await axios.post(
        `http://localhost:3001/api/auth/login`,
        {
          email,
          password,
        },
      );

      if (data.user && data.user.role === "admin") {
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/admin/");
      }
      return;
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
    }
  };
  return (
    <main className="login-admin-page" aria-label="login admin ppage">
      <form className="login-form" aria-label="login form">
        <div className="login-form-content">
          <h4>Welcome Back Admin!</h4>
          <p>We've missed you!Please eneter your details</p>
        </div>

        <div className="form-input-container" aria-label="form input container">
          <label htmlFor="admin-email" aria-label="admin email">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="admin-email"
            required
            autoComplete="false"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="form-input-container" aria-label="form input container">
          <label htmlFor="admin-pass" aria-label="admin password">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter password"
            id="admin-pass"
            required
            autoComplete="false"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button onClick={handleForm}>Sign in</button>
      </form>
    </main>
  );
}
