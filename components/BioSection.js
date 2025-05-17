import React from 'react';

const BioSection = () => {
  // Define minimal and peaceful styles
  const cardStyle = {
    backgroundColor: '#ffffff', // Pure white for a minimal look
    padding: '30px', // Increased padding
    borderRadius: '12px', // More rounded corners
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', // Softer shadow
    maxWidth: '500px', // Slightly wider card
    margin: '40px auto', // More vertical margin
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Clean font
    color: '#555', // Slightly lighter text color
    textAlign: 'center', // Center align content
  };

  const headingStyle = {
    marginTop: '0',
    color: '#333', // Darker heading color for contrast
    marginBottom: '20px', // Increased margin below heading
    fontSize: '1.8em', // Slightly larger heading
  };

  const bioTextStyle = {
    lineHeight: '1.8', // Increased line height for readability
    marginBottom: '30px', // Increased margin below bio text
    fontSize: '1.1em', // Slightly larger text
  };

  const linkStyle = {
    display: 'inline-block',
    backgroundColor: '#e2e8f0', // Light blue-gray button
    color: '#2d3748', // Darker text color for button
    padding: '12px 25px', // More padding for a larger button
    borderRadius: '25px', // Pill-shaped button
    textDecoration: 'none',
    fontWeight: '600', // Semi-bold font
    transition: 'background-color 0.3s ease, transform 0.1s ease', // Add transform for subtle hover
    ':hover': {
      backgroundColor: '#cbd5e0', // Slightly darker hover color
      transform: 'scale(1.02)', // Subtle scale on hover
    },
  };

  return (
    <div style={{
      ...cardStyle,
    }}>
      <h2 style={{
        ...headingStyle,
      }}>About Me</h2>
      <p style={{
        ...bioTextStyle,
      }}>
        {/* Replace with your actual bio content */}
        This is a brief section about me. I enjoy building things and exploring new technologies.
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/reiserwang/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...linkStyle,
          }}
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default BioSection;