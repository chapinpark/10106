import React, { useState, useEffect, useContext } from 'react';
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
    // State to manage the menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 769);

    // Function to update the state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1300);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount


  // Function to toggle the menu and hamburger menu icon
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
// sets changes in background color for myphi page
 const appStyle = {
    backgroundColor: activePage === 'myphi' ? '#fff2f2' : 'initial',
  };

  return (
    <Router>
      <div className="app-container" style={appStyle}>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={
            <>
              
              
              <div className="top-menu-container">


    {!isLargeScreen && isLoggedIn && activePage === 'myphi' && (
  <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
    <span></span>
  <span></span>
  <span></span>
  </div>
)}
            



                <MainMenu onMenuSelect={handleMenuSelect} />
              </div>
              <div className="container-below-top-nav">
                   
                {/* Left Menu */}
 <div className={`left-menu-container ${((isLargeScreen && activePage === 'myphi' && isLoggedIn) || isMenuOpen) ? 'active' : ''}`}>
  {activePage === 'myphi' && isLoggedIn ?  
    <div>
      <MyPhiMenu setActiveMyPhiPage={setActiveMyPhiPage} onReturnToLastVisitedPage={handleReturnToLastVisited} />
    </div> : null
  }
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
