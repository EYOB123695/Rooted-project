import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Navbar,
  LandingPage,
  HomePage,
  InvestPage,
  HirePage,
  RegisterPage,
  LoginPage,
  SignupPage,
  Investmentinfo,  // Import Investmentinfo with the correct filename
  Searchforstartup, // Import Searchforstartup
  Footer
} from './components';

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
              <InvestPage />
            </>
          }
        />
        <Route
          path="/hire"
          element={
            <>
              
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
        <Route
          path="/investmentinfo"
          element={
            <>
              <Investmentinfo />
            </>
          }
        />
        <Route
          path="/searchforstartup"  // Add the route for Searchforstartup
          element={
            <>
              <Searchforstartup />
            </>
          }
        />
      </Routes>
    </div>
  </Router>
);

export default App;
