// Gallery.tsx
// This component renders a fully responsive, interactive gallery featuring before/after car detailing images.
// Includes modal slideshow, swipe/keyboard navigation, and animated transitions using Framer Motion.

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  // Arrays storing numerical identifiers for before/after image filenames
  const beforeImages = [1, 2, 3, 4];
  const afterImages = [1, 2, 3, 4];

  // Modal and slideshow stat
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGroup, setCurrentGroup] = useState<'before' | 'after'>('before');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Set page title when Gallery mounts
    document.title = "The Neighbourhood Detailer - Gallery";

    // Keyboard accessibility: escape closes modal, arrows navigate
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Opens modal and sets group to either 'before' or 'after'
  const openModal = (group: 'before' | 'after') => {
    setCurrentGroup(group);
    setCurrentIndex(0);
    setIsModalOpen(true);
  };

  // Slideshow navigation
  const closeModal = () => setIsModalOpen(false);

  const goNext = () => {
    const images = currentGroup === 'before' ? beforeImages : afterImages;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    const images = currentGroup === 'before' ? beforeImages : afterImages;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch/swipe handlers for mobile UX
  const swipeHandlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    trackMouse: true,
  });

  return (
    <div className="transition-colors duration-500 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row h-auto md:h-[340px]">
        <div className="w-full md:w-1/2 h-64 md:h-full bg-gradient-to-br from-primary-700 to-primary-800 text-white px-10 py-8 flex flex-col justify-center">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold italic mb-4 font-edobrush">
              Our Work
            </h1>
            <p className="text-lg md:text-xl font-display italic text-white/90 leading-relaxed">
              Browse through our gallery of before and after transformations. Each image showcases our attention to detail and commitment to excellence.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/detailing-showcase.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Thumbnail Section */}
      <section className="w-full px-6 py-12 transition-colors duration-500 bg-white dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b]">
        <h2 className="text-4xl font-extrabold tracking-tight text-center mb-10 text-black dark:text-white font-display">Our Work in Action</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 md:px-8 border-t border-red-400 dark:border-slate-700 pt-8">
          {/* BEFORE */}
          <div onClick={() => openModal('before')} className="cursor-pointer flex flex-col items-center space-y-4 bg-white/80 dark:bg-slate-800/70 backdrop-blur-sm border border-red-400 dark:border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <p className="text-3xl font-bold italic tracking-wide text-primary-500" style={{ fontFamily: 'LemonMilk' }}>Before Detailing</p>
            <img
              src="/before1.jpg"
              alt="Before Thumbnail"
              loading="eager"
              className={`w-[300px] md:w-[340px] rounded-lg shadow-md transition duration-300 opacity-40 hover:opacity-100 hover:scale-[1.03] hover:rotate-[0.5deg] transform ${isMounted ? 'animate-fadeInFast' : 'opacity-0'}`}
            />
          </div>

          {/* AFTER */}
          <div onClick={() => openModal('after')} className="cursor-pointer flex flex-col items-center space-y-4 bg-white/80 dark:bg-slate-800/70 backdrop-blur-sm border border-red-400 dark:border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <p className="text-3xl font-bold italic tracking-wide text-primary-500" style={{ fontFamily: 'LemonMilk' }}>After Detailing</p>
            <img
              src="/after1.jpg"
              alt="After Thumbnail"
              loading="eager"
              className={`w-[300px] md:w-[340px] rounded-lg shadow-md transition duration-300 opacity-40 hover:opacity-100 hover:scale-[1.03] hover:rotate-[0.5deg] transform ${isMounted ? 'animate-fadeInFast' : 'opacity-0'}`}
            />
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 px-4 py-6" {...swipeHandlers}>
            <button
              onClick={closeModal}
              aria-label="Close slideshow"
              tabIndex={0}
              className="absolute top-4 right-6 text-white text-3xl font-bold transition transform hover:text-red-500 hover:scale-125"
            >
              <X size={32} />
            </button>
            {currentIndex > 0 && (
              <button
              onClick={goPrev}
              aria-label="Previous image"
              tabIndex={0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold transition transform hover:text-red-500 hover:scale-125"
            >
              <ChevronLeft size={32} />
              </button>
            )}

            <motion.img
              key={currentIndex}
              src={`/${currentGroup}${(currentGroup === 'before' ? beforeImages : afterImages)[currentIndex]}.jpg`}
              alt={`${currentGroup} ${currentIndex + 1}`}
              loading="eager"
              className="w-full md:w-[800px] h-auto max-h-[500px] object-contain rounded-lg shadow-xl mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            />

            <div className="flex gap-4 overflow-x-auto max-w-full pb-2">
              {(currentGroup === 'before' ? beforeImages : afterImages).map((num, i) => (
                <img
                  key={i}
                  src={`/${currentGroup}${num}.jpg`}
                  alt={`${currentGroup} ${num}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-24 h-16 object-cover rounded-md cursor-pointer transition-all duration-300 ${
                    i === currentIndex ? 'ring-4 ring-red-500 scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                />
              ))}
            </div>

            {currentIndex < (currentGroup === 'before' ? beforeImages : afterImages).length - 1 && (
              <button
              onClick={goNext}
              aria-label="Next image"
              tabIndex={0}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold transition transform hover:text-red-500 hover:scale-125"
            >
              <ChevronRight size={32} />
              </button>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
