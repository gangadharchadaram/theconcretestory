import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'commercial', 'residential', 'renovation'];

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      description: 'A state-of-the-art 5-story office building with sustainable features',
      location: 'Downtown District',
      year: '2023'
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'residential',
      description: 'Premium 20-story residential tower with panoramic views',
      location: 'Waterfront',
      year: '2023'
    },
    {
      id: 3,
      title: 'Shopping Center Renovation',
      category: 'renovation',
      description: 'Complete modernization of existing shopping center',
      location: 'Suburban Mall',
      year: '2022'
    },
    {
      id: 4,
      title: 'Custom Family Home',
      category: 'residential',
      description: 'Bespoke 4-bedroom family residence with modern amenities',
      location: 'Green Valley',
      year: '2023'
    },
    {
      id: 5,
      title: 'Industrial Warehouse',
      category: 'commercial',
      description: 'Large-scale warehouse facility with advanced logistics',
      location: 'Industrial Park',
      year: '2022'
    },
    {
      id: 6,
      title: 'Historic Building Restoration',
      category: 'renovation',
      description: 'Careful restoration preserving architectural heritage',
      location: 'Old Town',
      year: '2023'
    },
    {
      id: 7,
      title: 'Boutique Hotel',
      category: 'commercial',
      description: 'Elegant 50-room boutique hotel with premium facilities',
      location: 'City Center',
      year: '2022'
    },
    {
      id: 8,
      title: 'Townhouse Development',
      category: 'residential',
      description: 'Modern townhouse community with shared amenities',
      location: 'Riverside',
      year: '2023'
    },
    {
      id: 9,
      title: 'Office Interior Remodel',
      category: 'renovation',
      description: 'Contemporary office space transformation',
      location: 'Business District',
      year: '2023'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Our Projects - The Concrete Story</title>
        <meta name="description" content="Explore our portfolio of successful construction projects including commercial buildings, residential complexes, and renovation work. Quality results delivered on time." />
      </Helmet>

      <div className="pt-20">
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Projects
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Showcasing excellence through completed projects
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all duration-300 ${
                      filter === category
                        ? 'bg-blue-800 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        alt={project.title}
                       src="https://images.unsplash.com/photo-1695653905600-cd0f34eda687" />
                      <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase">
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-500">{project.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-600">No projects found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Numbers That Speak
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Our track record of success and client satisfaction
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: '500+', label: 'Completed Projects' },
                  { number: '15+', label: 'Years of Experience' },
                  { number: '100%', label: 'Client Satisfaction' },
                  { number: '50+', label: 'Industry Awards' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg"
                  >
                    <div className="text-5xl font-bold text-blue-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Your Project
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our list of satisfied clients and bring your construction vision to reality.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;