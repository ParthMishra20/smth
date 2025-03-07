import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Event } from '../types/event';
import { MOCK_EVENTS } from './Events';
import ShareDialog from '../components/ShareDialog';

const EventDetails = () => {
  const { id } = useParams();
  const event = MOCK_EVENTS.find(e => e.id === id);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

  if (!event) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-900">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="relative h-96">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
            <div className="flex items-center text-white/90">
              <User className="w-5 h-5 mr-2" />
              <span>Organized by {event.organizer}</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Calendar className="w-6 h-6 text-indigo-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium text-gray-900">{event.date}</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Clock className="w-6 h-6 text-indigo-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium text-gray-900">{event.time}</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <MapPin className="w-6 h-6 text-indigo-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-900">{event.location}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About this event</h2>
            <p className="text-gray-600 leading-relaxed">{event.description}</p>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="btn-primary flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium">
              Register Now
            </button>
            <button 
              onClick={() => setIsShareDialogOpen(true)}
              className="flex-1 border border-gray-200 hover:border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium transition-all duration-200"
            >
              Share Event
            </button>
          </div>
        </div>
      </div>

      <ShareDialog
        isOpen={isShareDialogOpen}
        onClose={() => setIsShareDialogOpen(false)}
        eventId={event.id}
      />
    </div>
  );
};

export default EventDetails;