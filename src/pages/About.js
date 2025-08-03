import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowidetransparent.png";
import aboutImage from "../assets/aboutus.png";
import howWeWorkImage from "../assets/howwework.png";

function About() {
  return (
    <div className="relative min-h-screen bg-soft-cream text-soft-brown font-sans">
      {/* Navbar & About */}
      <div className="z-10 px-4 sm:px-6 md:px-8 pt-4 pb-32">
        {/* Navbar */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-12">
          <div className="flex items-center space-x-2 text-2xl font-bold">
            <img
              src={logo}
              alt="Soft Landings Logo"
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </div>
          <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-lg text-center">
            <Link to="/" className="hover:underline hover:text-soft-peach">Home</Link>
            <Link to="/about" className="hover:underline hover:text-soft-peach">About</Link>
            <Link to="/support" className="hover:underline hover:text-soft-peach">Support</Link>
            <Link to="/contact" className="hover:underline hover:text-soft-peach">Contact</Link>
          </nav>
        </header>

        {/* About Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left mb-24">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-soft-brown">
              About Soft Landings
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-soft-taupe leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              Soft Landings exists to improve adoption outcomes for hard-to-home animals by offering direct financial support to their future families.
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-soft-taupe leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              We remove financial barriers by helping to fund pre- and post-adoption costs including vet fees, supplies, and adoption fees so that more people feel empowered to adopt.
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-soft-taupe leading-relaxed max-w-xl mx-auto md:mx-0">
              We partner with rescues across the UK and operate entirely through community-driven fundraising and donations.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={aboutImage}
              alt="About Soft Landings Illustration"
              className="max-h-[20rem] sm:max-h-[30rem] md:max-h-[40rem] w-auto pointer-events-none select-none"
            />
          </div>
        </main>
      </div>

      {/* How We Work Section with full-bleed trapezoid */}
      <section className="absolute top-[calc(100%_-_12rem)] left-0 w-full min-h-[calc(100vh_-_6rem)]">
        {/* Trapezoid SVG */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <polygon points="0,20 100,0 100,100 0,100" fill="#3E301F" />
        </svg>

        {/* Content with mobile-first text→image order */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 pt-32 pb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
          {/* Text on Mobile first, Desktop second */}
          <div className="order-1 md:order-2 text-soft-cream max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-6">
              We operate as a charitable fund that provides direct financial assistance to adopters of hard-to-home animals. Our model is simple: trusted rescues refer suitable cases, and we work with them to identify what’s needed.
            </p>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-6">
              We can contribute towards transport, initial vet work, starter supplies, and other essential costs. Each animal we help is listed on our site with a transparent breakdown of support offered.
            </p>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
              All support is raised through community donations, and anything left over goes to help the next animal in line.
            </p>
          </div>

          {/* Image on Mobile second, Desktop first (larger, rotated, nudged further right & down) */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start md:pl-32 md:mt-16">
            <img
              src={howWeWorkImage}
              alt="How Soft Landings Works"
              className="w-64 sm:w-80 md:w-96 rotate-3 pointer-events-none select-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
