import React, { Component } from 'react'
import Button from './Button'
import { CheckIcon, XIcon } from 'lucide-react'
/*
 * PricePlan Component
 *
 * Displays service package information:
 * - Package title and price
 * - Feature list with checkmarks
 * - Optional "popular" highlight
 * - Booking button
 *
 * Development Timeline:
 * - Day 2: Basic pricing card structure
 * - Day 2: Added feature list with icons
 * - Day 3: Implemented popular variant
 * - Day 4: Enhanced animations and styling
 */
interface PricePlanProps {
  title: string
  price: string
  description: string
  features: Array<{
    name: string
    included: boolean
  }>
  popular?: boolean
}
const PricePlan: React.FC<PricePlanProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
}) => {
  const handleSelectPackage = () => {
    // Store selected package in localStorage
    localStorage.setItem('selectedPackage', title)
  }
  return (
    <div
      className={`
        relative rounded-xl overflow-hidden border transition-all duration-300
        ${popular ? 'border-primary-500 shadow-xl scale-105 bg-black text-white dark:bg-white dark:text-black' : 'border-gray-200 hover:border-primary-500 hover:shadow-lg bg-white dark:bg-black dark:text-white'}
      `}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary-600 text-white py-2 px-4 text-sm font-display tracking-wider rounded-bl-xl">
          MOST POPULAR
        </div>
      )}
      <div className="p-8">
        <h3 className="text-3xl font-display tracking-wide mb-2">{title}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-5xl font-display tracking-wider text-primary-500">
            ${price}
          </span>
        </div>
        <p
          className={`mb-8 ${popular ? 'text-gray-300 dark:text-gray-600' : 'text-gray-600 dark:text-gray-300'}`}
        >
          {description}
        </p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              ) : (
                <XIcon className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              )}
              <span
                className={
                  popular
                    ? 'text-gray-300 dark:text-gray-600'
                    : 'text-gray-600 dark:text-gray-300'
                }
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          fullWidth
          to="/contact#booking-form"
          size="lg"
          className="font-display tracking-wider"
          onClick={handleSelectPackage}
        >
          SELECT PACKAGE
        </Button>
      </div>
    </div>
  )
}
export default PricePlan
