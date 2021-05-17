import React from 'react';
// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function ReactHelmet({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Wondeshi | {title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
}
