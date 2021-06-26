import React from 'react';
import TopBar from './Component/topbar/TopBar.jsx'
import Home from './pages/home/Home.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Settings from './pages/settings/Settings.jsx';

function App() {
  return (
    <div>
      <TopBar />
      <Settings/>
    </div>
  );
}

export default App;
