import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowidetransparent.png";
import fundingImage from "../assets/dogmoney.png";
import transparencyImage from "../assets/transparency.png";

function FundingPolicy() {
  return (
    <div className="relative min-h-screen bg-soft-cream text-soft-brown font-sans">
      {/* Navbar & Funding Policy */}
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
            <Link to="/" className="hover:underline hover:text-soft-peach">
              Home
            </Link>
            <Link to="/about" className="hover:underline hover:text-soft-peach">
              About
            </Link>
            <Link
              to="/support"
              className="hover:underline hover:text-soft-peach"
            >
              Support
            </Link>
            <Link
              to="/fundingpolicy"
              className="hover:underline hover:text-soft-peach"
            >
              Funding Policy
            </Link>
            <Link
              to="/contact"
              className="hover:underline hover:text-soft-peach"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Funding Policy Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left mb-24">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-soft-brown">
              Funding Policy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold italic mb-6 text-soft-taupe">
              Boring? Maybe. Important? Absolutely. Here’s how we handle every
              penny.
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-soft-taupe leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              We maintain separate donation pools for individual animals so the
              public can contribute directly to an animal they connect with.
              These funds go towards pre-adoption and post-adoption costs such
              as adoption fees, veterinary expenses, and essential supplies;
              adopters can claim expenses only up to the amount raised.
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-soft-taupe leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              Funds for a specific animal are kept secure until needed, with
              payments made directly to service providers (such as veterinary
              clinics) wherever possible. If an animal is adopted before all
              funds are raised, the adopter is still entitled to the full
              amount collected.
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-soft-taupe leading-relaxed max-w-xl mx-auto md:mx-0">
              Any unused balance, for example, due to surplus after treatment,
              is reallocated to help other hard-to-home animals in line with
              our charitable purposes. The charity is not liable for costs
              beyond the funds raised for a specific animal.
            </p>
          </div>
          <div className="flex justify-end w-full pr-0 -mr-8 sm:-mr-6 md:-mr-8">
            <img
              src={fundingImage}
              alt="Funding Policy Illustration"
              className="max-h-[40rem] sm:max-h-[50rem] md:max-h-[100rem] w-auto pointer-events-none select-none"
            />
          </div>
        </main>
      </div>

      {/* Transparency Section */}
      <section className="absolute top-[calc(100%_-_12rem)] left-0 w-full min-h-[calc(100vh_-_6rem)]">
        {/* Trapezoid SVG */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <polygon points="0,0 100,10 100,100 0,100" fill="#3E301F" />
        </svg>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 pt-32 pb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
          <div className="order-1 md:order-2 text-soft-cream max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Transparency & Responsibility
            </h2>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-6">
              We keep all funds safe until they are needed and ensure they are
              used solely for the intended animal’s care and wellbeing. Where
              possible, payments go directly to service providers.
            </p>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
              We are not liable for the actions of adopters or partner
              organisations, nor for post-adoption costs beyond the agreed
              assistance. Any surplus funds are used to help the next animal in
              need.
            </p>
          </div>
          <div className="order-2 md:order-1 flex justify-center md:justify-start md:pl-32 md:mt-16">
            <img
              src={transparencyImage}
              alt="Transparency Illustration"
              className="w-96 sm:w-[30rem] md:w-[40rem] pointer-events-none select-none transform -translate-x-8 md:-translate-x-16"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FundingPolicy;
