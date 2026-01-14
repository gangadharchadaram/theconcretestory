import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Award, Users, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in quality, execution, and delivery across every project.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Transparency, trust, and ethical practices are the foundation of our work culture.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Strong collaboration with clients, architects, and partners to achieve remarkable results.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We build with purpose, care, and a deep love for craftsmanship.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - The Concrete Story</title>
        <meta
          name="description"
          content="Learn about The Concrete Story, our journey, values, and commitment to building excellence."
        />
      </Helmet>

      {/* Hero Banner */}
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
                Who We Are
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About The Concrete Story
            </h1>
            <div className="flex space-x-2 text-gray-300 text-sm uppercase tracking-wider">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-amber-500">About</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">
              Our Foundation
            </h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Building Strength, Creating Stories
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Concrete Story was founded with a simple yet powerful vision —
              to deliver construction solutions that balance structural strength
              with refined design.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From residential projects to large-scale commercial developments,
              we approach every build with precision, transparency, and passion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              className="w-full h-[400px] object-cover rounded-sm shadow-lg"
              src="images/banner5.jpg"
              alt="Construction team"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      {/* Core Values – Styled like Specialized Services */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">
        What Drives Us
      </span>
      <h2 className="text-4xl font-bold text-gray-900">
        Our Core Values
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: Target,
          title: 'Excellence',
          description:
            'We consistently deliver superior quality by maintaining the highest standards in design, materials, and execution.'
        },
        {
          icon: Award,
          title: 'Integrity',
          description:
            'Transparency, honesty, and ethical practices guide every decision we make.'
        },
        {
          icon: Users,
          title: 'Teamwork',
          description:
            'Collaboration with clients, architects, and partners ensures seamless project success.'
        },
        {
          icon: Heart,
          title: 'Passion',
          description:
            'We build with heart — driven by passion, craftsmanship, and pride in every detail.'
        }
      ].map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
        >
          {/* Hover Background */}
          <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
              <value.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
              {value.title}
            </h3>

            <p className="text-gray-500 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
              {value.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Journey / Process */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm block mb-2">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold">
              From Vision to Reality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '2020', text: 'Company Founded' },
              { step: '2022', text: 'Expanded Services' },
              { step: '2025', text: '100+ Projects Delivered' },
              { step: 'Today', text: 'Trusted Construction Partner' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gray-700 mb-4">
                  {item.step}
                </div>
                <div className="h-1 w-12 bg-amber-600 mx-auto mb-4"></div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Ready to Build With Us?
            </h2>
            <p className="text-white/90 text-lg">
              Let’s turn your ideas into strong, lasting spaces.
            </p>
          </div>
          <Link to="/contact">
            <Button className="bg-violet text-gray-900 hover:text-amber-600 font-bold uppercase tracking-wider px-8 py-6 rounded-none">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
