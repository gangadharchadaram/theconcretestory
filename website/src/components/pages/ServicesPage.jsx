import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Home, Hammer, Paintbrush, HardHat, Wrench, Ruler, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: Building2,
      title: 'General Construction',
      description: 'Comprehensive construction services for commercial and residential projects, managing everything from initial ground-breaking to final handover.',
      features: ['Commercial Buildings', 'Industrial Facilities', 'Warehouses']
    },
    {
      icon: Home,
      title: 'Property Maintenance',
      description: 'Regular maintenance and upkeep services to ensure your property retains its value and structural integrity over time.',
      features: ['Routine Inspections', 'Repairs', 'Upgrades']
    },
    {
      icon: Ruler,
      title: 'Preconstruction',
      description: 'Detailed planning, estimation, and scheduling services to set your project up for success before construction begins.',
      features: ['Budgeting', 'Scheduling', 'Permit Acquisition']
    },
   
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'Expert project oversight ensuring timelines, budgets, and quality standards are strictly adhered to.',
      features: ['Site Supervision', 'Vendor Management', 'Quality Control']
    },
    {
      icon: Wrench,
      title: 'Design Build',
      description: 'A unified workflow where we handle both design and construction, streamlining communication and efficiency.',
      features: ['Unified Team', 'Faster Delivery', 'Cost Efficiency']
    }
  ];

   const mission = [
    {
      title: 'Mission 1',
      description: 'Our mission is to consistently deliver high-quality construction solutions through meticulous planning, efficient execution and a strong commitment to engineering excellence.',
    },
    {
       title: 'Mission 2',
      description: 'We aim to create long-lasting spaces that combine functionality, durability and aesthetic value. We ensure every client experiences a smooth and reliable construction journey.',
    },
    {
       title: 'Mission 3',
      description: 'Our mission is to continuously innovate, embrace better technologies and uphold the highest standards of safety and workmanship in everything we build.',
    },
  ];

   const service = [
    {
      title: 'Residential and Commercial Construction and Interior Designing :',
      description: 'Comprehensive services for building high end quality residential Villa’s, Apartments and commercial buildings tailored to Client Specifications.',
    },
    {
       title: 'Project Management Services :',
      description: 'End to end project management including Legal works, Planning, Execution and oversight to ensure timely and cost-effective delivery.',
    },
    {
       title: 'Annual Maintenance Contract (AMC) :',
      description: 'AMF for:',
            features: ['Villa’s', 'Hotels', 'Banks', 'Corporate Offices']

    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - The Concrete Story</title>
        <meta name="description" content="Explore our comprehensive construction services including General Construction, Property Maintenance, Virtual Design, and Project Management." />
      </Helmet>

      {/* Hero Banner Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
               <div className="h-1 w-10 bg-amber-600"></div>
               <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">What We Do</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
             <div className="flex space-x-2 text-gray-300 text-sm font-medium uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-amber-500">Services</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Intro/Detailed Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">World Class Construction</h3>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">We Provide High Performance Services</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At The Concrete Story, we pride ourselves on delivering comprehensive construction solutions that stand the test of time. Whether it's a complex commercial development or a bespoke residential renovation, our team brings decades of expertise to every job site.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our integrated approach combines cutting-edge technology with traditional craftsmanship, ensuring that every project is completed with precision, safety, and efficiency.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                   <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border-l-4 border-amber-600">
                      <Sparkles className="w-6 h-6 text-amber-600" />
                      <span className="font-bold text-gray-800">Quality Control</span>
                   </div>
                   <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border-l-4 border-amber-600">
                      <HardHat className="w-6 h-6 text-amber-600" />
                      <span className="font-bold text-gray-800">Safety First</span>
                   </div>
                </div>

                <Link to="/contact">
                   <Button className="bg-gray-900 hover:bg-amber-600 text-white rounded-none px-8 py-6 text-sm font-bold uppercase tracking-wider transition-colors">
                      Learn More
                   </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                 <div className="relative z-10 grid grid-cols-2 gap-4">
                    <img className="w-full h-64 object-cover rounded-sm shadow-lg transform translate-y-8" src="images/banner4.webp" alt="Construction site worker" />
                    <img className="w-full h-64 object-cover rounded-sm shadow-lg" src="/images/banner5.jpg" alt="Architect planning" />
                 </div>
                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl -z-0"></div>
                 <div className="absolute top-0 right-0 w-32 h-32 border-4 border-amber-600/20 -z-0 transform translate-x-4 -translate-y-4"></div>
              </motion.div>
            </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900">Specialized Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 border-t border-gray-100 pt-4 group-hover:border-white/20 transition-colors duration-300">
                     {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500 group-hover:text-white/90">
                           <ArrowRight className="w-3 h-3 text-amber-600 mr-2 group-hover:text-white" />
                           {feature}
                        </li>
                     ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
{/* Mission Section */}
<section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">

  {/* Soft animated background glow */}
  <motion.div
    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.08),transparent_65%)]"
    animate={{ opacity: [0.4, 0.7, 0.4] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-24">
      <span className="text-amber-600 font-bold uppercase tracking-widest text-sm block mb-3">
        Our Mission
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
        Building Trust. Creating Value. Shaping the Future.
      </h2>
      <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
        Our mission guides every decision we make — from planning to execution and beyond.
      </p>
    </div>

    {/* Mission Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {mission.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{ y: -6 }}
          className="relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl border border-gray-100 transition-all group"
        >

          {/* Soft Top Accent */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400"></div>

          {/* Icon Badge */}
          <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-6 shadow-sm">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm">
            {item.description}
          </p>
          

        </motion.div>
      ))}

    </div>
  </div>
</section>



     {/*services section*/}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-20">
      <span className="text-amber-600 font-bold uppercase tracking-widest text-sm block mb-3">
        Our Services
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
        Delivering services with <span className="text-amber-600">precision</span>, integrity &
        excellence — crafted with care.
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

      {service.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="relative group"
        >

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

          {/* Card */}
          <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-10 shadow-xl border border-gray-100 overflow-hidden">

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full"></div>

            {/* Icon Badge */}
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-amber-600 text-white shadow-lg mb-6 text-xl font-bold">
              {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {item.description}
            </p>

              {item.features && (
  <ul className="space-y-2 border-t border-gray-100 pt-4 mt-4">
    {item.features.map((feature, i) => (
      <li
        key={i}
        className="flex items-center text-sm text-gray-600"
      >
        <ArrowRight className="w-3 h-3 text-amber-600 mr-2" />
        {feature}
      </li>
    ))}
  </ul>
)}


          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>


      {/* Process/Steps Section */}
      {/* Process Section */}
<section className="py-32 bg-gray-950 relative overflow-hidden text-white">

  {/* Ambient gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-black"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-24">
      <span className="text-amber-500 font-bold uppercase tracking-widest text-sm block mb-3">
        How We Work
      </span>
      <h2 className="text-4xl md:text-5xl font-bold">
        Our Construction Process
      </h2>
      <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
        A streamlined process ensuring transparency, quality and timely delivery.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Horizontal Line */}
      <motion.div
        className="hidden md:block absolute top-24 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

        {[
          { step: "01", title: "Consultation", desc: "Understanding your vision, scope, and expectations." },
          { step: "02", title: "Planning", desc: "Blueprints, cost estimation, scheduling and approvals." },
          { step: "03", title: "Construction", desc: "Execution with continuous quality monitoring." },
          { step: "04", title: "Handover", desc: "Final inspection and seamless project delivery." },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="relative group"
          >

            {/* Dot */}
            <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-amber-500 shadow-lg ring-4 ring-gray-950"></div>

            {/* Card */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-amber-600/20 transition-all">

              <div className="text-amber-500 text-5xl font-extrabold mb-4">
                {item.step}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-amber-600 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
           <div className="mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Have a Project in Mind?</h2>
              <p className="text-white/90 text-lg">Let's build something great together. Contact us today.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-violet text-gray-900 hover:bg-gray-100 hover:text-amber-600 font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-colors border-2 border-transparent">
                   Get a Quote
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-amber-600 font-bold uppercase tracking-wider px-8 py-6 rounded-none transition-colors">
                   View Our Work
                </Button>
              </Link>
           </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;