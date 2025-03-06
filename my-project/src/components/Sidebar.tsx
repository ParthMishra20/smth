import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, PlusCircle, Home, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-6 fixed left-0 top-0 shadow-xl">
      <div className="mb-12">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Eventique
        </h1>
      </div>
      
      <nav className="space-y-2">
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`
          }
        >
          <Home size={20} />
          <span className="font-medium">Home</span>
        </NavLink>

        <NavLink 
          to="/events" 
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`
          }
        >
          <Calendar size={20} />
          <span className="font-medium">Events</span>
        </NavLink>

        <NavLink 
          to="/create-event" 
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`
          }
        >
          <PlusCircle size={20} />
          <span className="font-medium">Create Event</span>
        </NavLink>
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button 
          onClick={() => {/* Implement logout */}} 
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-500 w-full transition-all duration-200"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;