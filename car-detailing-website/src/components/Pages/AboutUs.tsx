import React, { Component } from 'react'
import {
  UserIcon,
  StarIcon,
  AwardIcon,
  ThumbsUpIcon,
  SprayCan,
  Zap,
  Droplets,
} from 'lucide-react'
import Button from '../UI/Button'

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white">
        <div className="container mx-auto">
          <div className="p-12 lg:p-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display tracking-wider mb-6">
                About ARS Auto-Detailing
              </h1>
              <p className="text-xl font-heading">
                We are passionate about cars and committed to providing
                exceptional detailing services that exceed our customers'
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display tracking-wide mb-4 text-primary-500">
              Our Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-heading">
              These principles guide everything we do at ARS Auto-Detailing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Values cards - updating background colors */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for perfection in every detail, never cutting corners
                or compromising quality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Integrity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We operate with honesty and transparency in all our customer
                interactions and business practices.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <AwardIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We continuously research and adopt the latest techniques and
                products in the detailing industry.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUpIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Customer Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your satisfaction is our top priority, and we go above and
                beyond to meet your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* New About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-heading">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We're a passionate team of young car enthusiasts delivering
                top-tier detailing without the premium price tag. Our mission?
                Showroom results without the showroom markup. Using
                professional-grade equipment and expertise, we bring your
                vehicle back to life — because we believe in clean cars at
                better prices.
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg aspect-video w-full">
              {/* Image will be added here */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                Image Placeholder
              </div>
            </div>
          </div>
          {/* Tools Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Vacuum */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
                <Zap className="w-8 h-8 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Power Perfect
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                High-powered vacuum systems
              </p>
            </div>
            {/* Soap/Cleaner */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
                <SprayCan className="w-8 h-8 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Shine Supreme
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional cleaning solutions
              </p>
            </div>
            {/* Steamer */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
                <Droplets className="w-8 h-8 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Steam Dream
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deep steam cleaning technology
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the ARS Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your vehicle? Our team is standing by to provide
            you with exceptional detailing services.
          </p>
          <Button to="/contact" size="lg" variant="secondary">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  )
}
export default AboutUs
