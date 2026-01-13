import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'commercial', 'residential', 'renovation'];

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      description: 'A premium multi-story office complex built with sustainable materials and modern architecture.',
      location: 'Downtown District',
      year: '2023'
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'residential',
      description: 'High-rise luxury living with panoramic views and world-class amenities.',
      location: 'Waterfront',
      year: '2023'
    },
    {
      id: 3,
      title: 'Shopping Center Renovation',
      category: 'renovation',
      description: 'Complete structural and aesthetic transformation of a retail space.',
      location: 'Suburban Mall',
      year: '2022'
    },
    {
      id: 4,
      title: 'Custom Family Villa',
      category: 'residential',
      description: 'Bespoke villa designed for comfort, elegance, and durability.',
      location: 'Green Valley',
      year: '2023'
    },
    {
      id: 5,
      title: 'Industrial Warehouse',
      category: 'commercial',
      description: 'Large-scale warehouse engineered for logistics efficiency.',
      location: 'Industrial Park',
      year: '2022'
    },
    {
      id: 6,
      title: 'Heritage Building Restoration',
      category: 'renovation',
      description: 'Careful restoration preserving architectural heritage.',
      location: 'Old Town',
      year: '2023'
    }
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects - The Concrete Story</title>
        <meta
          name="description"
          content="Discover our completed construction projects across residential, commercial, and renovation sectors."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-10 bg-amber-600"></div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">
                Our Work
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Projects
            </h1>
            <div className="flex space-x-2 text-gray-300 text-sm uppercase tracking-wider">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-amber-500">Projects</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 uppercase tracking-wider text-sm font-bold border transition-all ${
                  filter === cat
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>

                  <div className="relative z-10">
                    <div className="mb-4 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
                        alt={project.title}
                        className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 mb-4 group-hover:text-white/90">
                      {project.description}
                    </p>

                    <div className="flex justify-between text-sm text-gray-500 group-hover:text-white/90">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Have a Project in Mind?
            </h2>
            <p className="text-white/90 text-lg">
              Let’s build something strong, beautiful, and lasting.
            </p>
          </div>
          <Link to="/contact">
            <Button className="bg-violet text-gray-900 hover:text-amber-600 font-bold uppercase tracking-wider px-8 py-6 rounded-none">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
