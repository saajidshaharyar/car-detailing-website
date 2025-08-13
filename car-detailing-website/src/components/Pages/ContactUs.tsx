/**
 * ContactUs.tsx
 * 
 * This component renders the full Contact Us page of the car detailing website.
 * It includes:
 *  - A hero banner for branding
 *  - A booking form for appointments
 *  - Static contact information (phone, email, location, hours)
 *  - A collapsible FAQ section dynamically rendered from categorized data
 *
 * The page uses Tailwind CSS for styling and React state to manage FAQ toggles.
 */
import React, { useEffect } from 'react';
import ContactForm from '../UI/ContactForm';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  ChevronDown,
} from 'lucide-react';

// FAQ content structured by category (Service, Pricing, Products)
const faqs = {
  Service: [
    {
      question: 'Do you service apartment buildings?',
      answer: 'Only if you can provide a space for us to work. Otherwise, we recommend coming to our location if it’s available.'
    },
    {
      question: 'Do I need to provide water or electricity?',
      answer: 'We bring our own water and power. If you offer buckets or supplies, discounts may apply.'
    },
    {
      question: 'How long does a full detail take?',
      answer: 'Typically 1.5 to 3 hours depending on the condition of the vehicle.'
    },
    {
      question: 'Will sending pictures help?',
      answer: 'Yes! It speeds up our preparation and helps us bring the right tools.'
    }
  ],
  Pricing: [
    {
      question: 'Are your prices fixed?',
      answer: 'We offer flexible pricing — services can be mixed and matched across packages for custom quotes.'
    },
    {
      question: 'What can increase or lower the price?',
      answer: 'Severity of stains, material type, or distance from our zone may affect pricing slightly. We never exceed $10 for travel fees within the GTA.'
    },
    {
      question: 'What’s your refund policy?',
      answer: 'Refunds apply only if a promised service was not delivered. Stains requiring more than two washes may incur extra charges or be excluded with partial pricing.'
    },
    {
      question: 'Do you accept cash or card?',
      answer: 'We accept both cash and e-transfer. Card processing is coming soon!'
    }
  ],
  Products: [
    {
      question: 'What do you use for fabric seats?',
      answer: 'We dry and wet vacuum, apply diluted soap + water solution, then brush gently.'
    },
    {
      question: 'What about leather seats?',
      answer: 'We dry vacuum and use a pH-safe leather cleaner — no excess moisture involved.'
    },
    {
      question: 'How do you clean rubber or fabric mats?',
      answer: 'Fabric mats get shampooed and protected. Rubber mats are vacuumed, washed with rubber-safe soap, and finished with non-slippery protectant.'
    }
  ]
};

// Main functional component for the Contact Us page
const ContactUs: React.FC = () => {
  useEffect(() => {
    document.title = "The Neighbourhood Detailer - Contact Us";
  }, []);
  // State to track which FAQ section is open
  const [openIndex, setOpenIndex] = React.useState<string | null>(null);
  // Toggles open/close state of a specific FAQ item
  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20 transition-all duration-300">
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white">
        <div className="container mx-auto p-12 lg:p-20 text-center max-w-3xl">
          <h1 className="text-5xl font-accent tracking-widest uppercase mb-6">Get In Touch</h1>
          <p className="text-xl font-sans">
            Ready to transform your vehicle? Connect with our expert team today.
          </p>
        </div>
      </section>

      {/* Booking + Info */}
      <section id="booking-form" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-heading tracking-wide mb-6 text-primary-500">Book Your Appointment</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 font-heading">
              Schedule your detailing service. We'll confirm within 24 hours.
            </p>
            <ContactForm />
          </div>

          <div className="lg:pl-12 animate-fadeIn">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Have questions or prefer to speak with someone directly? Use the information below to reach out to our team.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="tel:+16475076121" className="hover:text-blue-600 dark:hover:text-blue-400">(647) 507-6121</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <MailIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:theneighbourhooddetailers@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">theneighbourhooddetailers@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Anywhere in the GTA (Greater Toronto Area)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">Contact us through Form or Phone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-accent font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions (FAQ)</h2>
          {Object.entries(faqs).map(([category, items]) => (
            <div key={category} className="mb-10">
              <h3 className="text-3xl font-bold italic text-primary-500 font-heading mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{category}</h3>
              <div className="space-y-4">
                {items.map((item, index) => {
                  const key = `${category}-${index}`;
                  return (
                    <div key={key} className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex justify-between items-center px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                      >
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.question}</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform ${openIndex === key ? 'rotate-180' : ''}`} />
                      </button>
                      {openIndex === key && (
                        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;