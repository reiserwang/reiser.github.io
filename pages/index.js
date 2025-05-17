import Head from 'next/head';
import GitHubSection from '../components/GitHubSection';
import BioSection from '../components/BioSection';
import RaindropSection from '../components/RaindropSection';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Reiser Wang</title>
        <meta name="description" content="Personal website of Reiser Wang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Consider adding a layout component or using CSS for overall structure */}
      <main className="container"> {/* Use a class for styling */}
        <section id="bio"> {/* Use IDs for navigation/sectioning */}
          <BioSection />
        </section>
        <section id="github">
          <GitHubSection />
        </section>
        <section id="raindrop">
          <RaindropSection />
        </section>
      </main>
    </div>
  );
}