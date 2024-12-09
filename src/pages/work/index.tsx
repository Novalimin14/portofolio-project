"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { BsArrowRight, BsGithub } from "react-icons/bs";


import Link from "next/link";
import Image from "next/image";

import { title } from "process";
import { Description } from "@headlessui/react";

const projects = [
  {
    num: "01",
    category: "Fullstack Web Development Project",
    title: "Web Management Zakat Lazismu",
    description: "This application is developed as part of a thesis project to enhance the efficiency and transparency of zakat management within Lazismu. The platform simplifies the process of collecting, calculating, and distributing zakat funds while adhering to Islamic principles.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Laravel" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    github: "https://github.com",
    image: "/project/web.jpg", // ganti sesuai path image Anda
    live: "https://google.com",
  },
  {
    num: "02",
    category: "Full-Stack Mobile Development Project",
    title: "Management Zakat App",
    description: "This application is developed as part of a thesis project to enhance the efficiency and transparency of zakat management within Lazismu. The platform simplifies the process of collecting, calculating, and distributing zakat funds while adhering to Islamic principles.",
    stack: [
      { name: "Java" },
      { name: "Android Studio" },
      { name: "Lavavel" },
      { name: "MySQL" },
    ],
    github: "https://github.com",
    image: "/project/aplikasi.jpg", // ganti sesuai path image Anda
    live: "https://google.com",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isMobile, setIsMobile] = useState(false);

  
  return (
    <>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}

    className="h-[80vh] flex flex-col justify-center py-12 md:px-0">
      <div className="container mx-auto " >
        <div className="flex flex-col md:flex-row md:gap-[30px] p-4">
          <div className="w-full flex flex-col md:justify-between order-2 md:order-none">
            <div className="text-8xl leading-none font-extrabold md:text-9xl text-outline">
              {project.num}
            </div>

            <h2 className="text-2xl md:text-6xl font-bold text-white" >{project.category} </h2>
            <p className=" text-white/60">{project.description}</p>
            <ul className="flex gap-4">
            {project.stack.map ((item,
            index) => {
            return (
              <li key={index} className="text-xl text-green-500">
                {item.name}
                {index !== project.stack.length - 1 && ","}
              </li>
            );
          })}
              
            </ul>
          </div>
          <div className="w-full xl:w-[50%]">
          <Swiper
                onSlideChange={(swiper) =>
                  setProject(projects[swiper.activeIndex])
                }
                spaceBetween={30}
                slidesPerView={1}
                className="w-full h-full"
              >
                {projects.map((proj, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={800}
                      height={500}
                      className="rounded-xl shadow-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div>
            <h4>Swipe to see more</h4>
        </div>
          </div>
        </div>
      </div>
      
    </motion.div>
    </>
  )
}

export default Work
