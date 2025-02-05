import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import FProjet from './pages/FProjet'
import Error from './pages/Erreur'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import createGlobalStyle from 'styled-components'
import './styles/index.scss';
import projetsData from './datas/projets.json'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: $font-family-base;
    }

    body {
      margin: 0px;
      padding: 0px;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Accueil projets={projetsData} />} />
        <Route path="/Accueil" element={<Accueil projets={projetsData} />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/FProjet/:id" element={<FProjet />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </HelmetProvider>
);

/*
<React.StrictMode>
</React.StrictMode>
*/