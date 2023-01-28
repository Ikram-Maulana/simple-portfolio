export default function Head() {
  return (
    <>
      <title>Ikram Maulana Portfolio</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Personal Portfolio Ikram Maulana" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          "Ikram Maulana Portfolio"
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content="Ikram Maulana Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#000000" />
    </>
  );
}
