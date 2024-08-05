import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/Chat/ChatPage';
import MediaPage from './pages/Media/MediaPage';
import DocumentPage from './pages/Documents/DocPage';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Navbar from './components/Common/Navbar';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/documents" element={<DocumentPage />} />
            <Route path="/" element={<ChatPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
