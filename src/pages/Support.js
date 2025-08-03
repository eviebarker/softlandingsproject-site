import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowidetransparent.png";

function Support() {
  return (
    <div className="min-h-screen bg-soft-cream text-soft-brown px-4 sm:px-6 md:px-8 pt-4 pb-10 font-sans">
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

        {/* Intro Section */}
        <main className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-soft-brown">Support Our Animals</h1>
          <p className="text-xl text-soft-taupe mb-8">
            Every animal deserves a second chance - especially those often overlooked due to age,
            health, or behavioural needs. Soft Landings exists to help them find loving homes by
            removing the financial barriers that stand in the way of adoption.
          </p>
          <p className="text-lg text-soft-taupe mb-12">
            Soon, you’ll be able to donate directly to individual animals, helping toward funding the essentials like
            vet care, food, and adoption fees.
          </p>

          {/* Coming Soon Section */}
          <div className="bg-soft-blush/20 border border-soft-blush rounded p-8 shadow-md mb-20">
            <h2 className="text-3xl font-semibold mb-4 text-soft-brown">Coming Soon</h2>
            <p className="text-base sm:text-lg text-soft-brown">
              We’re currently seeking partnerships with rescue centres across the UK. Once live, you'll
              be able to choose specific animals to support and follow their journey to adoption.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="text-center text-lg text-soft-taupe">
            <p>
              Want to partner with us or hear when we launch? Email{" "}
              <a
                href="mailto:hello@softlandingsproject.org.uk"
                className="underline hover:text-soft-peach"
              >
                hello@softlandingsproject.org.uk
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Support;
