import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { cars as carsData } from '../data/cars';
const Cars = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCars = carsData.filter(car => {
    const query = searchQuery.toLowerCase();
    return (
      car.name.toLowerCase().includes(query) ||
      car.category.toLowerCase().includes(query) ||
      car.fuel.toLowerCase().includes(query) ||
      car.transmission.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Header  */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Available Cars
        </h1>
        <p className="text-lg text-slate-500 mb-10">
          Browse our selection of premium vehicles available for your next adventure
        </p>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <span className="text-xl">🔍</span>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-14 py-4 bg-white border-0 shadow-sm rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-base"
            placeholder="Search by make, model, or features"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer rounded-full hover:bg-slate-100">
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-slate-500 font-medium">Showing {filteredCars.length} Cars</p>
        </div>

        {/* Cars*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <Link to={`/car-details/${car.id}`} key={car.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group block">
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {car.available && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                    Available Now
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md text-white px-4 py-1.5 rounded-xl font-semibold text-sm shadow-md">
                  ${car.price} <span className="text-slate-300 text-xs font-normal">/ day</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{car.name}</h3>
                <p className="text-sm text-slate-500 mb-6 font-medium">
                  {car.category} • {car.year}
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-sm text-slate-600 font-medium">
                  <div className="flex items-center gap-2.5">
                    <span>👤</span>
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span>⛽</span>
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span>⚙️</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span>📍</span>
                    <span className="truncate">{car.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;