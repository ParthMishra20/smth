import React from 'react';
import EventCard from '../components/EventCard';
import { Event } from '../types/event';
import { Search, Filter } from 'lucide-react';

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    date: '2024-04-15',
    time: '09:00',
    location: 'San Francisco Convention Center',
    description: 'Join us for the biggest tech conference of the year featuring keynotes from industry leaders, workshops, and networking opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    organizer: 'Tech Events Inc'
  },
  {
    id: '2',
    title: 'Music Festival',
    date: '2024-05-20',
    time: '16:00',
    location: 'Central Park',
    description: 'A day filled with live performances from top artists, food vendors, and art installations.',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    organizer: 'Festival Productions'
  },
];

const Events = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Upcoming Events</h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full sm:w-64 pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
            />
          </div>
          <div className="relative flex-1 sm:flex-none">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select className="w-full sm:w-48 pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 appearance-none bg-white">
              <option value="">All Categories</option>
              <option value="tech">Tech</option>
              <option value="music">Music</option>
              <option value="art">Art</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_EVENTS.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;