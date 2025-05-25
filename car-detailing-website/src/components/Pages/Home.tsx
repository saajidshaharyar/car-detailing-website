import React, { Component } from 'react'
import Button from '../UI/Button'
import PricePlan from '../UI/PricePlan'
import {
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
} from 'lucide-react'
/*
 * Home Page Component
 *
 * Main landing page featuring:
 * - Hero section with video background
 * - Features showcase
 * - Pricing plans
 * - Call-to-action sections
 *
 * Development Timeline:
 * - Day 2: Initial hero section and layout
 * - Day 2: Added pricing plans integration
 * - Day 3: Implemented feature sections
 * - Day 4: Enhanced visual effects and animations
 */
const Home: React.FC = () => {
  // Pricing plan configuration data
  const pricePlans = [
    {
      title: 'Standard Detail',
      price: '59.99',
      description: 'Basic interior cleaning and maintenance package.',
      features: [
        {
          name: 'Dry Vacuum Interior',
          included: true,
        },
        {
          name: 'Car Mat Cleaning',
          included: true,
        },
        {
          name: 'Dashboard Clean',
          included: true,
        },
        {
          name: 'Windows Clean (From Inside)',
          included: true,
        },
        {
          name: 'Cupholders and Other Compartments such as Glove',
          included: true,
        },
        {
          name: 'Stain Removal on Seats (Wet Vacuum)',
          included: false,
        },
        {
          name: 'Stain Removal on Floor',
          included: false,
        },
        {
          name: 'Stain Removal on Other Areas such as Ceiling',
          included: false,
        },
        {
          name: 'Steam Wash for Interior',
          included: false,
        },
        {
          name: 'Full Exterior Wash',
          included: false,
        },
        {
          name: 'Complementary Car Scent',
          included: false,
        },
      ],
      popular: false,
    },
    {
      title: 'Advanced Detail',
      price: '84.99',
      description: 'Comprehensive interior cleaning with stain removal.',
      features: [
        {
          name: 'Dry Vacuum Interior',
          included: true,
        },
        {
          name: 'Car Mat Cleaning',
          included: true,
        },
        {
          name: 'Dashboard Clean',
          included: true,
        },
        {
          name: 'Windows Clean (From Inside)',
          included: true,
        },
        {
          name: 'Cupholders and Other Compartments such as Glove',
          included: true,
        },
        {
          name: 'Stain Removal on Seats (Wet Vacuum)',
          included: true,
        },
        {
          name: 'Stain Removal on Floor',
          included: true,
        },
        {
          name: 'Stain Removal on Other Areas such as Ceiling',
          included: true,
        },
        {
          name: 'Steam Wash for Interior',
          included: false,
        },
        {
          name: 'Full Exterior Wash',
          included: false,
        },
        {
          name: 'Complementary Car Scent',
          included: false,
        },
      ],
      popular: true,
    },
    {
      title: 'Premium Detail',
      price: '125.99',
      description: 'Complete interior and exterior detailing experience.',
      features: [
        {
          name: 'Dry Vacuum Interior',
          included: true,
        },
        {
          name: 'Car Mat Cleaning',
          included: true,
        },
        {
          name: 'Dashboard Clean',
          included: true,
        },
        {
          name: 'Windows Clean (From Inside)',
          included: true,
        },
        {
          name: 'Cupholders and Other Compartments such as Glove',
          included: true,
        },
        {
          name: 'Stain Removal on Seats (Wet Vacuum)',
          included: true,
        },
        {
          name: 'Stain Removal on Floor',
          included: true,
        },
        {
          name: 'Stain Removal on Other Areas such as Ceiling',
          included: true,
        },
        {
          name: 'Steam Wash for Interior',
          included: true,
        },
        {
          name: 'Full Exterior Wash',
          included: true,
        },
        {
          name: 'Complementary Car Scent',
          included: true,
        },
      ],
      popular: false,
    },
  ]
  return (
    <div className="w-full">
      {/* Hero Section with Large Logo */}
      <section className="relative h-screen overflow-hidden">
        {/* Replace video with gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary-900"></div>
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="mb-8">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/kjWvGrSpLTXRHDYZufFMty/Professional_ARS_Logo_for_Detailing_Services.png"
              alt="ARS Auto-Detailing"
              className="h-40 w-auto mx-auto mb-6"
            />
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display tracking-wider">
              AUTO-DETAILING
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto font-accent">
            Experience the ultimate in automotive care with our professional
            detailing services.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button
              to="/contact"
              size="lg"
              className="text-lg px-10 font-heading"
            >
              Book Now <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Button>
            <Button
              to="/gallery"
              variant="outline"
              size="lg"
              className="text-lg px-10 !bg-white !text-primary-600 border-primary-600 hover:!bg-primary-600 hover:!text-white font-heading"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
      {/* Features Section: Key benefits and services */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-display text-primary-600">
              Why Choose ARS Auto-Detailing?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-heading">
              We pride ourselves on providing exceptional service and results
              that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <StarIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Detailers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team consists of certified professionals with years of
                experience in the auto detailing industry.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use only the highest quality, professional-grade products
                that are safe for your vehicle and the environment.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Convenient Service</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Flexible scheduling options and efficient service to get you
                back on the road with minimal downtime.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-24 bg-gradient-radial from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-display text-primary-600">
              Our Detailing Packages
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-heading">
              Choose the perfect package for your vehicle's needs.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {pricePlans.map((plan, index) => (
              <div key={index}>
                <PricePlan
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  popular={plan.popular}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Updated CTA Section */}
      <section className="py-24 bg-black text-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 font-display text-primary-500">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light text-gray-200">
            Book your appointment today and experience the ARS Auto-Detailing
            difference.
          </p>
          <Button
            to="/contact#booking-form"
            size="lg"
            variant="primary"
            className="text-lg px-10"
          >
            Book Your Detail Now
          </Button>
        </div>
        {/* Optional: Add subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-800"></div>
      </section>
    </div>
  )
}
export default Home
