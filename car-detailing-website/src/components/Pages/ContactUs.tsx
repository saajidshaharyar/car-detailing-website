import React, { Component } from 'react'
import ContactForm from '../UI/ContactForm'
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react'

const ContactUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white">
        <div className="container mx-auto">
          <div className="p-12 lg:p-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display tracking-wider mb-6">
                Get In Touch
              </h1>
              <p className="text-xl font-heading">
                Ready to transform your vehicle? Connect with our expert team
                today.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section - Added id for direct linking */}
      <section id="booking-form" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-display tracking-wide mb-6 text-primary-500">
                Book Your Appointment
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-heading">
                Schedule your detailing service. We'll confirm within 24 hours.
              </p>
              <ContactForm />
            </div>
            {/* Contact Information Display */}
            <div className="lg:pl-12 animate-fadeIn">
              <h2 className="text-3xl font-bold mb-6 font-heading text-gray-900 dark:text-white">
                Get In Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Have questions or prefer to speak with someone directly? Use the
                information below to reach out to our team.
              </p>
              <div className="space-y-6">
                {/* Contact info cards - updating background colors */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                      Phone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="tel:+11234567890"
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        123-456-7890
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="#"
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={(e) => {
                          e.preventDefault()
                          alert(
                            'This is a demo site. Email functionality would be implemented in production.',
                          )
                        }}
                      >
                        info@arsautodetailing.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      2000 Simcoe Street N
                      <br />
                      Oshawa, ON L1G 0C5
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Saturday: 9:00 AM - 9:00 PM
                      <br />
                      Sunday: 9:00 AM - 9:00 PM
                      <br />
                      Monday - Friday: Contact Us for Available Times
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading text-gray-900 dark:text-white">
              Find Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're conveniently located in the heart of Autoville. Stop by for
              a visit or to discuss your detailing needs in person.
            </p>
          </div>
          <div className="w-full h-96 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            {/* Map placeholder */}
            <iframe
            title="ARS Auto Detailing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.210742400978!2d-78.89775442387873!3d43.94493497109179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d50917767ec88b%3A0xd3c6110b55ab01e3!2s2000%20Simcoe%20St%20N%2C%20Oshawa%2C%20ON%20L1G%200C5!5e0!3m2!1sen!2sca!4v1716504514502!5m2!1sen!2sca"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContactUs