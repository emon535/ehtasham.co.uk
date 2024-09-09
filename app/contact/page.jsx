"use client"
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate a success response or an email API call here
    try {
      setStatus('Sending...');

      // Example: This could be where you send the data to an API or email service
      const response = await fetch("/api/send-email", { method: "POST", body: JSON.stringify(formData) });
      
      // Simulating email sent
      setTimeout(() => {
        setStatus('Email sent successfully!');
        setFormData({ email: '', message: '' });
      }, 2000);

    } catch (error) {
      setStatus('Failed to send email. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        
        <p className="text-lg text-brown-600 leading-relaxed text-center mb-8">
          Got a question or want to collaborate? Fill out the form below and we will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-brown-700 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-brown-200"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-brown-700 mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="6"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-brown-200"
              placeholder="Write your message here"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-brown-800 transition"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <div className={`mt-4 text-center font-medium ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
}
