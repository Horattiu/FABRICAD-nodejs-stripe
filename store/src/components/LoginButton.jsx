// import React from "react";

// function LoginButton() {
//   const handleLogin = () => {
//     // Redirect the user to the server's Google OAuth route
//     window.location.href = "https://fabricadserv.onrender.com/auth/google";
//   };

//   return <button onClick={handleLogin}>Login with Google</button>;
// }

// export default LoginButton;

// import React, { useState, useEffect } from "react";

// function LoginButton() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("/user")
//       .then((response) => {
//         if (response.status === 401) {
//           // User is not authenticated
//           return null;
//         }
//         return response.json();
//       })
//       .then((data) => setUser(data))
//       .catch((error) => {
//         console.error("Error fetching user data: ", error);
//       });
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>Welcome back!</h1>
//           <p>Email: {user.email}</p>
//           <img src={user.profilePicture} alt="Profile" />
//           <a href="/logout">Log Out</a>
//         </div>
//       ) : (
//         <div>
//           <p>Please log in with Google</p>
//           <a href="https://fabricadserv.onrender.com/auth/google">
//             Login with Google
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoginButton;
////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";

function LoginButton() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://fabricadserv.onrender.com/user");
        if (response.status === 401) {
          setUser(null);
        } else {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogin = () => {
    // Redirect the user to the server's Google OAuth route
    window.location.href = "https://fabricadserv.onrender.com/auth/google";
  };

  const handleLogout = () => {
    // Redirect the user to a logout route (e.g., /logout) to clear the session
    window.location.href = "/logout";
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome back, {user.name}!</h1>
          <img src={user.picture} alt="Profile" />
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
}
export default LoginButton;
