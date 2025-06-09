import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <h1 className="text-4xl font-bold text-center mt-20">Inflyst is Coming Soon</h1>
      <p className="text-center mt-4 text-lg">An AI-powered platform for creators to monetize smarter.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);