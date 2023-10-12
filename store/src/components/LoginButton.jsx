// import React from "react";

// function LoginButton() {
//   const handleLogin = () => {
//     // Redirect the user to the server's Google OAuth route
//     window.location.href = "https://fabricadserv.onrender.com/auth/google";
//   };

//   return <button onClick={handleLogin}>Login with Google</button>;
// }

// export default LoginButton;

import React, { useState, useEffect } from "react";

function LoginButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/user")
      .then((response) => {
        if (response.status === 401) {
          // User is not authenticated
          return null;
        }
        return response.json();
      })
      .then((data) => setUser(data))
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome back!</h1>
          <p>Email: {user.email}</p>
          <img src={user.profilePicture} alt="Profile" />
          <a href="/logout">Log Out</a>
        </div>
      ) : (
        <div>
          <p>Please log in with Google</p>
          <a href="https://fabricadserv.onrender.com/auth/google">
            Login with Google
          </a>
        </div>
      )}
    </div>
  );
}

export default LoginButton;
