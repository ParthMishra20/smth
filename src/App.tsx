import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AuthForm from './components/AuthForm';
import Events from './pages/Events';
import CreateEvent from './pages/CreateEvent';
import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  // This will be connected to AWS Cognito later
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuth = (data: { email: string; password: string; name?: string }) => {
    console.log('Auth data:', data);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AuthForm onSubmit={handleAuth} />;
  }

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;