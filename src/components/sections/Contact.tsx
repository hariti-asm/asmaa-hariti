import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-700">
              <Mail className="w-6 h-6" />
              <span>haritiasmae@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <Phone className="w-6 h-6" />
              <span>0782-789275</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <MapPin className="w-6 h-6" />
              <span>Morocco</span>
            </div>
          </div>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button variant="primary" type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}