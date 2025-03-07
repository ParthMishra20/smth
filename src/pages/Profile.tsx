import React from 'react';
import { Mail, Calendar, MapPin } from 'lucide-react';

const Profile = () => {
  // Mock user data (will be replaced with real data from backend)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joinedDate: '2024-01-01',
    location: 'San Francisco, CA',
    eventsAttended: 12,
    eventsOrganized: 3
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-48"></div>
        <div className="px-8 pb-8">
          <div className="flex flex-col items-center -mt-20">
            <div className="w-32 h-32 bg-white rounded-full p-2 shadow-lg">
              <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mt-4">{user.name}</h1>
            <div className="flex items-center text-gray-600 mt-2">
              <Mail className="w-4 h-4 mr-2" />
              <span>{user.email}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 rounded-xl p-6">
              <Calendar className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Member Since</h3>
              <p className="text-gray-600">{new Date(user.joinedDate).toLocaleDateString()}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <MapPin className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Location</h3>
              <p className="text-gray-600">{user.location}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Calendar className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Events</h3>
              <p className="text-gray-600">
                Attended: {user.eventsAttended} • Organized: {user.eventsOrganized}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;