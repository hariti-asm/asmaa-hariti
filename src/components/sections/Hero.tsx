import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import ProfileImage from '../ui/images/asmaa2.jpeg';

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">
              Hariti Asmaa
              <span className="block text-blue-600">Java Developer</span>
            </h1>
            <p className="text-xl text-gray-600">
              Passionate Java developer specializing in building robust and scalable applications with Spring Boot. 
              Experienced in creating RESTful APIs, implementing microservices, and developing enterprise-level solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="primary" as="a" href="#projects">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="secondary" as="a" href="#contact">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="w-full h-auto relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
</div>
</div>
        </div>
      </div>
    </section>
  );
}