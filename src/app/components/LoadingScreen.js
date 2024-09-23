// "use client";
// // components/LoadingScreen.js
// // src/components/LoadingScreen.js
// import React, { useState, useEffect } from 'react';
// // import './LoadingScreen.css'; // Ensure this imports the CSS you created

// const LoadingScreen = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a delay to show loading screen, e.g., fetching data or loading resources
//     const timer = setTimeout(() => {
//       setLoading(false); // Hide loading screen after 3 seconds
//     }, 3000);

//     return () => clearTimeout(timer); // Clean up the timer
//   }, []);

//   return (
//     <div className={`loading-screen ${loading ? 'show' : ''}`}>
//       <div className="spinner"></div>
//       <p className="glow">Hassan Mehmood</p> {/* Display name with animation and glowing effect */}
//     </div>
//   );
// };

// export default LoadingScreen;
