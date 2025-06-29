import React, { useState, Component } from 'react'
import Button from '../UI/Button'
import PricePlan from '../UI/PricePlan'
import FeatureModal from '../UI/FeatureModal'
import Slider from 'react-slick'
import { motion } from 'framer-motion'

import {
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  CarIcon,
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
  const letterAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
}
// Utility to animate each character of a sentence using Framer Motion
const renderAnimatedText = (text: string, className = '') => (
  <div className={`flex flex-wrap justify-center text-center gap-x-4 ${className}`}>
    {text.split(' ').map((word, wordIndex) => (
      <div key={wordIndex} className="flex whitespace-nowrap mr-2">
        {word.split('').map((char, index) => (
          <motion.span
            key={`${wordIndex}-${index}`}
            custom={index + wordIndex * 10}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            className="inline-block"
            style={{ fontFamily: 'Cyber' }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    ))}
  </div>
)
// Custom navigation arrows for the React Slick slider
  const CustomNextArrow = (props: any) => {
    const { onClick } = props
    return (
      <div
        className="absolute top-1/2 right-[-2rem] transform translate-y-1/2 z-20 text-red-600 text-xl font-bold cursor-pointer select-none"
        onClick={onClick}
      >
        ❯
      </div>
    )
  }

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props
    return (
      <div
        className="absolute top-1/2 left-[-2rem] transform translate-y-1/2 z-20 text-red-600 text-xl font-bold cursor-pointer select-none"
        onClick={onClick}
      >
        ❮
      </div>
    )
  }
  const sliderSettings = {
    dots: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
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
          name: 'Tire and Rim Wash',
          included: false,
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
          name: 'Tire and Rim Wash',
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
          name: 'Tire and Rim Wash',
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
  // Tracks which feature box was clicked to display in the FeatureModal
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
  const features = [
    {
      icon: <StarIcon className="w-6 h-6 text-primary-500" />,
      title: 'Expert Detailers',
      description: `Our certified professionals bring years of experience and expertise to every vehicle. Each member of our team undergoes rigorous training in the latest detailing techniques and is equipped with professional-grade tools. We understand every vehicle is unique and requires specialized care.
      Our detailers are passionate about their craft and continuously update their skills to stay ahead of industry developments. From paint correction to interior restoration, our experts know exactly how to bring out the best in your vehicle.`,
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary-500" />,
      title: 'Premium Products',
      description: `We take pride in our specially formulated, homemade cleaning solutions perfect for all vehicle surfaces. Our proprietary blends are specifically designed for leather care, interior compartments, doorjams, and other delicate features. Safe for your vehicle and the environment, delivering superior results that last.
      Each product is carefully tested and refined to ensure it meets our high standards. We never use harsh chemicals that could damage your vehicle's surfaces, focusing instead on effective yet gentle solutions that protect while they clean.`,
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-primary-500" />,
      title: 'Convenient Service',
      description: `We understand your time is valuable. Our flexible scheduling adapts to your busy life, with early morning and weekend appointments available. Quick turnaround times without compromising on quality, because we believe exceptional service should fit your schedule.
      Our efficient processes ensure that your vehicle receives thorough attention while minimizing downtime. We respect your time and always aim to complete services within the agreed-upon timeframe.`,
    },
    {
      icon: <CarIcon className="w-6 h-6 text-primary-500" />,
      title: 'We Come to You',
      description: `Experience the ultimate in convenience with our mobile detailing service. As long as you have a suitable space (like a driveway) and access to power outlets, we bring our complete professional setup to your location. Perfect for busy professionals, work-from-home individuals, or anyone valuing their time.
      Our mobile service is fully equipped with everything needed for a complete detail, including our own water supply if needed. We ensure the same high-quality results whether we're working in our shop or your driveway.`,
    },
  ]
  // Update the feature boxes to be clickable and show modal
  const renderFeatureBox = (feature: (typeof features)[0], index: number) => (
    <div
      className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-pointer"
      onClick={() => setSelectedFeature(index)}
    >
      <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/10 rounded-full flex items-center justify-center mb-4">
        {feature.icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
        {feature.description.split('\n')[0]}
      </p>
    </div>
  )
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Large Logo */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full z-0"
        >
        <source src="/BackgroundFini.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
        {/* Replace video with gradient background */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="bg-black/60 rounded-2xl px-4 sm:px-10 py-12 shadow-2xl border border-white/10 backdrop-blur-sm w-full max-w-4xl mx-auto">
     {renderAnimatedText(
  'UNMATCHED QUALITY,',
  'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md',
)}

{renderAnimatedText(
  'DELIVERED TO YOUR DRIVEWAY',
  'text-red-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic mt-10',
)}

    <p className="text-3xl md:text-xl text-gray-200 mt-6 font-light tracking-wide max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'PARAX' }}>
              Premium mobile detailing designed for busy lives. <br className="hidden md:inline" />
              We bring showroom shine—right to your home or office.
     </p>
  </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              size="lg"
              className="min-w-[200px] text-lg px-6 font-edobrush" 
            >
              Book Now <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Button>
            <Button
              to="/gallery"
              variant="outline"
              size="lg"
              className="min-w-[200px] text-lg font-edobrush px-20 !bg-white !text-primary-600 border-primary-600 hover:!bg-primary-600 hover:!text-white"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
      {/* Features Section with enhanced sizing */}
      <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-500 leading-tight text-center sm:text-left px-2 sm:px-0">
                Why Choose PrestigeOnWheelz?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-2xl leading-relaxed">
                Experience luxury car care with our premium detailing services.
                We combine expertise, premium products, and meticulous attention
                to detail to deliver exceptional results.
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg">
                Swipe right to see a before and after example of our detailing work.{' '}
                <a
                  href="/gallery"
                  className="text-primary-500 hover:underline hover:text-primary-600 transition-colors"
                >
                  View More.
                </a>
              </p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <Slider {...sliderSettings}>
                <div>
                  <div className="transition-transform duration-300 ease-in-out hover:scale-105">
                   <img
                     src="/IMG_7082.jpeg"
                     alt="Before Wash"
                     className="rounded-lg object-cover w-full max-h-[500px] shadow-lg"
                   />
                  </div>
                </div>
                <div>
                  <div className="transition-transform duration-300 ease-in-out hover:scale-105">
                   <img
                     src="/IMG_6211 (1).jpeg"
                     alt="After Wash"
                     className="rounded-lg object-cover w-full max-h-[500px] shadow-lg"
                   />
                  </div> 
                </div>
              </Slider>
            </div>
          </div>
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left side features */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="bg-gray-50 dark:bg-gray-900 p-10 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-pointer"
                onClick={() => setSelectedFeature(0)}
              >
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/10 rounded-full flex items-center justify-center mb-6">
                  {features[0].icon}
                </div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {features[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {features[0].description.split('\n')[0]}
                </p>
              </div>
              <div
                className="bg-gray-50 dark:bg-gray-900 p-10 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-pointer"
                onClick={() => setSelectedFeature(1)}
              >
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/10 rounded-full flex items-center justify-center mb-6">
                  {features[1].icon}
                </div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {features[1].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {features[1].description.split('\n')[0]}
                </p>
              </div>
            </div>
            {/* Right side image */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[450px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 to-transparent rounded-lg blur-2xl"></div>
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/pwkpjT3eeVCkA8CrHArNkf/gwagon.png"
                alt="Luxury car detailing"
                className="relative w-full h-[450px] object-cover rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors duration-300"
              />
            </div>
          </div>
          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side image */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[450px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 to-transparent rounded-lg blur-2xl"></div>
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/54DzHub7WgksFXfo58GfC5/bmw.png"
                alt="Luxury BMW detailing"
                className="relative w-full h-[450px] object-cover rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors duration-300"
              />
            </div>
            {/* Right side features */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="bg-gray-50 dark:bg-gray-900 p-10 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-pointer"
                onClick={() => setSelectedFeature(2)}
              >
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/10 rounded-full flex items-center justify-center mb-6">
                  {features[2].icon}
                </div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {features[2].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {features[2].description.split('\n')[0]}
                </p>
              </div>
              <div
                className="bg-gray-50 dark:bg-gray-900 p-10 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-pointer"
                onClick={() => setSelectedFeature(3)}
              >
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/10 rounded-full flex items-center justify-center mb-6">
                  {features[3].icon}
                </div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {features[3].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {features[3].description.split('\n')[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Redesigned Services Section */}
      <section className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Interior Wash */}
          <div
            className="group relative cursor-pointer border-r border-primary-600"
            // Scroll to relevant pricing section when tile is clicked
            onClick={() => {
              document.getElementById('standard-package')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <div className="w-full h-full transition-all duration-500 group-hover:scale-110">
                <img
                  src="https://uploadthingy.s3.us-west-1.amazonaws.com/pVo4eANDhJhomPoENoC25X/interior.png"
                  alt="Interior Detailing"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-4xl font-bold text-white text-center font-display tracking-wider">
                  Interior Wash
                </h3>
              </div>
            </div>
          </div>
          {/* Tire and Rim Wash */}
          <div
            className="group relative cursor-pointer border-r border-primary-600"
            onClick={() => {
              document.getElementById('advanced-package')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <div className="w-full h-full transition-all duration-500 group-hover:scale-110">
                <img
                  src="https://uploadthingy.s3.us-west-1.amazonaws.com/t8rS3gq9pPEjb8m6XgcW8u/rim.png"
                  alt="Tire and Rim Detailing"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-4xl font-bold text-white text-center font-display tracking-wider">
                  Tire & Rim Wash
                </h3>
              </div>
            </div>
          </div>
          {/* Exterior Wash */}
          <div
            className="group relative cursor-pointer"
            onClick={() => {
              document.getElementById('premium-package')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <div className="w-full h-full transition-all duration-500 group-hover:scale-110">
                <img
                  src="https://uploadthingy.s3.us-west-1.amazonaws.com/734CbVps1jqBi5gMuGFSta/exterior.png"
                  alt="Exterior Detailing"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-4xl font-bold text-white text-center font-display tracking-wider">
                  Exterior Wash
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
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
            {/* Added IDs to each package div for scroll targeting */}
            <div id="standard-package">
              <PricePlan
                title={pricePlans[0].title}
                price={pricePlans[0].price}
                description={pricePlans[0].description}
                features={pricePlans[0].features}
                popular={pricePlans[0].popular}
              />
            </div>
            <div id="advanced-package">
              <PricePlan
                title={pricePlans[1].title}
                price={pricePlans[1].price}
                description={pricePlans[1].description}
                features={pricePlans[1].features}
                popular={pricePlans[1].popular}
              />
            </div>
            <div id="premium-package">
              <PricePlan
                title={pricePlans[2].title}
                price={pricePlans[2].price}
                description={pricePlans[2].description}
                features={pricePlans[2].features}
                popular={pricePlans[2].popular}
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-8 italic">
            *Prices may vary depending on distance travelled and services
            requested.
          </p>
        </div>
      </section>
      {/* Updated CTA Section with two buttons */}
      <section className="py-24 bg-black text-white relative border-t border-primary-600">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-primary-500" style={{ fontFamily: 'EDOBrush' }}>
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-3xl mb-10 max-w-2xl mx-auto font-light text-gray-200" style={{ fontFamily: 'PARAX' }}>
            Book your appointment today and experience the PrestigeOnWheelz
            difference.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button
              to="/contact#booking-form"
              size="lg"
              variant="primary"
              className="text-lg px-20 font-edobrush"
            >
              Book Your Detail Now
            </Button>
            <Button
              to="/gallery"
              size="lg"
              variant="primary"
              className="text-lg px-20 font-edobrush !bg-white !text-primary-600 border-primary-600 hover:!bg-primary-600 hover:!text-white"
            >
              Our Gallery
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-800"></div>
      </section>
      {selectedFeature !== null && (
        <FeatureModal
          isOpen={true}
          onClose={() => setSelectedFeature(null)}
          title={features[selectedFeature].title}
          icon={features[selectedFeature].icon}
        >
          {features[selectedFeature].description}
        </FeatureModal>
      )}
    </div>
  )
}
export default Home;