import React, { useState, useEffect } from 'react';

const RaindropSection = () => {
  const [reads, setReads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder for fetching data from Raindrop.io API
  // This will be implemented in a later step
  useEffect(() => {
    const fetchReads = async () => {
      try {
        // IMPORTANT: Securely handle your Raindrop.io API key.
        // Do NOT hardcode it directly in the client-side code.
        // Consider using environment variables loaded at build time (for static sites)
        // or fetching data from a secure backend endpoint if you have one.
        // For this example, we'll use a placeholder for the API key and endpoint.
        // Replace with your actual Raindrop.io API endpoint and collection ID.
        // You can find documentation on the Raindrop.io API for details.
        const apiKey = process.env.NEXT_PUBLIC_RAINDROP_API_KEY; // Example using environment variable
        const collectionId = 'YOUR_COLLECTION_ID'; // Replace with your Raindrop.io collection ID
        const apiUrl = `https://api.raindrop.io/rest/v1/collection/${collectionId}/items?sort=-created`;

        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch Raindrop.io data: ${response.statusText}`);
        }

        const data = await response.json();
        setReads(data.items || []); // Assuming the API returns an 'items' array
        // Placeholder data for development - remove in production
        const placeholderData = [
          { id: 1, title: 'Example Article Title 1', link: 'https://example.com/article1', excerpt: 'A short description of the article.' },
          { id: 2, title: 'Another Interesting Read', link: 'https://example.com/article2', excerpt: 'Brief summary of the second read.' },
          { id: 3, title: 'Raindrop.io API Documentation', link: 'https://developer.raindrop.io/', excerpt: 'Useful resource for developers.' },
        ];
        setReads(placeholderData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReads();
  }, []);

  if (loading) {
    return <div className="raindrop-section">Loading recent reads...</div>;
  }

  if (error) {
    return <div className="raindrop-section error">Error loading recent reads: {error.message}</div>;
  }

  return (
    <section className="raindrop-section">
      <h2>Recent Reads</h2>
      {reads.length === 0 ? (
        <p>No recent reads found.</p>
      ) : (
        <ul>
          {reads.map(read => (
            <li key={read.id} className="raindrop-item">
              <div className="raindrop-content">
                <a href={read.link} target="_blank" rel="noopener noreferrer" className="raindrop-title">
                  {read.title}
                </a>
                {read.excerpt && <p className="raindrop-excerpt">{read.excerpt}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .raindrop-section {
          margin-bottom: 60px;
          padding: 20px;
          background-color: #f8f8f8; /* Light background for separation */
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }
        .raindrop-section h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 1.8em;
          color: #333; /* Example peaceful color */
          font-weight: 600;
        }
        .raindrop-section p {
          text-align: center;
          color: #666;
        }
        .raindrop-section ul {
          list-style: none;
          padding: 0;
          max-width: 700px; /* Limit list width */
          margin: 0 auto; /* Center the list */
        }
        .raindrop-section li {
          margin-bottom: 10px;
        }
        .raindrop-section a {
          text-decoration: none;
          color: #555; /* Example peaceful color */
          font-size: 1.1em;
          transition: color 0.3s ease;
          display: block; /* Make the link a block element */
        }
        .raindrop-section a:hover {
          color: #007bff; /* Example hover color */
          text-decoration: underline;
        }
        .raindrop-item {
          border-bottom: 1px solid #eee; /* Subtle separator */
          padding-bottom: 10px;
          margin-bottom: 10px;
        }
        .raindrop-item:last-child {
          border-bottom: none; /* No border on the last item */
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .raindrop-section.error {
          color: red;
        }
      `}</style>
    </section>
  );
};

export default RaindropSection;