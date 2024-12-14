import React from 'react';
import { Helmet } from 'react-helmet';

const LocalData = () => {

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Frederic Flipo",
    "image": "./assets/image_github_ffl.png",
    "description": "Développeur freelance proposant des services de développement et d'optimisation de sites web",
    "@id": "https://fred2460.github.io/frederic-flipo",
    "url": "https://fred2460.github.io/frederic-flipo",
    "telephone": "+33 6 82 86 01 60",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "27 rue Georges Clemenceau",
      "addressLocality": "Choisy-au-Bac",
      "postalCode": "60750",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.43843,
      "longitude": -2.87757
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
