import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, animate, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Building2, Hammer, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Star, Quote, HardHat, Ruler, MousePointer2, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


const projects = [
  {
    title: "renovation of resort at Agonda, South-Goa",
    images: [
      "/images/villa1:1.jpeg",
      "/images/villa1:2.jpeg",
      "/images/villa1:3.jpeg",
      "/images/villa1:5.jpeg",
      "/images/villa1:6.jpeg",
      "/images/villa1:7.jpeg",
    ],
  },
  {
    title: "Resort Construction – South-Goa",
    images: [
      "/images/villa2:1.jpeg",
      "/images/villa2:2.jpeg",
      "/images/villa2:3.jpeg",
    ],
  },
];


const Counter = ({ from = 0, to, duration = 2, label, suffix = '' }) => {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value);
          }
        },
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return (
    <div className="text-center p-6 border-r border-white/10 last:border-r-0">
      <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2 flex justify-center items-center">
        <span ref={ref}>{from}</span>{suffix}
      </div>
      <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
};

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-amber-500/10 rounded-full blur-xl"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -20 - 10 + "%"],
            x: [null, (Math.random() - 0.5) * 10 + "%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
          style={{
            width: Math.random() * 200 + 50 + "px",
            height: Math.random() * 200 + 50 + "px",
          }}
        />
      ))}
    </div>
  );
};

const AnimatedBackground = ({ image, index }) => {
  // Define different animation patterns based on index to create variety
  const animationPatterns = [
    // Pattern 0: Zoom In + Rotate Right
    {
      scale: [1.1, 1.4],
      rotate: [0, 3],
      x: [0, -20],
      filter: ["brightness(0.8)", "brightness(1)"]
    },
    // Pattern 1: Zoom Out + Pan Right
    {
      scale: [1.4, 1.1],
      rotate: [0, -2],
      x: [-20, 20],
      filter: ["brightness(1)", "brightness(0.9)"]
    },
    // Pattern 2: Pan Up + Zoom In
    {
      scale: [1.2, 1.3],
      y: [0, -50],
      rotate: [-1, 1],
      filter: ["brightness(0.9)", "brightness(1.1)"]
    }
  ];

  const currentPattern = animationPatterns[index % animationPatterns.length];

  return (
    <>
      {/* Primary Image Layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ scale: currentPattern.scale[0], rotate: currentPattern.rotate[0], x: 0, y: 0 }}
        animate={{ 
          scale: currentPattern.scale[1], 
          rotate: currentPattern.rotate[1],
          x: currentPattern.x ? currentPattern.x[1] : 0,
          y: currentPattern.y ? currentPattern.y[1] : 0,
          filter: currentPattern.filter[1]
        }}
        transition={{ 
          duration: 12, 
          ease: "linear",
          repeat: 0
        }}
      />
      
      {/* Secondary "Ghost" Layer for Depth - moves slightly slower/differently */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay z-0"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ scale: currentPattern.scale[0] * 1.1, x: 0 }}
        animate={{ 
          scale: currentPattern.scale[1] * 1.05,
          x: (currentPattern.x ? currentPattern.x[1] : 0) * -0.5 // Move opposite or slower
        }}
        transition={{ 
          duration: 15, 
          ease: "linear",
          repeat: 0
        }}
      />
    </>
  );
};

const HeroSlider = () => {
  const videoRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityParallax = useTransform(scrollY, [0, 300], [1, 0]);

const slides = [
  {
    id: 1,
    title: "Luxury Villas Crafted to Perfection",
    subtitle: "From Structure to Stunning Finish",
    cta: "Our Projects",
    link: "/projects"
  },
  {
    id: 2,
    title: "Premium Construction Excellence",
    subtitle: "Building Homes That Inspire Lifestyle",
    cta: "Our Services",
    link: "/services"
  },
  {
    id: 3,
    title: "Where Design Meets Durability",
    subtitle: "Transforming Visions Into Reality",
    cta: "Contact Us",
    link: "/contact"
  }
];



  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const slideContainerVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
      zIndex: 1
    }),
    center: {
      zIndex: 2,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 1,
      x: direction < 0 ? '50%' : '-50%',
      opacity: 0,
      scale: 0.95,
    })
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <div className="relative h-screen min-h-[700px] bg-gray-900 overflow-hidden">
      {/* Parallax Container */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        {/* 🎥 VIDEO LAYER — stays mounted, never restarts */}
<motion.div
  style={{ y: yParallax }}
  className="absolute inset-0 w-full h-[120%] -top-[10%]"
>
  <video
    ref={videoRef}
    className="absolute inset-0 w-full h-full object-cover"
    src="/videos/villa1.mov"
    autoPlay
    muted
    loop
    playsInline
  />
</motion.div>

{/* 🎭 OVERLAYS (static) */}
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 z-10" />
<div className="absolute inset-0 opacity-[0.15] z-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
<Particles />
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
    custom={direction}
    variants={slideContainerVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: { type: "spring", stiffness: 200, damping: 25 },
      opacity: { duration: 0.8 },
      scale: { duration: 0.8 }
    }}
    className="absolute inset-0 overflow-hidden"
          >
            {/* Advanced Background Animation Component */}
            {/* Media Layer */}


            
            {/* Dynamic Color Shift Overlay */}
            <motion.div 
              className="absolute inset-0 bg-amber-900/10 mix-blend-color-burn"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Atmospheric Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 z-10" />
            
            {/* Animated Texture/Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.15] z-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            {/* Particles System */}
            <Particles />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Content Layer */}
      <motion.div 
        style={{ opacity: opacityParallax }}
        className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
          <AnimatePresence mode='wait'>
            <div className="max-w-4xl" key={current}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="h-1 w-12 md:w-20 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
                <h2 className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-lg">
                  {slides[current].subtitle}
                </h2>
              </motion.div>

              <motion.h1
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 leading-[1.1] perspective-1000"
              >
                {slides[current].title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-4 whitespace-nowrap">
                    {word.split("").map((char, j) => (
                      <motion.span key={j} variants={letterVariants} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link to={slides[current].link}>
                  <Button className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-8 text-lg font-bold rounded-none border-2 border-amber-600 shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.8)] transition-all duration-300 uppercase tracking-wide group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      {slides[current].cta}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform origin-bottom skew-y-12"></div>
                  </Button>
                </Link>
                <Link to="/contact">
                   <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-10 py-8 text-lg font-bold rounded-none uppercase tracking-wide bg-transparent backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] z-20 hidden lg:block opacity-60 pointer-events-none"
      >
        <div className="w-20 h-20 border-4 border-amber-500/30 rounded-full"></div>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-[15%] z-20 hidden lg:block opacity-40 pointer-events-none"
      >
        <div className="w-12 h-12 border-4 border-white/20 rotate-45"></div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 z-40 flex space-x-4 hidden md:flex">
        <button 
          onClick={() => paginate(-1)}
          className="p-4 rounded-full border border-white/20 bg-black/20 text-white hover:bg-amber-600 hover:border-amber-600 hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => paginate(1)}
          className="p-4 rounded-full border border-white/20 bg-black/20 text-white hover:bg-amber-600 hover:border-amber-600 hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-40 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const direction = index > current ? 1 : -1;
              setDirection(direction);
              setCurrent(index);
            }}
            className={cn(
              "h-1 transition-all duration-500 rounded-full",
              current === index ? "bg-amber-500 w-12 shadow-[0_0_10px_rgba(245,158,11,0.8)]" : "bg-white/30 w-6 hover:bg-white/60"
            )}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-white/50 hidden md:flex cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 relative overflow-hidden">
           <motion.div 
             className="absolute top-0 left-0 w-full h-1/2 bg-amber-500"
             animate={{ top: ['-100%', '100%'] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
           />
        </div>
      </motion.div>
    </div>
  );
};

const ProjectGallery = ({ project }) => {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg">

      {/* ✅ Image with smooth transition */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={project.images[index]}
          alt={project.title}
          className="w-full h-80 object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* ⬅️ Previous */}
      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber-600 text-white p-2 rounded-full z-10 transition"
      >
        ‹
      </button>

      {/* ➡️ Next */}
      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber-600 text-white p-2 rounded-full z-10 transition"
      >
        ›
      </button>

      {/* 🏷️ Title Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5 pointer-events-none">
        <h3 className="text-white font-bold text-lg">
          {project.title}
        </h3>
      </div>
    </div>
  );
};




const HomePage = () => {
  const services = [
    {
      icon: Building2,
      title: 'General Construction',
      description: 'Comprehensive construction services for commercial and residential projects.'
    },
    {
      icon: Hammer,
      title: 'Renovation',
      description: 'Expert renovation services to revitalize your existing structures.'
    },
    {
      icon: Sparkles,
      title: 'Interior Finishing',
      description: 'Premium finishing touches, painting, flooring, and detailing.'
    },
    {
      icon: Ruler,
      title: 'Architecture Design',
      description: 'Planning and design services to bring your vision to life.'
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'Dedicated management ensuring projects are on time and within budget.'
    },
    {
      icon: CheckCircle2,
      title: 'Consulting',
      description: 'Professional advice and cost estimation for your construction needs.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John",
      role: "Property Developer",
      text: "The Concrete Story delivered our office complex ahead of schedule. Their attention to detail and professional management made the entire process seamless."
    },
    {
      id: 2,
      name: "Sarah",
      role: "Homeowner",
      text: "We couldn't be happier with our home renovation. They transformed our outdated space into a modern masterpiece. Highly recommended!"
    },
    {
      id: 3,
      name: "Michael",
      role: "Business Owner",
      text: "Exceptional quality and service. The team was transparent about costs and timelines throughout the entire retail expansion project."
    }
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <>
      <Helmet>
        <title>The Concrete Story - Construction & Finishing Excellence</title>
        <meta name="description" content="Leading construction company specializing in commercial, residential, and renovation projects. Building dreams with quality and precision." />
      </Helmet>

      {/* Hero Slider */}
      <HeroSlider>const videoRef = useRef(null);
</HeroSlider>

      <div className="relative bg-white z-10">
        {/* Intro Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-1 w-12 bg-amber-600"></div>
                  <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Who We Are</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                  We Construct Your Dreams With <span className="text-amber-600">Passion</span>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The Concrete Story is a premier construction firm dedicated to delivering excellence in every project. With over 5 years of experience, we combine traditional craftsmanship with modern innovation to build structures that stand the test of time.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700 font-medium">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700 font-medium">Quality Materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700 font-medium">Expert Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700 font-medium">On-Time Delivery</span>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded-none px-8 py-6">
                    More About Us
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
                <div className="relative z-10">
                  <img className="w-full h-[500px] object-cover shadow-xl" alt="Construction team reviewing blueprints" src="/images/banner3.jpg" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-[10px] border-amber-600 z-0 hidden md:block"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
              <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-amber-600 group"
                >
                  <div className="mb-6 inline-block p-4 bg-gray-50 rounded-lg group-hover:bg-amber-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services">
                <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg font-semibold rounded-none transition-all">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Counter from={0} to={100} label="Projects Completed" suffix="+" />
              <Counter from={0} to={5} label="Years Experience" suffix="+" />
              <Counter from={0} to={100} label="Client Satisfaction" suffix="%" />
              <Counter from={0} to={10} label="Awards Won" />
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
       <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Portfolio</span>
                <h2 className="text-4xl font-bold text-gray-800">Recent Projects</h2>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projects.map((project, index) => (
    <ProjectGallery key={index} project={project} />
  ))}
</div>
        <div className="mt-12 text-center">
              <Link to="/services">
                <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg font-semibold rounded-none transition-all">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-12 h-12 text-amber-600 mx-auto mb-8 opacity-50" />
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Client Testimonials</h2>
            
            <div className="relative min-h-[250px]">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <p className="text-xl md:text-2xl text-gray-600 italic mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <span className="text-amber-600 font-medium">{testimonials[currentTestimonial].role}</span>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      currentTestimonial === idx ? "bg-amber-600 w-8" : "bg-gray-300 hover:bg-amber-400"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-800/50"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InNmZmYiLz48L3N2Zz4=')]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Looking for a Quality Construction Company?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              We are ready to bring your vision to life with professionalism and excellence. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-8 text-lg font-bold rounded-none uppercase tracking-wide">
                  Get a Free Quote
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-8 text-lg font-bold rounded-none uppercase tracking-wide bg-transparent">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;