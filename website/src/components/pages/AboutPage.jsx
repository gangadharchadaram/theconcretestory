import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Award, Users, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Honest communication and transparent practices are the foundation of our business.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaboration with clients and partners to achieve outstanding results.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and it shows in every detail of our work.'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to transform construction' },
    { year: '2012', title: 'Major Expansion', description: 'Expanded services and team capabilities' },
    { year: '2018', title: '500th Project', description: 'Celebrated our 500th successful project' },
    { year: '2023', title: 'Industry Recognition', description: 'Awarded Best Construction Firm' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - The Concrete Story</title>
        <meta name="description" content="Learn about The Concrete Story's journey, values, and commitment to excellence in construction. Over 15 years of building dreams into reality." />
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
                Our Story
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Building excellence since 2008, one project at a time
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  className="rounded-xl shadow-2xl w-full h-[600px] object-cover"
                  alt="Modern construction building facade"
                 src="https://images.unsplash.com/photo-1525940846046-d88fd2ce6cac" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    The Concrete Story began with a simple vision: to transform the construction industry through unwavering commitment to quality, innovation, and customer satisfaction.
                  </p>
                  <p>
                    For over 15 years, we've been bringing dreams to life, one project at a time. From residential homes to commercial complexes, our team of skilled professionals approaches each project with the same dedication and attention to detail.
                  </p>
                  <p>
                    We believe that construction is more than just building structures—it's about creating spaces where memories are made, businesses thrive, and communities flourish. This philosophy guides everything we do.
                  </p>
                  <p>
                    Today, we stand proud as one of the region's most trusted construction partners, with hundreds of successful projects and countless satisfied clients.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and relationships
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Key milestones in our story of growth and success
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-800 to-amber-600 hidden md:block"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 text-center md:text-right">
                      {index % 2 === 0 && (
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <div className="text-3xl font-bold text-amber-600 mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg z-10 shrink-0"></div>

                    <div className="flex-1 text-center md:text-left">
                      {index % 2 !== 0 && (
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <div className="text-3xl font-bold text-amber-600 mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Story
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Whether you're planning a new construction or renovation, we're here to make your vision a reality.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;