import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, LandingPage, HomePage, InvestPage, HirePage, RegisterPage, LoginPage, SignupPage } from './components';

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <HomePage />
            </>
          }
        />
        <Route
          path="/invest"
          element={
            <>
              <Navbar />
              <InvestPage />
            </>
          }
        />
        <Route
          path="/hire"
          element={
            <>
              <Navbar />
              <HirePage />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <RegisterPage />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
