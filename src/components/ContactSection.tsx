import React, { useState } from "react";
import { motion } from "motion/react";
import FadeIn from "./FadeIn";

const socialLinks = [
  {
    label: "ayushsanodiya7@gmail.com",
    href: "mailto:ayushsanodiya7@gmail.com",
    icon: (
      <svg viewBox="0 0 48 48" className="w-5 h-5 sm:w-[22px] sm:h-[22px] flex-shrink-0">
        <circle cx="24" cy="24" r="24" fill="#6B9DC2" />
        <rect x="12" y="16" width="24" height="16" rx="2" fill="#fff" />
        <path d="M12 16l12 10 12-10" fill="none" stroke="#6B9DC2" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 32l9-7M36 32l-9-7" fill="none" stroke="#6B9DC2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/916264735399",
    icon: (
      <svg viewBox="0 0 48 48" className="w-5 h-5 sm:w-[22px] sm:h-[22px] flex-shrink-0">
        <circle cx="24" cy="24" r="24" fill="#25D366" />
        <path d="M24 12.5c-6.35 0-11.5 5.15-11.5 11.5 0 2.03.53 3.93 1.46 5.59L12.5 35.5l6.1-1.6A11.44 11.44 0 0024 35.5c6.35 0 11.5-5.15 11.5-11.5S30.35 12.5 24 12.5zm0 20.8a9.26 9.26 0 01-4.73-1.3l-.34-.2-3.52.92.94-3.44-.22-.35A9.28 9.28 0 0114.7 24c0-5.13 4.17-9.3 9.3-9.3s9.3 4.17 9.3 9.3-4.17 9.3-9.3 9.3zm5.1-6.96c-.28-.14-1.65-.82-1.91-.91-.25-.1-.44-.14-.62.14-.19.28-.72.91-.88 1.1-.16.18-.33.2-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48h-.53c-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.31s1 2.68 1.13 2.87c.14.18 1.96 2.99 4.74 4.19.66.29 1.18.46 1.58.59.67.21 1.27.18 1.75.11.53-.08 1.65-.67 1.88-1.33.24-.65.24-1.21.17-1.33-.07-.11-.25-.18-.53-.32z" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_gfxwithayush/",
    icon: (
      <svg viewBox="0 0 48 48" className="w-5 h-5 sm:w-[22px] sm:h-[22px] flex-shrink-0">
        <defs>
          <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="30%" stopColor="#F44336" />
            <stop offset="60%" stopColor="#E040FB" />
            <stop offset="100%" stopColor="#9C27B0" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#igGrad)" />
        <rect x="14" y="14" width="20" height="20" rx="6" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="24" cy="24" r="5" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="31" cy="17" r="1.5" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "http://www.linkedin.com/in/ayush-sanodiya-880a90238",
    icon: (
      <svg viewBox="0 0 48 48" className="w-5 h-5 sm:w-[22px] sm:h-[22px] flex-shrink-0">
        <circle cx="24" cy="24" r="24" fill="#0077B5" />
        <path d="M18 20v12h-3.5V20H18zm-1.75-5.5a2 2 0 110 4 2 2 0 010-4zM20.5 20H24v1.6c.5-.95 1.8-1.95 3.7-1.95 3.95 0 4.68 2.6 4.68 5.98V32H28.9v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.96V32H20.5V20z" fill="#fff" />
      </svg>
    ),
  },
];

const projectTypes = [
  "Branding",
  "Logo Design",
  "Social Media Creatives",
  "Product Ads",
  "Poster Design",
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hi Ayush! I'm ${formData.name}.\n\nProject Type: ${formData.projectType}\n\n${formData.message}\n\nEmail: ${formData.email}`;
    window.open(`https://wa.me/916264735399?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-[#0C0C0C] py-20 sm:py-28 md:py-32 px-5 sm:px-8 relative overflow-hidden rounded-t-[40px] sm:rounded-t-[60px] -mt-10 sm:-mt-16 md:-mt-20 z-20">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF8A00]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7C3AED]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left Side: Heading & Info */}
          <FadeIn y={30}>
            <div className="flex flex-col">
              <span className="text-[#FF8A00] uppercase tracking-[0.3em] text-xs sm:text-sm font-bold mb-6">
                Contact
              </span>

              <h2 id="contact-title" className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tight text-white mb-6">
                Let's create<br />
                something<br />
                <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFC700] bg-clip-text text-transparent">
                  extraordinary.
                </span>
              </h2>

              <p className="text-[#D7E2EA]/50 text-base sm:text-lg leading-relaxed max-w-md mb-10">
                Available for freelance projects and full-time opportunities. Let's discuss your next production.
              </p>

              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#D7E2EA]/50 md:text-[#D7E2EA]/40 md:hover:text-white transition-all duration-400 text-sm sm:text-base group"
                  >
                    <span className="md:grayscale md:opacity-50 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-400">
                      {link.icon}
                    </span>
                    <span className="md:group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Contact Form */}
          <FadeIn delay={0.2} y={30}>
            <form
              onSubmit={handleSubmit}
              className="bg-[#111318] border border-white/[0.06] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-5"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[#D7E2EA]/50 uppercase tracking-[0.15em] text-[11px] font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-[#0C0C0C] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#D7E2EA]/25 focus:outline-none focus:border-[#FF8A00]/40 transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[#D7E2EA]/50 uppercase tracking-[0.15em] text-[11px] font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-[#0C0C0C] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#D7E2EA]/25 focus:outline-none focus:border-[#FF8A00]/40 transition-colors duration-300"
                />
              </div>

              {/* Project Type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="project-type" className="text-[#D7E2EA]/50 uppercase tracking-[0.15em] text-[11px] font-bold">
                  Project Type
                </label>
                <select
                  name="projectType"
                  id="project-type"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="bg-[#0C0C0C] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white appearance-none cursor-pointer focus:outline-none focus:border-[#FF8A00]/40 transition-colors duration-300"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23666' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="" disabled className="text-gray-500">Select project type...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0C0C0C] text-white">{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[#D7E2EA]/50 uppercase tracking-[0.15em] text-[11px] font-bold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="bg-[#0C0C0C] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#D7E2EA]/25 focus:outline-none focus:border-[#FF8A00]/40 transition-colors duration-300 resize-y min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-2 py-3.5 rounded-full bg-gradient-to-r from-[#FF8A00] via-[#FF6B00] to-[#FFC700] text-[#0C0C0C] font-bold text-sm sm:text-base uppercase tracking-[0.15em] cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,138,0,0.3)]"
              >
                Send Message
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
