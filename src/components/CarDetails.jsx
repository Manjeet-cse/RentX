import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { cars } from '../data/cars';

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id)) || cars[0];

  const [pickupDate, setPickupDate] = useState('2026-05-11');
  const [returnDate, setReturnDate] = useState('2026-05-29');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/cars" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors mb-6 font-medium">
          <span className="mr-2 text-lg">←</span>
          Back to all cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column (Details) */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-8 h-[400px] md:h-[500px]">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
            </div>

            {/* Title & Category */}
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{car.name}</h1>
            <p className="text-lg text-slate-500 mb-8 font-medium">{car.category} • {car.year}</p>

            <div className="border-t border-slate-200 mb-8"></div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-slate-50 p-5 rounded-xl flex flex-col items-center justify-center text-center">
                <span className="text-2xl mb-2">👤</span>
                <span className="font-semibold text-slate-900 text-sm">{car.seats} Seats</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl flex flex-col items-center justify-center text-center">
                <span className="text-2xl mb-2">⛽</span>
                <span className="font-semibold text-slate-900 text-sm">{car.fuel}</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl flex flex-col items-center justify-center text-center">
                <span className="text-2xl mb-2">⚙️</span>
                <span className="font-semibold text-slate-900 text-sm">{car.transmission}</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl flex flex-col items-center justify-center text-center">
                <span className="text-2xl mb-2">📍</span>
                <span className="font-semibold text-slate-900 text-sm">{car.location}</span>
              </div>
            </div>

            {/* Description */}
            <h2 className="text-xl font-bold text-slate-900 mb-4">Description</h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-10">
              The {car.name} is a mid-size luxury sedan produced by {car.name.split(' ')[0]}. The Corolla made its debut in 2008 as the first sedan ever produced by {car.name.split(' ')[0]}.
            </p>

            {/* Features */}
            <h2 className="text-xl font-bold text-slate-900 mb-4">Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 font-medium">
              <li className="flex items-center"><span className="text-blue-500 mr-3 font-bold text-lg">✓</span> Bluetooth Connectivity</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3 font-bold text-lg">✓</span> Backup Camera</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3 font-bold text-lg">✓</span> Cruise Control</li>
              <li className="flex items-center"><span className="text-blue-500 mr-3 font-bold text-lg">✓</span> Navigation System</li>
            </ul>
          </div>

          {/* Right Column (Booking Widget) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 sticky top-32">
              <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-6">
                <div>
                  <span className="text-3xl font-bold text-slate-900">${car.price}</span>
                </div>
                <div className="text-slate-500 font-medium text-sm mb-1">per day</div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">Pickup Date</label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all bg-white font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">Return Date</label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all bg-white font-medium"
                  />
                </div>

                <button className="w-full bg-[#3b6df6] hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 mt-4">
                  Book Now
                </button>

                <p className="text-center text-xs text-slate-500 font-medium mt-4">
                  No credit card required to reserve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
