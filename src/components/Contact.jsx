import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] to-100% py-28">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        <form className="space-y-6">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md py-3 px-6 focus:outline-none focus:border-blue-400 shadow-sm" placeholder="Enter your name" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md py-3 px-6 focus:outline-none focus:border-blue-400 shadow-sm" placeholder="Enter your email" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md py-3 px-6 focus:outline-none focus:border-blue-400 shadow-sm" placeholder="Enter your message"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600 transition duration-300 shadow-md">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
