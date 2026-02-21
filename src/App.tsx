/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Chef from './pages/Chef';
import Cucina from './pages/Cucina';
import Vineria from './pages/Vineria';
import Contatti from './pages/Contatti';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white selection:bg-brand-burgundy selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chef" element={<Chef />} />
            <Route path="/cucina" element={<Cucina />} />
            <Route path="/vineria" element={<Vineria />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
