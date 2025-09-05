import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const AddressCard = ({ title, address, phone, email }) => (
  <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="space-y-3 text-sm text-gray-700">
      <div className="flex items-start gap-2">
        <MapPin size={18} className="text-red-500 mt-1" />
        <span>{address}</span>
      </div>
      <div className="flex items-start gap-2">
        <Phone size={18} className="text-red-500 mt-1" />
        <span>{phone}</span>
      </div>
      <div className="flex items-start gap-2">
        <Mail size={18} className="text-red-500 mt-1" />
        <span>{email}</span>
      </div>
    </div>
  </div>
);

const MapAddressSection = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto rounded-md overflow-hidden shadow-sm bg-white">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19819.306315117383!2d-0.1351433!3d51.5143166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb1fbb2e91%3A0x36e9adf8f58df9f5!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sin!4v1721499695942!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        ></iframe>

        <div className="flex flex-col lg:flex-row justify-between gap-10 p-6">
          <AddressCard title="Address" address="" phone="" email="" />
          <AddressCard
            title="Registered Address"
            address=""
            phone=""
            email=""
          />
        </div>
      </div>
    </section>
  );
};

export default MapAddressSection;
