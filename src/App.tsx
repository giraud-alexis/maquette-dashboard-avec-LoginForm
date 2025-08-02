import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import SectionPage from './components/sections/SectionPage';
import Header from './components/header/Header';
import useItemsData from './hooks/useItemsData';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const itemsData = useItemsData();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = (email: string, password: string) => {
    // Ici vous pouvez ajouter votre logique d'authentification
    console.log('Tentative de connexion:', { email, password });
    
    // Pour la démo, on accepte toute combinaison email/password
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <Dashboard 
                onLogout={handleLogout}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                itemsData={itemsData}
              />
            } 
          />
          <Route 
            path="/prestations" 
            element={
              <>
                <Header 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                  onLogout={handleLogout} 
                />
                <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                  <SectionPage
                    title="Prestations"
                    items={itemsData.prestations}
                    {...itemsData.prestationActions}
                  />
                </div>
              </>
            } 
          />
          <Route 
            path="/produits" 
            element={
              <>
                <Header 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                  onLogout={handleLogout} 
                />
                <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                  <SectionPage
                    title="Produits"
                    items={itemsData.products}
                    {...itemsData.productActions}
                  />
                </div>
              </>
            } 
          />
          <Route 
            path="/evenements" 
            element={
              <>
                <Header 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                  onLogout={handleLogout} 
                />
                <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                  <SectionPage
                    title="Événements"
                    items={itemsData.events}
                    {...itemsData.eventActions}
                  />
                </div>
              </>
            } 
          />
          <Route 
            path="/promotions" 
            element={
              <>
                <Header 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                  onLogout={handleLogout} 
                />
                <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                  <SectionPage
                    title="Promotions"
                    items={itemsData.promos}
                    {...itemsData.promoActions}
                  />
                </div>
              </>
            } 
          />
          <Route 
            path="/articles" 
            element={
              <>
                <Header 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                  onLogout={handleLogout} 
                />
                <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                  <SectionPage
                    title="Articles"
                    items={itemsData.articles}
                    {...itemsData.articleActions}
                  />
                </div>
              </>
            } 
          />
          <Route 
            path="/mise-en-avant" 
            element={
              <>
                <Header 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                  onLogout={handleLogout} 
                />
                <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                  <SectionPage
                    title="Mise en avant"
                    items={itemsData.meas}
                    {...itemsData.meaActions}
                  />
                </div>
              </>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
