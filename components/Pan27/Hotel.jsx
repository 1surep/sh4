"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Star, DollarSign } from "lucide-react";
import { IoArrowBackOutline } from "react-icons/io5";

const Hotel = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const hotels = [
    {
      name: "Radisson Blu Mammy Yoko Hotel",
      category: "Luxury",
      distance: "5 km from Main Venue",
      price: "$150 - $250 per night",
      image: "/hotels/hotel1.jpg", // Update with actual image path
      phone: "+232 76 123 456",
      email: "info@radisson-freetown.com",
      rating: 5,
      amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Gym"],
    },
    {
      name: "Bintumani Hotel",
      category: "Mid-Range",
      distance: "3 km from Main Venue",
      price: "$80 - $130 per night",
      image: "/hotels/hotel2.jpg", // Update with actual image path
      phone: "+232 76 234 567",
      email: "info@bintumani.com",
      rating: 4,
      amenities: ["WiFi", "Restaurant", "Bar", "Conference Room"],
    },
    {
      name: "Lagoonda Complex",
      category: "Budget",
      distance: "2 km from Main Venue",
      price: "$40 - $70 per night",
      image: "/hotels/hotel3.jpg", // Update with actual image path
      phone: "+232 76 345 678",
      email: "info@lagoonda.com",
      rating: 3,
      amenities: ["WiFi", "Restaurant", "Parking"],
    },
    // Add more hotels as needed
  ];

  return (
    <>
      {/* Main Content */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="min-h-screen pt-32 bg-gradient-to-br from-blue-50 to-green-50"
      >
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-green-700 to-blue-700 text-white py-16 px-[1rem] lg:px-[3rem]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-black flex items-center gap-3 justify-center uppercase mb-4">
            <IoArrowBackOutline className="animate-pulse" /> Hotels & Accommodation
            </h1>
            <p className="text-lg lg:text-xl opacity-90">
              Find the perfect place to stay during Pan Africa Hash 2027
            </p>
          </div>
        </div>

        {/* Hotels List */}
        <div className="px-[1rem] lg:px-[3rem] py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Hotel Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={hotel.image}
                    fill
                    alt={hotel.name}
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-800">
                    {hotel.category}
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {hotel.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-500 fill-yellow-500"
                        size={16}
                      />
                    ))}
                  </div>

                  {/* Distance */}
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin size={18} className="text-green-600" />
                    <span className="text-sm">{hotel.distance}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <DollarSign size={18} className="text-blue-600" />
                    <span className="text-sm font-semibold">{hotel.price}</span>
                  </div>

                  {/* Amenities */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone size={16} className="text-green-600" />
                      <a
                        href={`tel:${hotel.phone}`}
                        className="hover:text-green-600"
                      >
                        {hotel.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail size={16} className="text-blue-600" />
                      <a
                        href={`mailto:${hotel.email}`}
                        className="hover:text-blue-600"
                      >
                        {hotel.email}
                      </a>
                    </div>
                  </div>

                  {/* Book Button */}
                  <button className="mt-4 w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Booking Information
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                • All hotel bookings should be made directly with the hotel.
              </p>
              <p>
                • Mention "Pan Africa Hash 2027" when booking to get special
                rates.
              </p>
              <p>
                • Early booking is recommended as hotels fill up quickly during
                the event.
              </p>
              <p>
                • Transportation will be arranged from all official hotels to
                the main venue.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hotel;