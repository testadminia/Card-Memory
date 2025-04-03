import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.error("Please enter both username and password.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userID", response.data.userID);
      toast.success("Login successful!");
      onLogin();
      navigate("/play");
    } catch (error) {
      toast.error(error.response?.data.message || "Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className={styles.container}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className={styles.loginBox}>
        <h1 className={styles.logo}>Memory Quest</h1>
        <p className={styles.welcomeText}>Sharpen your memory and match the cards!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={styles.input}
          />
          <button type="submit" className={styles.button} disabled={!formData.username || !formData.password}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className={styles.registerText}>
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;