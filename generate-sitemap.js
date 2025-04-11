const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.frederic-flipo.net";

// Pages statiques
const staticRoutes = [
  {path: "/", priority: 1.0},
  {path: "/apropos", priority: 0.8}
];

// Chargement des projets dynamiques
const projetsPath = path.join(__dirname, "src/datas", "projets.json");
const projets = JSON.parse(fs.readFileSync(projetsPath, "utf-8"));

// Construction de toutes les routes
const urls = [
  ...staticRoutes.map(route => ({
    loc: `${BASE_URL}${route.path}`,
    priority: route.priority
  })),
  ...projets.map(projet => ({
    loc: `${BASE_URL}/projets/${projet.id}`,
    priority: projet.priority || 0.9
  }))
];

// Génération XML
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
  </url>
`).join("")}
</urlset>`;

// Écriture dans le dossier public
const outputPath = path.join(__dirname, "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemapContent);

console.log("✅ sitemap.xml généré avec succès !");
