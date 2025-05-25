import React, { Component } from 'react'
const Gallery: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white">
        <div className="container mx-auto">
          <div className="p-12 lg:p-20">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Our Work
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Browse through our gallery of before and after transformations.
                Each image showcases our attention to detail and commitment to
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Grid - Empty for now */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery content will be added here later */}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Gallery