import React from 'react';
import { User, Mail } from 'lucide-react';

const UserProfile = () => {
  // Mock user data (will be replaced with real data from backend)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joinedDate: '2024-01-01'
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
          <User size={32} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{user.name}</h3>
          <div className="flex items-center text-gray-400">
            <Mail size={16} className="mr-2" />
            <span>{user.email}</span>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-400">
        Member since {new Date(user.joinedDate).toLocaleDateString()}
      </div>
    </div>
  );
};

export default UserProfile;