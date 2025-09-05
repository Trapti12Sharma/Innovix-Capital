// src/components/common/ContactFormSection.jsx
import React from "react";

const ContactFormSection = () => {
  return (
    <div className="w-full px-4 py-12 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Get in touch
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Your name</label>
          <input
            type="text"
            placeholder="Enter Your Name.."
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Are you an existing client?
          </label>
          <div className="flex space-x-2">
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              NO
            </button>
            <button
              type="button"
              className="bg-gray-200 text-black px-4 py-2 rounded"
            >
              YES
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Your contact number</label>
          <div className="flex">
            <select className="border rounded-l px-3 py-2">
              <option value="+1">+1</option>
              <option value="+91">+91</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              placeholder="201-555-0123"
              className="w-full border px-4 py-2 rounded-r"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Email address</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Topic</label>
          <select className="w-full border px-4 py-2 rounded">
            <option>Please select an item in the list</option>
            <option>General Inquiry</option>
            <option>Technical Support</option>
            <option>Account Issue</option>
          </select>
        </div>

        <div className="flex items-start space-x-2">
          <input type="checkbox" className="mt-1" />
          <p className="text-sm">
            I agree to be contacted by FinFlyMarkets via email/phone about
            products and offers. I’ve read and accepted terms.
          </p>
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Submit Your Enquiry →
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;
