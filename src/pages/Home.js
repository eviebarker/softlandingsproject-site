import React from "react";
import "../index.css";
import logo from "../assets/logowidetransparent.png"; // Updated logo
import pcIcon from "../assets/pcicon.png"; // Replace with a dog/cat illustration when ready
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-soft-cream text-soft-brown px-4 sm:px-6 md:px-8 pt-4 pb-10 font-sans">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-10">
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

        {/* Hero Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-soft-brown">
              Helping Hard-to-Home<br />Animals Find Soft Landings
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-soft-taupe mb-6 max-w-xl mx-auto md:mx-0">
              We remove the financial barriers to adoption so more animals get the
              second chance they deserve.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={pcIcon} // Swap this out for a custom dog/cat graphic if available
              alt="Dog and cat illustration"
              className="max-h-[18rem] sm:max-h-[24rem] md:max-h-[35rem] w-auto pointer-events-none select-none"
            />
          </div>
        </main>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link to="/support">
            <button className="w-full sm:w-auto text-lg bg-soft-peach text-white font-semibold py-4 px-8 rounded shadow hover:bg-soft-brown transition">
              Get Involved
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
