import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../types/event';
import { useNavigate } from 'react-router-dom';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className="event-card bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
          <span className="text-sm text-white/80">By {event.organizer}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-3 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-3 text-indigo-600" />
            <span className="font-medium">{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-3 text-indigo-600" />
            <span className="font-medium">{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-3 text-indigo-600" />
            <span className="font-medium">{event.location}</span>
          </div>
        </div>
        <p className="mt-4 text-gray-600 line-clamp-3">{event.description}</p>
        <div className="mt-6">
          <button 
            onClick={() => navigate(`/event/${event.id}`)}
            className="btn-primary w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;