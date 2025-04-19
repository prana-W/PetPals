import React, { useState } from 'react';

function Adopt() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    petName: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We’ll reach out to you soon 🐶🐱');
    // Optionally clear form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      petName: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-12">
      <div className="w-full max-w-2xl bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-purple-400 mb-6">Adopt a Pet</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          <input
            type="text"
            name="petName"
            placeholder="Name of Pet You Wish to Adopt"
            value={formData.petName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Why would you like to adopt this pet?"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 dark:bg-purple-600 hover:bg-orange-600 dark:hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adopt;
