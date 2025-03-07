import React from 'react';
import EventCard from '../components/EventCard';
import { MOCK_EVENTS } from './Events';

const Home = () => {
  // Mock registered events (will be replaced with real data from backend)
  const registeredEvents = MOCK_EVENTS.slice(0, 1);

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Here are your registered events</p>
      </div>

      {registeredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {registeredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No registered events yet</h2>
          <p className="text-gray-600">Browse our events and register for ones that interest you!</p>
        </div>
      )}
    </div>
  );
};

export default Home;