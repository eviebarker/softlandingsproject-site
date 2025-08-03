import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowidetransparent.png";
import aboutImage from "../assets/aboutus.png";

function About() {
  return (
    <div className="min-h-screen bg-soft-cream text-soft-brown px-4 sm:px-6 md:px-8 pt-4 pb-10 font-sans overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-12">
          <div className="flex items-center space-x-2 text-2xl font-bold">
            <img
              src={logo}
              alt="Soft Landings Logo"
              className="h-20 w-auto max-w-[14rem] sm:max-w-[18rem] md:max-w-[20rem]"
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
        <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
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
    </div>
  );
}

export default About;
