import React, { Suspense, lazy } from 'react';
// The declarations of AdditionalPage1, AdditionalPage2, NewComponent, HomePage, AboutPage, NotFoundPage, and HeavyComponent using React.lazy are proper for optimizing the application's performance. 
// This approach enables code-splitting, which allows these components to be loaded only when they are needed, rather than all at once during the initial load of the application. 
// This technique significantly improves the loading time and efficiency of the application, especially for users with slower internet connections or on mobile devices.
// The use of React.lazy here is a best practice for modern React applications aiming for performance optimization and a better user experience.

// Dynamically import additional components using React.lazy for code-splitting and performance optimization
const AdditionalPage1 = lazy(() => import('./components/AdditionalPage1.js'));
const AdditionalPage2 = lazy(() => import('./components/AdditionalPage2.js'));

const NewComponent = lazy(() => import('./components/NewComponent.js'));

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./components/HomePage.js'));
const AboutPage = lazy(() => import('./components/AboutPage.js'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage.js'));
const HeavyComponent = lazy(() => import('./components/HeavyComponent.js'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/heavy" element={<HeavyComponent />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
