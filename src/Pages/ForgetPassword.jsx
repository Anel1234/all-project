// ForgotPassword.jsx

import React, { useState } from "react";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendResetLink = async () => {
    try {
      const response = await axios.post("/reset-password", { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Failed to send reset link.");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSendResetLink}>Send Reset Link</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgetPassword;
