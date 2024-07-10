// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NewCategory from './pages/NewCategory';
import { VideoProvider } from './contexts/VideoContext';
import './styles/global.css';

function App() {
  return (
    <VideoProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new-video" element={<NewVideo />} />
              <Route path="/new-category" element={<NewCategory />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </VideoProvider>
  );
}

export default App;
