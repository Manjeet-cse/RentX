import React from 'react'

const MyBookings = ({ bookings }) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">My Bookings</h1>
          <p className="text-lg text-slate-500">Review your reserved vehicles and upcoming rental dates.</p>
        </div>

        {bookings.length === 0 ? (
          <div className="rounded-3xl bg-white shadow-sm border border-slate-200 p-12 text-center">
            <p className="text-xl font-medium text-slate-600">You have no bookings yet.</p>
            <p className="mt-3 text-slate-500">Book a car to see it appear here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {bookings.map((booking, index) => (
              <article key={index} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)]">
                  <div className="h-72 md:h-auto overflow-hidden bg-slate-100">
                    <img src={booking.car.image} alt={booking.car.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{booking.car.name}</h2>
                        <p className="mt-1 text-sm text-slate-500">{booking.car.category} • {booking.car.year}</p>
                      </div>
                      <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 self-start">
                        ${booking.car.price}/day
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Pickup</p>
                        <p className="font-semibold text-slate-900">{booking.pickupDate}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Return</p>
                        <p className="font-semibold text-slate-900">{booking.returnDate}</p>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Seats</p>
                        <p className="font-semibold text-slate-900">{booking.car.seats}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Fuel</p>
                        <p className="font-semibold text-slate-900">{booking.car.fuel}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Transmission</p>
                        <p className="font-semibold text-slate-900">{booking.car.transmission}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Location</p>
                        <p className="font-semibold text-slate-900">{booking.car.location}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 text-blue-600 px-3 py-2 text-sm font-semibold">
                        <span className="text-sm">✓</span> Confirmed
                      </span>
                      <span className="text-sm text-slate-500">Booking #{index + 1}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyBookings
