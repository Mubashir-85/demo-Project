import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Logistics Firm",
    challenge: "Manual inventory recording slowed operations.",
    solution: "Custom barcode tracking + dashboard system.",
    result: "40% faster warehouse processing within 90 days.",
    image: "Phoneimg.png",
    logo: "FirstLogo.png",
  },
  {
    id: 2,
    title: "Education Platform",
    challenge: "Lack of engagement in online learning modules.",
    solution: "Gamified UI and analytics-driven student progress tracking.",
    result: "Student engagement improved by 60% within 3 months.",
    image: "Phoneimg.png",
    logo: "FirstLogo.png",
  },
  {
    id: 3,
    title: "Retail Chain",
    challenge: "Slow checkout and poor inventory tracking.",
    solution: "Omnichannel POS with real-time stock management.",
    result: "25% reduction in checkout time across all stores.",
    image: "Phoneimg.png",
    logo: "FirstLogo.png",
  },
];

const testimonials = [
  {
    id: 1,
    text: "Compute Now didn’t just build our system, they understood our operational challenges and solved them. The support has been excellent.",
    name: "Daniel H.",
    role: "Operations Director",
    avatar: "/images/avatar.png",
  },
  {
    id: 2,
    text: "Working with Compute Now was a great experience. Their insights and execution helped us improve efficiency across multiple processes.",
    name: "Sarah M.",
    role: "Project Manager",
    avatar: "/images/avatar.png",
  },
  {
    id: 3,
    text: "Compute Now delivered exactly what we needed, a fast, reliable, and scalable solution. Their technical team was exceptional.",
    name: "Mark L.",
    role: "Tech Lead",
    avatar: "/images/avatar.png",
  },
];

const CaseStudiesSection = () => {
  const MOBILE_BREAKPOINT = 768;
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [index, setIndex] = useState(0);

  // ⭐ Pause autoplay on hover
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-slide case studies
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % caseStudies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <div className="bg-[#f5f7fa] font-montserrat overflow-hidden md:w-[100%] mx-auto">
      {/* ==================== CASE STUDIES ==================== */}
      <section
        className="
          sm:py-16 md:pt-10 pt-5 pb-10
          px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 
          text-center relative"
      >
        {/* TITLE */}
        <motion.h2
          initial={{ x: isMobile ? 100 : 1000 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-extrabold text-[#1b2b57] tracking-tight mb-3"
        >
          Featured <span className="text-[#007aff]">Case Studies</span>
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="
            text-gray-600 
            text-sm sm:text-base md:text-lg 
            leading-relaxed max-w-xl mx-auto mb-12"
        >
          Discover how our solutions helped clients scale, innovate, and
          outperform.
        </motion.p>

        {/* MAIN SLIDER */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="
            relative 
            flex flex-col md:flex-row 
            items-center justify-center 
            max-w-6xl mx-auto w-full 
            gap-10 md:gap-16
            
            "
        >
          {/* LEFT ARROW (Desktop) */}
          <button
            onClick={prevSlide}
            className="
              hidden sm:flex
              absolute left-0 md:-left-12 lg:-left-16 
              top-1/2 -translate-y-1/2
              bg-[#007aff]/15 hover:bg-[#007aff]/25
              p-3 rounded-full shadow-md transition-all 
              text-[#007aff]"
          >
            <ChevronLeft size={22} />
          </button>

          {/* <AnimatePresence mode="wait" custom={direction}> */}
          <motion.div
            key={caseStudies[current].id}
            variants={slideVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            className="
      flex flex-col md:flex-row 
      items-center 
      bg-white 
      rounded-2xl
      shadow-lg
      p-4 sm:p-6 md:p-8
      w-full 
      gap-6 md:gap-10
      max-w-5xl mx-auto
    "
          >
            {/* IMAGE MOBILE */}
            <motion.div
              className="md:hidden flex justify-center w-full"
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <img
                src={caseStudies[current].image}
                className="w-[70%] max-w-[240px] object-contain drop-shadow-xl"
                alt="case study"
              />
            </motion.div>

            {/* TEXT LEFT */}
            <div className="w-full md:w-1/2 text-center md:text-left max-w-lg mx-auto md:mx-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <img
                  src={caseStudies[current].logo}
                  className="w-9 sm:w-10 md:w-12 object-contain"
                  alt="logo"
                />
                <h3
                  className="
            text-xl sm:text-2xl md:text-3xl 
            font-semibold text-[#1b2b57] leading-tight"
                >
                  {caseStudies[current].title}
                </h3>
              </div>

              <div className="space-y-2 md:space-y-3">
                {["challenge", "solution", "result"].map((key) => (
                  <p
                    key={key}
                    className="text-[#1b2b57] text-sm sm:text-base md:text-lg leading-relaxed"
                  >
                    <span className="text-[#007aff] font-semibold capitalize">
                      {key}:
                    </span>{" "}
                    {caseStudies[current][key]}
                  </p>
                ))}
              </div>

              <a
                href="#"
                className="
          inline-block mt-5 
          text-[#007aff]
          text-sm sm:text-base md:text-lg 
          font-medium hover:underline"
              >
                View Case Study →
              </a>
            </div>

            {/* IMAGE DESKTOP */}
            <motion.div
              className="hidden md:flex justify-center md:w-1/2"
              whileHover={{
                scale: 1.04,
                rotateX: -3,
                rotateY: 2,
              }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            >
              <img
                src={caseStudies[current].image}
                className="w-[200px] lg:w-[220px] xl:w-[240px] object-contain drop-shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
          {/* </AnimatePresence> */}

          {/* RIGHT ARROW (Desktop) */}
          <button
            onClick={nextSlide}
            className="
              hidden sm:flex
              absolute right-0 md:-right-12 lg:-right-16 
              top-1/2 -translate-y-1/2
              bg-[#007aff]/15 hover:bg-[#007aff]/25
              p-3 rounded-full shadow-md transition-all 
              text-[#007aff]"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* ⭐⭐⭐ MOBILE ARROWS + DOTS ⭐⭐⭐ */}
        <div className="flex justify-center mt-8 gap-4 items-center sm:hidden">
          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="
              p-2 rounded-full 
              bg-[#007aff]/15 
              text-[#007aff] 
              shadow-sm 
              active:scale-90 
              transition
            "
          >
            {/* <ChevronLeft size={18} /> */}
          </button>

          {/* DOTS */}
          <div className="flex gap-2">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all
                  ${current === i ? "bg-[#007aff]" : "bg-gray-300"}
                `}
              />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="
              p-2 rounded-full 
              bg-[#007aff]/15 
              text-[#007aff] 
              shadow-sm 
              active:scale-90 
              transition
            "
          >
            {/* <ChevronRight size={18} /> */}
          </button>
        </div>

        {/* DESKTOP DOTS */}
        <div className="hidden sm:flex justify-center mt-8 gap-3">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={` 
                w-3 h-3 rounded-full transition-all
                ${current === i ? "bg-[#007aff]" : "bg-gray-300"}
              `}
            />
          ))}
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-5 sm:py-20 md:py-14 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 relative text-center">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover sm:bg-cover bg-[length:140%] sm:bg-[length:100%]"
          style={{ backgroundImage: "url('wallpaper.png')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#007aff]/80 via-[#0268e1]/40 to-[#012b63]/95"></div>

        <motion.div
          className="relative z-10 text-white mb-14"
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
            Clients Love Compute Now
          </h2>
          <p className="text-white max-w-2xl mx-auto mt-3 text-sm sm:text-base md:text-lg">
            Hear direct feedback from businesses achieving success with Compute
            Now.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-8 max-w-7xl mx-auto px-2 sm:px-4 justify-items-center">
          {testimonials.map((t) => (
            <motion.div
              initial={{ y: 200 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <motion.div
                key={t.id}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 160, damping: 15 }}
                className="
                  relative 
                  w-full max-w-[300px]
                  sm:w-[320px] md:w-[340px] lg:w-[360px] 
                  min-h-[260px] 
                  bg-white/10
                  border border-white/30 
                  rounded-2xl p-6 text-white 
                  shadow-[0_8px_30px_rgba(0,0,0,0.3)] 
                  flex flex-col justify-between"
              >
                {/* Quote Icon */}
                <img
                  src="Quote.png"
                  alt="quote"
                  className="
                    absolute 
                    -top-8 sm:-top-10 
                    left-4 sm:left-6 
                    w-12 h-12 sm:w-14 sm:h-14 
                    object-contain
                  "
                />

                {/* Text */}
                <p className="text-sm sm:text-base leading-relaxed mt-6 opacity-95">
                  {t.text}
                </p>

                {/* User */}
                <div className="flex items-center mt-4">
                  <img
                    src="image 6.png"
                    alt={t.name}
                    className="w-12 h-12 rounded-full border border-white/30 object-cover"
                  />
                  <div className="ml-3 text-left">
                    <h4 className="font-semibold text-white text-sm sm:text-base">
                      {t.name}
                    </h4>
                    <p className="text-[#7dd4ff] text-xs sm:text-sm">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesSection;
