import React from "react";

function LoginButton() {
  const handleLogin = () => {
    // Redirect the user to the server's Google OAuth route
    window.location.href = "https://fabricadserv.onrender.com/auth/google";
  };

  return <button onClick={handleLogin}>Login with Google</button>;
}

export default LoginButton;
