import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+917720011155',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll contact you shortly.",
      duration: 5000
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+917720011155'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@theconcretestory.com'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      value: 'HN-1, opposite to Goa luxury rental, Guirim, Bardez-Goa'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon – Sat | 9:00 AM – 7:00 PM',
      value1: 'Sunday | 10:00 AM – 2:00 PM'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - The Concrete Story</title>
        <meta
          name="description"
          content="Contact The Concrete Story for construction, renovation, and design-build services."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-10 bg-amber-600"></div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <div className="flex space-x-2 text-gray-300 text-sm uppercase tracking-wider">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-amber-500">Contact</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <item.icon className="w-8 h-8 text-amber-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/90">
                  {item.value}
                </p>
                 <p className="text-gray-500 group-hover:text-white/90">
                  {item.value1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Start Your Project
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us about your project and we’ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'phone', 'subject'].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full px-4 py-4 border border-gray-200 focus:border-amber-600 outline-none"
                  required={field !== 'phone'}
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Your Message"
                className="w-full px-4 py-4 border border-gray-200 focus:border-amber-600 outline-none resize-none"
              />

              <Button
                type="submit"
                className="bg-gray-900 hover:bg-amber-600 text-white w-full py-6 uppercase tracking-wider font-bold group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Map / Image */}
          {/* Map Section */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative h-[500px] w-full shadow-lg overflow-hidden"
>
  <iframe
    title="Office Location"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d283.2677349514503!2d73.80603931683464!3d15.580588349432665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1768378000333!5m2!1sen!2sin" 
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  {/* Decorative Glow */}
  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl pointer-events-none"></div>
</motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Let’s Build Together
            </h2>
            <p className="text-white/90 text-lg">
              Strong foundations start with the right conversation.
            </p>
          </div>
          <Link to="/projects">
            <Button className="bg-violet text-gray-900 hover:text-amber-600 font-bold uppercase tracking-wider px-8 py-6 rounded-none">
              View Our Work
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
