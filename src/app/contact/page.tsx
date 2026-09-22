"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Employee Transportation",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email subject and body for mailto link
    const subject = encodeURIComponent(`New Inquiry/Booking from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Requested: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open user's default email client with pre-filled details
    window.location.href = `mailto:hibluesolutions@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us & Schedule a Booking</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Looking for Corporate or Industrial Security services in Bangalore? Schedule a booking or request a quote today. Our team will get back to you promptly.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="bg-[#0170B9] text-white p-10 lg:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-100 mb-10">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-blue-200 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Call Us</div>
                    <a href="tel:9902035353" className="text-blue-100 hover:text-white transition">+91 9902035353</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-blue-200 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Email Us</div>
                    <a href="mailto:info@hibluesolutions.in" className="text-blue-100 hover:text-white transition">info@hibluesolutions.in</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-blue-200 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Visit Us</div>
                    <p className="text-blue-100 leading-relaxed">
                      # 293, Bekkarle Complex 1st floor,<br/>
                      6th Main, 11th Block, Marilingappa Ext,<br/>
                      Nagarabhavi 2nd Stage,<br/>
                      Bengaluru, Karnataka 560072
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking / Quote Form */}
          <div className="p-10 lg:w-2/3">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Request a Quote / Booking</h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0170B9] focus:border-[#0170B9] outline-none transition" placeholder="John Doe" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0170B9] focus:border-[#0170B9] outline-none transition" placeholder="Your Company Ltd" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0170B9] focus:border-[#0170B9] outline-none transition" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</label>
                <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0170B9] focus:border-[#0170B9] outline-none transition" placeholder="+91 9876543210" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">Interested Service *</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0170B9] focus:border-[#0170B9] outline-none transition bg-white">
                  <option value="Employee Transportation">Employee Transportation Services</option>
                  <option value="Man Power Services">Man Power Services (Facility/Cafeteria/Electrical)</option>
                  <option value="Security Guards">Security Guards Services</option>
                  <option value="Tours and Travels">Tours & Travels / Package Trips</option>
                  <option value="Other">Other Query</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message / Requirements *</label>
                <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0170B9] focus:border-[#0170B9] outline-none transition resize-none" placeholder="Please describe your requirements..." />
              </div>

              <div className="md:col-span-2 mt-4">
                <button type="submit" className="w-full bg-[#0170B9] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#015891] transition flex items-center justify-center gap-2 shadow-lg">
                  <Send size={20} />
                  Send Request via Email
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Clicking send will open your default email client to securely send your inquiry to hibluesolutions@gmail.com.
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
