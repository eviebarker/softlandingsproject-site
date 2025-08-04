import React from "react";
import "../index.css";
import logo from "../assets/logowidetransparent.png";
import sofa from "../assets/sofa.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen relative bg-soft-cream text-soft-brown px-4 sm:px-6 md:px-8 pt-4 pb-10 font-sans">
      {/* Main z-indexed content */}
      <div className="z-10">
        {/* Navbar */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-10">
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
            <Link to="/fundingpolicy" className="hover:underline hover:text-soft-peach">Funding Policy</Link>
            <Link to="/contact" className="hover:underline hover:text-soft-peach">Contact</Link>
          </nav>
        </header>

        {/* Hero section */}
        <div className="md:flex md:pt-14">
          {/* Left panel */}
          <div className="md:w-3/5 flex flex-col justify-start text-left">
            <div className="max-w-[42rem]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Helping Hard-to-Home<br />Animals Find Soft Landings
              </h1>
              <p className="text-lg text-soft-taupe mb-4">
                We remove the financial barriers to adoption so more animals get the second chance they deserve.
              </p>
              <p className="text-lg text-soft-taupe mb-4">
                Some animals wait months, even years for a family — not because they’re unlovable, but because the cost of care feels overwhelming.
              </p>
              <p className="text-lg text-soft-taupe mb-4 font-semibold">
                That’s where we step in.
              </p>
              <p className="text-lg text-soft-taupe mb-8">
                By contributing towards essential expenses like vet fees, transport, and starter supplies, we make it easier for the right people to say yes to the animals who need them most.
              </p>
              {/* Button aligned with text block */}
              <div className="flex justify-center md:justify-start md:pl-[10vw]">
                <Link to="/support">
                  <button className="text-lg bg-soft-peach text-white font-semibold py-4 px-8 rounded shadow hover:bg-soft-brown transition">
                    Get Involved
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:flex-1"></div>
        </div>
      </div>

      {/* Desktop-only: sofa illustration pinned to bottom right */}
      <img
        src={sofa}
        alt="Animal on sofa illustration"
        className="
          hidden md:block
          absolute bottom-0 right-0
          w-[40rem] lg:w-[45rem]
          pointer-events-none select-none
        "
      />

      {/* Mobile: sofa below content */}
      <div className="mt-8 md:hidden flex justify-center">
        <img
          src={sofa}
          alt="Animal on sofa illustration"
          className="w-80 pointer-events-none select-none"
        />
      </div>
    </div>
  );
}

export default Home;
