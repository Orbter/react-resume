import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './NavBar';
import ResumePaper from './resumeVs';
import ProfileCard from './pofile-card';

import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <main className="main-contact">
      <ProfileCard />
    </main>
  </React.StrictMode>
);
