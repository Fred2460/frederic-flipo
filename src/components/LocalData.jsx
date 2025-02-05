import React from 'react';
import { Helmet } from 'react-helmet';

const LocalData = () => {

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Frederic Flipo",
    "image": "./assets/image_github_ffl.png",
    "description": "Développeur full stack proposant des services de développement et d'optimisation de sites web",
    "@id": "https://frederic-flipo.net",
    "url": "https://frederic-flipo.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "148 rue Georges Clemenceau",
      "addressLocality": "Choisy-au-Bac",
      "postalCode": "60750",
      "addressCountry": "FR"
    },
    "telephone": "+33 7 68 62 94 89",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.43937,
      "longitude": 2.87826
    },
    "openingHours": "Mo-Fr 9:00-18:00"
  };

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>
    </div>
  );
};

export default LocalData;
