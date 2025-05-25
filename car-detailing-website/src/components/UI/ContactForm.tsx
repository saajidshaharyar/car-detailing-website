import React, { Component } from 'react'
import Button from './Button'
/*
 * ContactForm Component
 *
 * Booking form for detailing services:
 * - Customer information collection
 * - Service package selection
 * - Appointment scheduling
 * - Form validation
 *
 * Development Timeline:
 * - Day 3: Initial form structure
 * - Day 3: Added form validation
 * - Day 4: Enhanced styling and responsiveness
 * - Day 4: Integrated with Button component
 *
 * Note: Form submission is currently a placeholder.
 * Integration with a backend service would be required
 * for actual form processing.
 */
const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would be implemented here
    alert('Form submitted! This would connect to your backend.')
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-400 dark:focus:border-blue-400"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-400 dark:focus:border-blue-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-400 dark:focus:border-blue-400"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-400 dark:focus:border-blue-400"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1">
          Service Package
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-400 dark:focus:border-blue-400"
        >
          <option value="">Select a package</option>
          <option value="standard">Standard Detail</option>
          <option value="advanced">Advanced Detail</option>
          <option value="premium">Premium Detail</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Preferred Date/Time & Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-400 dark:focus:border-blue-400"
          placeholder="Please provide your preferred date and time for service, along with any additional information about your vehicle."
        ></textarea>
      </div>
      <Button type="submit" variant="primary" size="lg">
        Submit Request
      </Button>
    </form>
  )
}
export default ContactForm
