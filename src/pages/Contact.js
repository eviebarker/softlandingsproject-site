import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logowidetransparent.png";

function Contact() {
  return (
    <div className="min-h-screen bg-soft-cream text-soft-brown px-4 sm:px-6 md:px-8 pt-4 pb-10 font-sans">
      <div className="relative z-10">
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
            <Link to="/contact" className="hover:underline hover:text-soft-peach">Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center text-soft-brown">Contact Us</h1>
          <p className="text-lg text-soft-taupe text-center mb-10">
            Got a question, idea, or want to volunteer with us? Drop us a message below and we’ll get back to you as soon as we can.
          </p>

          <div className="bg-soft-blush/20 border border-soft-blush p-8 rounded-lg shadow-lg">
            <form
              action="https://formspree.io/f/xqapgygy"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded border border-soft-brown focus:outline-none text-soft-brown"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded border border-soft-brown focus:outline-none text-soft-brown"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded border border-soft-brown focus:outline-none text-soft-brown"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <p className="text-sm text-soft-taupe italic">* indicates required field</p>

              <button
                type="submit"
                className="bg-soft-peach text-white font-semibold py-3 px-6 rounded shadow hover:bg-soft-brown transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Email contact below the form */}
          <div className="text-center mt-8 text-lg text-soft-taupe">
            <p>
              Or email us directly at{" "}
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

export default Contact;
