import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [activeSlide, setActiveSlide] = useState({});

  const categories = ['all', 'commercial', 'residential', 'renovation'];

  const projects = [
    {
      id: 1,
      title: 'renovation of resort at Agonda, South-Goa',
      category: 'renovation',
      description: 'Resort renovation in Agonda, South Goa, upgrading rooms, common areas, and exterior finishes to deliver a fresh, modern coastal aesthetic—using weather-friendly materials, improved lighting, and clean premium detailing.',
      location: 'South Goa',
      year: '2023',
      media: [
        { type: 'image', src: '/images/villa1:1.jpeg' },
        { type: 'image', src: '/images/villa1:2.jpeg' },
        { type: 'image', src: '/images/villa1:3.jpeg' },
        { type: 'image', src: '/images/villa1:4.jpeg' },
        { type: 'image', src: '/images/villa1:6.jpeg' },
        { type: 'image', src: '/images/villa1:7.jpeg' },
      ]
    },
    {
      id: 2,
      title: 'Resort Construction – South-Goa',
      category: 'commercial',
      description: 'Complete resort construction in South Goa, delivering a modern hospitality space with durable coastal-grade materials, optimized layouts, premium finishes, and seamless functionality.',
      location: 'Goa',
      year: '2024',
      media: [
{ type: 'image', src: '/images/villa2:1.jpeg' },
{ type: 'image', src: '/images/villa2:2.jpeg' },
{ type: 'image', src: '/images/villa2:3.jpeg' },
      ]
    },
    {
      id: 3,
      title: 'Rio De Grande',
      category: 'commercial',
      description: 'A premium luxury resort hotel project delivering elegant architecture, superior finishes, optimized layouts, and world-class hospitality standards.',
      location: 'Goa',
      year: '2022',
      media: [
        { type: 'video', src: '/videos/villa2.mp4' },
      ]
    },
    {
      id: 4,
      title: 'Interior designing of a bungalow',
      category: 'residential',
      description: 'Interior design of a private bungalow delivering elegant layouts, premium finishes, customized furniture solutions, and warm, functional living spaces.',
      location: 'Goa',
      year: '2023',
      media: [
        { type: 'video', src: '/videos/villa1.mov' },
      ]
    },
    {
      id: 5,
      title: 'GG Garden Resort',
      category: 'commercial',
      description: 'End-to-end resort construction and interior execution delivering elegant spaces, durable materials, and a harmonious blend of nature and luxury',
      location: 'Goa',
      year: '2022',
      media: [
        { type: 'image', src: '/images/villa3:1.jpeg' },
        { type: 'image', src: '/images/villa3:2.jpeg' },
        { type: 'image', src: '/images/villa3:3.jpeg' },
        { type: 'image', src: '/images/villa3:4.jpeg' },
        { type: 'image', src: '/images/villa3:5.jpeg' },
        { type: 'image', src: '/images/villa3:6.jpeg' },
      ]
    },
   
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(p => p.category === filter);

  /** Arrow controls */
  const nextSlide = (projectId, total) => {
    setActiveSlide(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % total
    }));
  };

  const prevSlide = (projectId, total) => {
    setActiveSlide(prev => ({
      ...prev,
      [projectId]:
        ((prev[projectId] || 0) - 1 + total) % total
    }));
  };

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
              {filteredProjects.map((project, index) => {
                const currentIndex = activeSlide[project.id] || 0;
                const currentMedia = project.media[currentIndex];

                return (
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
                      {/* Media Slider */}
                      <div className="mb-4 overflow-hidden h-56 relative">
                        {currentMedia.type === 'image' ? (
                          <img
                            src={currentMedia.src}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <video
                            src={currentMedia.src}
                            controls
                            className="w-full h-full object-cover"
                          />
                        )}

                        {/* Left Arrow */}
                        {project.media.length > 1 && (
                          <button
                            onClick={() => prevSlide(project.id, project.media.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                          >
                            <ChevronLeft size={20} />
                          </button>
                        )}

                        {/* Right Arrow */}
                        {project.media.length > 1 && (
                          <button
                            onClick={() => nextSlide(project.id, project.media.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                          >
                            <ChevronRight size={20} />
                          </button>
                        )}
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
                );
              })}
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
