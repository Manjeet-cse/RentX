import React, { useState, useEffect } from 'react';

const carss = [
  {
    id: 1,
    name: "Toyota Corolla",
    category: "Sedan",
    year: 2021,
    price: 130,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1000",
    seats: 4,
    transmission: "Automatic",
    fuel: "Diesel",
    location: "Los Angeles",
    available: true
  },
  {
    id: 2,
    name: "BMW X5",
    category: "SUV",
    year: 2006,
    price: 300,
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=1000",
    seats: 4,
    transmission: "Semi-Automatic",
    fuel: "Hybrid",
    location: "New York",
    available: true
  },
  {
    id: 4,
    name: "Mercedes-Benz C-Class",
    category: "Sedan",
    year: 2022,
    price: 180,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Miami",
    available: true
  },
  {
    id: 5,
    name: "Audi Q7",
    category: "SUV",
    year: 2023,
    price: 350,
    image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1000",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    location: "Seattle",
    available: false
  },
  {
    id: 6,
    name: "Honda Civic",
    category: "Sedan",
    year: 2020,
    price: 90,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    location: "Austin",
    available: true
  },
  {
    id: 7,
    name: "Ford Mustang",
    category: "Coupe",
    year: 2021,
    price: 200,
    image: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Las Vegas",
    available: true
  }
];

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carss);
  }, []);

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
            className="block w-full pl-12 pr-14 py-4 bg-white border-0 shadow-sm rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-base"
            placeholder="Search by make, model, or features"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer rounded-full hover:bg-slate-100">
              <span className="text-xl">⚙️</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-slate-500 font-medium">Showing {cars.length} Cars</p>
        </div>

        {/* Cars*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;