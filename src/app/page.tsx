import Head from 'next/head';

export default function Home() {
  const instagramUsername = 'jhonnovax';  // Replace with your Instagram username
  const profileUrl = `https://www.instagram.com/${instagramUsername}`;

  return (
    <>
      <Head>
        <title>{instagramUsername} on Instagram</title>
        <meta name="description" content={`Follow ${instagramUsername} on Instagram for updates on Web Development.`} />
        <meta name="keywords" content={`${instagramUsername}, Jhon Nova, Instagram, Web developer, Frontend Developer`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={profileUrl} />
        <meta property="og:title" content={`${instagramUsername} on Instagram`} />
        <meta property="og:description" content={`Check out ${instagramUsername}'s Instagram profile for the latest photos and updates.`} />
        <meta property="og:url" content={profileUrl} />
        <meta property="og:type" content="profile" />
      </Head>
      <main>
        <h1>Connect with {instagramUsername} on Instagram</h1>
        <p>Discover my latest posts, photos, and more:</p>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">Visit my Instagram Profile</a>
      </main>
    </>
  );
}
