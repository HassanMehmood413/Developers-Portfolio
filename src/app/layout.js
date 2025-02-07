// src/app/layout.js

import './globals.css'; // Import global styles
import '../app/index.css'; // Import page-specific styles if needed
import Navbar from '../app/components/navbar'; // Adjust path as needed
import f from '../app/images/letterh.png'; // Adjusted path to your image
import Footer from "@/app/components/footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hassan Mehmood</title>
        <meta name="description" content="Description of your app for SEO." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={f.src} /> {/* Use f.src to get the correct path */}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
}
