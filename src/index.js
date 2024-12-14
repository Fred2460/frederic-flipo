import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Accueil projets={projetsData} />} />
        <Route path="/Accueil" element={<Accueil projets={projetsData} />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/FProjet/c67ab8a7" element={<FProjet id="c67ab8a7" />} />
        <Route path="/FProjet/b9123946" element={<FProjet id="b9123946" />} />
        <Route path="/FProjet/46d188c5" element={<FProjet id="46d188c5" />} />
        <Route path="/FProjet/7af00cd6" element={<FProjet id="7af00cd6" />} />
        <Route path="/FProjet/cb02d69b" element={<FProjet id="cb02d69b" />} />
        <Route path="/FProjet/0979876d" element={<FProjet id="0979876d" />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
