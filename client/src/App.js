import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './admin/AdminPage'; // Import your AdminPage
import MainMenu from './components/MainMenu';
import MyPhiMenu from './components/MyPhiMenu';
import Description from './pages/Description';
import Syllabus from './pages/Syllabus';
import MyPhi from './pages/MyPhi';
import LoginPage from './pages/LogInPage';
import { AuthContext } from './context/AuthContext';
import LoginStatus from './components/LoginStatus';
import './App.css';



function App() {
  const [activePage, setActivePage] = useState('description');
  const [activeMyPhiPage, setActiveMyPhiPage] = useState('God'); // State for active "My Philosophy" page
  const [lastVisitedPage, setLastVisitedPage] = useState('description'); // tracks last page for return from MyPhi page
  const { isLoggedIn } = useContext(AuthContext);

 const handleMenuSelect = (selectedPage) => {
    if (selectedPage !== 'myphi') {
      setLastVisitedPage(selectedPage);
    }
    setActivePage(selectedPage);
  };

  const handleReturnToLastVisited = () => {
    setActivePage(lastVisitedPage);
  };


  // Define onLoginSuccess function
  const onLoginSuccess = () => {
    console.log('Login successful');
    // Additional logic post-login, e.g., updating states or redirecting
    // For instance, you might want to set the active page to 'myphi':
    setActivePage('myphi');
  };



  const renderContent = () => {
    switch (activePage) {
      case 'description':
        return <Description />;
      case 'syllabus':
        return <Syllabus />;
      case 'myphi':
        return isLoggedIn ?  <MyPhi activeMyPhiPage={activeMyPhiPage} /> : <LoginPage onLoginSuccess={onLoginSuccess} />;
      case 'slack':
        return <LoginPage />;
      default:
        return <Description />;
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={
            <>
              <div className="top-menu-container">
                <MainMenu onMenuSelect={handleMenuSelect} />
              </div>
              <div className="container-below-top-nav">
                <div className={`left-menu-container ${activePage === 'myphi' && isLoggedIn ? 'active' : ''}`}>
                  {activePage === 'myphi' && isLoggedIn ?  
                    <MyPhiMenu setActiveMyPhiPage={setActiveMyPhiPage} onReturnToLastVisitedPage={handleReturnToLastVisited} /> : null}
                </div>
                <div className="content">
                  {renderContent()}
                </div>
                <LoginStatus />
              </div>
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );

}

export default App;
