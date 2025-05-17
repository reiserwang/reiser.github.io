// components/GitHubSection.js
import React from 'react';
import { fetch } from 'isomorphic-unfetch';

const GitHubSection = () => {
  // Placeholder state for GitHub data
  const [githubData, setGithubData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Placeholder function to fetch GitHub data
  const fetchGitHubData = async (username) => {
    setLoading(true);
    setError(null);
    try {
      // Fetch the README.md content directly from the raw GitHub URL
      const readmeUrl = `https://raw.githubusercontent.com/${username}/${username}/main/README.md`;
      const response = await fetch(readmeUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch README: ${response.status}`);
      }

      const readmeContent = await response.text();

      setGithubData({
        // For simplicity, we'll just display the raw README content.
        // In a more complex scenario, you might parse the markdown.
        overview: readmeContent,
        featuredRepos: [], // We are focusing on README content for now
      });
    } catch (err) {
      setError("Failed to fetch GitHub data.");
    } finally {
      setLoading(false);
    }
  };

  // Call the fetch function on component mount (placeholder)
  React.useEffect(() => {
    fetchGitHubData('reiserwang'); // Use the actual GitHub username
  }, []);

  return (
    <section className="github-section">
      <h2>My GitHub Overview</h2>
      {loading && <p>Loading GitHub data...</p>}
      {error && <p className="error">{error}</p>}
      {githubData && (
        <div className="github-content">
          {/* Display the fetched README content */}
          <div className="readme-content" dangerouslySetInnerHTML={{ __html: githubData.overview }} />
          {/* Add a link to the full GitHub profile */}
          <a href="https://github.com/reiserwang" target="_blank" rel="noopener noreferrer">
            View Full GitHub Profile
          </a>
          {/* We are not displaying featured repos based on README parsing in this example */}
          {/*
            {githubData.featuredRepos.map(repo => (
              <li key={repo.name}>
                <strong>{repo.name}</strong>: {repo.description}
              </li>
            ))}
          </ul>
          */}
        </div>
      )}

      <style jsx>{`
        .github-section {
          padding: 2rem;
          margin-bottom: 2rem;
          background-color: #f0f4f8; /* Light background for peace */
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        h2 {
          color: #334e68; /* Peaceful heading color */
          margin-bottom: 1rem;
        }
        .github-content {
          color: #5a6f80; /* Subtle text color */
        }
        .readme-content {
          /* Basic styling for the raw README content */
          text-align: left; /* Align text to the left for readability */
          line-height: 1.6;
          margin-bottom: 1.5rem; /* Space below the README content */
        }
        .github-content p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1rem;
        }
        li {
          margin-bottom: 0.5rem;
        }
        a {
          display: inline-block; /* Make the link a block for spacing */
          color: #007bff; /* A subtle link color */
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #0056b3;
        }
        .error {
          color: #d9534f; /* Error color */
        }
      `}</style>
    </section>
  );
};

export default GitHubSection;