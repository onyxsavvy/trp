"use client";

import { useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    requests: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hi TRP - The Rooftop Project! I'd like to reserve a table.
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
${formData.requests ? `Special Requests: ${formData.requests}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919607384000?text=${encodedMessage}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto mt-12 bg-cream-50 rounded-2xl shadow-xl overflow-hidden border border-cream-border">
      <div className="p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink-600 mb-2 font-sans uppercase tracking-wide">Your Name</label>
            <input 
              required
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-cream-100 border-b-2 border-cream-border px-4 py-3 text-ink-900 focus:outline-none focus:border-terracotta transition-colors font-sans"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-ink-600 mb-2 font-sans uppercase tracking-wide">Phone Number</label>
            <input 
              required
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-cream-100 border-b-2 border-cream-border px-4 py-3 text-ink-900 focus:outline-none focus:border-terracotta transition-colors font-sans"
              placeholder="+91 00000 00000"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-ink-600 mb-2 font-sans uppercase tracking-wide">Date</label>
            <input 
              required
              type="date" 
              id="date" 
              name="date"
              value={formData.date}
              onChange={handleChange} 
              className="w-full bg-cream-100 border-b-2 border-cream-border px-4 py-3 text-ink-900 focus:outline-none focus:border-terracotta transition-colors font-sans"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-ink-600 mb-2 font-sans uppercase tracking-wide">Time</label>
              <input 
                required
                type="time" 
                id="time" 
                name="time"
                value={formData.time}
                onChange={handleChange} 
                className="w-full bg-cream-100 border-b-2 border-cream-border px-4 py-3 text-ink-900 focus:outline-none focus:border-terracotta transition-colors font-sans"
              />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-ink-600 mb-2 font-sans uppercase tracking-wide">Guests</label>
              <select 
                id="guests" 
                name="guests"
                value={formData.guests}
                onChange={handleChange} 
                className="w-full bg-cream-100 border-b-2 border-cream-border px-4 py-3 text-ink-900 focus:outline-none focus:border-terracotta transition-colors font-sans appearance-none"
              >
                {[1,2,3,4,5,6,7,8,9,10, "10+"].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <label htmlFor="requests" className="block text-sm font-medium text-ink-600 mb-2 font-sans uppercase tracking-wide">Special Requests (Optional)</label>
          <textarea 
            id="requests" 
            name="requests"
            value={formData.requests}
            onChange={handleChange} 
            rows={3}
            className="w-full bg-cream-100 border-b-2 border-cream-border px-4 py-3 text-ink-900 focus:outline-none focus:border-terracotta transition-colors font-sans resize-none"
            placeholder="Anniversary, window seat, dietary requirements..."
          ></textarea>
        </div>
        
        <div className="text-center">
          <button 
            type="submit" 
            className="inline-flex items-center justify-center px-12 py-5 bg-terracotta text-cream-50 font-medium rounded-full hover:bg-oxblood hover:scale-[1.02] transition-all duration-300 shadow-xl uppercase tracking-wider text-sm w-full md:w-auto"
          >
            Confirm via WhatsApp
          </button>
          <p className="mt-4 text-sm text-ink-600 font-sans">You will be redirected to WhatsApp to complete your reservation.</p>
        </div>
      </div>
    </form>
  );
}
