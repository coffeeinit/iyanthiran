import React, { useEffect, useState } from 'react';
import eventsData from '../data/events.json';
import { Calendar, Users, ArrowRight, Star, CheckCircle, Phone, Mail } from 'lucide-react';

const iconMap: any = { Star: <Star className="h-12 w-12 text-gray-400" />, Users: <Users className="h-12 w-12 text-gray-400" />, CheckCircle: <CheckCircle className="h-12 w-12 text-gray-400" /> };

const getLocalEvents = () => {
  const local = localStorage.getItem('events');
  return local ? JSON.parse(local) : eventsData;
};

const Events = () => {
  const [events, setEvents] = useState(getLocalEvents());

  useEffect(() => {
    const onStorage = () => setEvents(getLocalEvents());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const liveEvents = events.filter((ev: any) => ev.type === 'live' && ev.visibility);
  const pastEvents = events.filter((ev: any) => ev.type === 'past' && ev.visibility);

  return (
    <div>
      {/* Hero Section 
   <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming Business Events
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Events</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Join us at industry-leading events and trade exhibitions to expand your business network and explore new opportunities.
            </p>
          </div>
        </div>
      </section> */}

      {/* Live Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Live Events</h2>
            <p className="text-xl text-gray-700">Don't miss these exciting upcoming opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveEvents.length === 0 && <div className="col-span-full text-center text-gray-500">No live events at the moment.</div>}
            {liveEvents.map((ev: any) => (
              <div key={ev.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gray-100 rounded-xl  mb-7 flex items-center justify-center overflow-hidden">
                  {ev.image ? (
                    <img src={ev.image} alt={ev.title} className="w-full h-full  rounded-xl" />
                  ) : (
                    <img src="https://placehold.co/600x400" alt={ev.title} className="w-full h-full object-cover rounded-xl" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ev.title}</h3>
                <p className="text-gray-700 mb-4">{ev.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{ev.date}</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {ev.registerUrl && (
                    <a href={ev.registerUrl} target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">Register</a>
                  )}
                  {ev.knowMoreUrl && (
                    <a href={ev.knowMoreUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Know More</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-xl text-gray-700">Successful events we've organized and participated in</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.length === 0 && <div className="col-span-full text-center text-gray-500">No past events yet.</div>}
            {pastEvents.map((ev: any) => (
              <div key={ev.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
               <div className="bg-gray-100 rounded-xl  mb-7 flex items-center justify-center overflow-hidden">
                  {ev.image ? (
                    <img src={ev.image} alt={ev.title} className="w-full h-full  rounded-xl" />
                  ) : (
                    <img src="https://placehold.co/1080x1080" alt={ev.title} className="w-full h-full  rounded-xl" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ev.title}</h3>
                <p className="text-gray-700 mb-4">{ev.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                  <span>{ev.date}</span>
              </div>
                <div className="flex gap-2 mt-2">
                  {ev.registerUrl && (
                    <a href={ev.registerUrl} target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">Register</a>
                  )}
                  {ev.knowMoreUrl && (
                    <a href={ev.knowMoreUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Know More</a>
                  )}
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Events */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in Our Events?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Contact us for event participation, sponsorship opportunities, or to organize your own event.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <div className="flex items-center space-x-3 text-white">
              <Phone className="h-6 w-6" />
              <span className="font-medium">Call for immediate booking</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Mail className="h-6 w-6" />
              <span className="font-medium">Email for detailed information</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+919787030811"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;