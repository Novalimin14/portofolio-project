"use client";

import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 sm:px-8 lg:px-12 mx-auto my-auto">
      <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10 lg:p-12 bg-[#171a1b] rounded-lg shadow-lg">
        {/* Formulir Kontak */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-white/70 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            sit illo esse commodi.
          </p>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Firstname"
              className="col-span-1 px-4 py-3 bg-[#111314] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="col-span-1 px-4 py-3 bg-[#111314] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="col-span-1 px-4 py-3 bg-[#111314] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="col-span-1 px-4 py-3 bg-[#111314] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              className="col-span-2 px-4 py-3 bg-[#111314] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled selected>
                Select a service
              </option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="ui-design">UI/UX Design</option>
            </select>
            <textarea
              rows={4}
              placeholder="Type your message here."
              className="col-span-2 px-4 py-3 bg-[#111314] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="col-span-2 px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Informasi Kontak */}
        <div className="flex flex-col justify-center gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#111314] rounded-lg text-green-500">
              <FiPhone size={24} />
            </div>
            <div>
              <p className="text-white/60">Phone</p>
              <p className="font-bold">(+62)813 2669 0102</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#111314] rounded-lg text-green-500">
              <FiMail size={24} />
            </div>
            <div>
              <p className="text-white/60">Email</p>
              <p className="font-bold">novalimin14@email.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#111314] rounded-lg text-green-500">
              <FiMapPin size={24} />
            </div>
            <div>
              <p className="text-white/60">Address</p>
              <p className="font-bold">Surakarta, Jawa Tengah, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
