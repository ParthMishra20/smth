import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, MapPin, Image, FileText } from 'lucide-react';

const eventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  location: z.string().min(1, 'Location is required'),
  description: z.string().min(1, 'Description is required'),
  imageUrl: z.string().url('Must be a valid URL'),
});

type EventFormData = z.infer<typeof eventSchema>;

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = (data: EventFormData) => {
    // This will be connected to AWS backend later
    console.log(data);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Create New Event</h1>
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                {...register('title')}
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200"
                placeholder="Enter event title"
              />
            </div>
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  {...register('date')}
                  className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200"
                />
              </div>
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="time"
                  {...register('time')}
                  className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200"
                />
              </div>
              {errors.time && (
                <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                {...register('location')}
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200"
                placeholder="Enter event location"
              />
            </div>
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <div className="relative">
              <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="url"
                {...register('imageUrl')}
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200"
                placeholder="Enter image URL"
              />
            </div>
            {errors.imageUrl && (
              <p className="mt-1 text-sm text-red-600">{errors.imageUrl.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              {...register('description')}
              rows={4}
              className="block w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200"
              placeholder="Enter event description"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;