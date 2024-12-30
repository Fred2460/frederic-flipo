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
      "addressLocality": "Compiègne",
      "postalCode": "60200",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.41765,
      "longitude": 2.82660
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
