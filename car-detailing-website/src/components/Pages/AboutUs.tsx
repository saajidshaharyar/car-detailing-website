// Full About Us page layout with hero, values, stats, services, and CTA

import React, { useEffect, useRef, useState } from 'react';
import {
  UserIcon,
  StarIcon,
  AwardIcon,
  ThumbsUpIcon,
  SprayCan,
  Zap,
  Droplets,
  TruckIcon,
} from 'lucide-react';
import Button from '../UI/Button';

// Animated counter component that triggers when in view using IntersectionObserver
const CountUp = ({ end, duration = 2, suffix = '+' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          // Setup count animation
          let start = 0;
          const increment = end / (duration * 60);
          const animate = () => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(interval);
            }
            setCount(Math.floor(start));
          };
          const interval = setInterval(animate, 1000 / 60);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration]);

  return <div ref={ref} className="text-5xl font-heading font-bold text-primary-500 transition-all duration-700 ease-out">{count}{suffix}</div>;
};

// Main AboutUs component defining the full "About Us" page layout
const AboutUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white">
        <div className="container mx-auto p-12 lg:p-20 text-center max-w-3xl">
          <h1 className="text-5xl font-heading font-bold tracking-widest uppercase mb-6">About The Neighbourhood Detailer</h1>
          <p className="text-xl font-sans">
            We're a driven team of young car enthusiasts redefining auto-detailing — offering premium results at a fraction of the cost. 
            No shop required. We bring the detail shop to *your* driveway.
          </p>
        </div>
      </section>

      {/* Core Values — Visual cards highlighting company values */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading tracking-wide mb-4 text-primary-500">Our Core Values</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-heading">
            These values define our culture and how we serve our mobile detailing clients daily.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[{
              icon: <StarIcon className="w-10 h-10 text-primary-500" />, title: 'Excellence',
              desc: 'We aim for perfection with every vehicle — never rushed, never average.'
            }, {
              icon: <UserIcon className="w-10 h-10 text-primary-500" />, title: 'Integrity',
              desc: 'We’re honest, transparent, and treat your car like it’s our own.'
            }, {
              icon: <AwardIcon className="w-10 h-10 text-primary-500" />, title: 'Innovation',
              desc: 'We research cutting-edge techniques for faster, safer detailing.'
            }, {
              icon: <TruckIcon className="w-10 h-10 text-primary-500" />, title: 'Mobility',
              desc: 'No garage? No problem. We come to your driveway with everything needed.'
            }].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md hover:scale-105 transition-transform text-center">
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Counters — Live numeric stats that animate when in view */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[{ end: 100, label: 'Customers', suffix: '+' },
            { end: 150, label: 'Cars Detailed', suffix: '+' },
            { end: 70, label: 'Steam Treatments', suffix: '+' },
            { end: 100, label: 'Returning Customers', suffix: '%' }
          ].map(({ end, label, suffix }) => (
            <div key={label} className="space-y-2">
              <CountUp end={end} suffix={suffix} />
              <p className="text-lg text-gray-700 dark:text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are — Brand story and operational philosophy with supporting image */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Who We Are</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              The Neighbourhood Detailer is a youth-led mobile detailing company built by passionate enthusiasts who believe high-end results shouldn't carry high-end price tags. 
              Our model is simple: we bring our gear to you — wherever you are. Whether it’s your driveway, work parking lot, or private garage, we make clean cars happen.
            </p>
          </div>
          <img src="/AboutUsImage.png" alt="Detailed Car Interior" className="rounded-lg aspect-video w-full object-cover shadow-md" />
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[{
            icon: <Zap className="w-10 h-10 text-primary-500" />, title: 'Power Perfect', desc: 'High-powered vacuum extraction systems'
          }, {
            icon: <SprayCan className="w-10 h-10 text-primary-500" />, title: 'Shine Supreme', desc: 'Premium detailing-grade cleaning agents'
          }, {
            icon: <Droplets className="w-10 h-10 text-primary-500" />, title: 'Steam Dream', desc: 'Deep steam cleaning for interiors'
          }].map(({ icon, title, desc }) => (
            <div key={title} className="hover:scale-105 transition-transform text-center">
              <div className="flex justify-center mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-edobrush mb-4">Experience The Neighbourhood Detailing Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don’t waste time driving to a shop. Let our team deliver showroom-quality detail right to your location.
          </p>
          <Button to="/contact" size="lg" variant="secondary">
            Book a Mobile Detail Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
