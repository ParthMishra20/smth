import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AuthForm from './components/AuthForm';
import Events from './pages/Events';
import CreateEvent from './pages/CreateEvent';

function App() {
  // This will be connected to AWS Cognito later
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuth = (data: { email: string; password: string }) => {
    console.log('Auth data:', data);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AuthForm mode="login" onSubmit={handleAuth} />;
  }

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to="/events" replace />} />
            <Route path="/events" element={<Events />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;