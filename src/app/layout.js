// src/app/layout.js

import './globals.css'; // Import global styles
import '../app/index.css'; // Import page-specific styles if needed
import Navbar from '../app/components/navbar'; // Adjust path as needed

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
        {/* Add any additional head elements here */}
      </head>
      <body>
        <Navbar /> {/* Include your Navbar or other global components */}
        <main>{children}</main> {/* Render page-specific content */}
      </body>
    </html>
  );
}
