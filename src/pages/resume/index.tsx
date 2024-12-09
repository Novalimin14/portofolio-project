import { useState } from "react";
import { faHtml5, faCss3Alt, faJsSquare,faPython, faReact, faLaravel, faJava, faAndroid, faGitAlt, faPhp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL } from "@fortawesome/free-solid-svg-icons";
export default function WhyHireMe() {
  const [activeTab, setActiveTab] = useState("Organization");

  const tabs = [
    { id: "Experience", label: "Experience" },
    { id: "Organization", label: "Experience Organization" },
    { id: "Education", label: "Education" },
    { id: "Skills", label: "Skills" },
    { id: "AboutMe", label: "About me" },
  ];

  const contentData = {
    Experience: [
      {
        year: "2023",
        title: "Android Developer Intern",
        place: "PlusNexus",
        description: [
          " Integrated AdMob into mobile applications, optimizing ad placements for increased revenue.",
          "Collaborated with the development team to ensure smooth implementation of ad units across various mobile platforms.",
" Analyzed user engagement data to refine ad strategies and improve app monetization.",
 "Gained hands-on experience in mobile app development, focusing on user experience and revenue generation through ads",
        ],
      },
    ],
    Organization: [
      {
        year: "2021 - 2022",
        title: "Ketua Divisi Organisasi",
        place: "Ikatan Mahasiswa Muhammadiyah",
        description: [
          "Mengkoordinasi dan memimpin berbagai kegiatan, serta mendorong kolaborasi antar anggota untuk mencapai tujuan organisasi.",
          "Menyusun acara dan lokakarya untuk meningkatkan kemampuan dan pengetahuan para anggota.",
        ],
      },
      {
        year: "2022 - 2023",
        title: "Anggota",
        place: "Ikatan Mahasiswa Muhammadiyah",
        description: [
          "Berperan aktif dalam perencanaan dan pelaksanaan kegiatan organisasi, mendukung kepemimpinan dalam mencapai tujuan bersama.",
        ],
      },
      {
        year: "2020 - Saat ini",
        title: "Sekretaris, Divisi Komunikasi, Informatika, dan Informasi",
        place: "Ikatan Mahasiswa Muhammadiyah, Wonogiri",
        description: [
          "Mengelola komunikasi dan penyebaran informasi dalam organisasi, memastikan kelancaran koordinasi antara tingkat distrik dan departemen.",
          "Memimpin inisiatif untuk meningkatkan strategi komunikasi digital dan memperluas jangkauan organisasi melalui teknologi modern.",
        ],
      },
    ],
    Education: [
      {
        year: "2020-2024",
        title: "Degree in Informatics Engineering (Bachelor's)",
        place: "Universitas Muhammadiyah Surakarta (Indonesia)",
        achievements: [
          
        ],
      },
      {
        year: "2024",
        title: "Fullstack JavaScript Bootcamp",
        place: "Online Course (MySkill)",
        achievements: [
          
        ],
      },
    ],
    Certifications: [
      "Python",
      "Excel",
      "PHP",
      "SQL",
      "Java",
      "React JS",
      "HTML",
      "CSS",
    ],
    Skills: [
      { icon: faHtml5, alt: "HTML" },
      { icon: faCss3Alt, alt: "CSS" },
      { icon: faJsSquare, alt: "JavaScript" },
      { icon: faReact, alt: "React" },
      { icon: faPhp, alt: "PHP" },
      { icon: faJava, alt: "Java" },
      { icon: faGitAlt, alt: "Git" },
      { icon: faAndroid, alt: "Android Studio" },
      { icon: faLaravel, alt: "Laravel" },
      { icon: faPython, alt: "Phyton" },
    ],
    AboutMe: {
      name: "Muhammad Noval Muhaimin",
      location: "Surakarta, Jawa Tengah, Indonesia",
      experience: "<1 Years",
      phone: "+62813-2669-0102",
      email: "novalimin14@gmail.com",
      linkedin: "https://www.linkedin.com/in/m-novalmuhaimin-5716aa2a0",
      languages: [
        { name: "Indonesia", proficiency: "Tinggi" },
        { name: "English", proficiency: "Menengah" },
      ],
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Experience":
      case "Organization":
      case "Education":
        return (
            <div className="p-4 md:p-0 font-bold font-mono">
                <h2 className="text-white text-2xl font-bold mb-4">
                    {activeTab === "Experience" ? "Experience" : activeTab === "Organization" ? "Organization" : "Education"}
                </h2>
                <div
                    className="grid grid-cols-1 p-4 md:grid-cols-2 gap-4 overflow-y-auto custom-scrollbar "
                    style={{ maxHeight: "250px" }}
                >
                    {contentData[activeTab].map((item, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded hover:text-white hover:shadow-lg hover:shadow-green-500">
                        <h3 className="text-green-500 ">{item.year}</h3>
                        <p className="text-white font-bold">{item.title}</p>
                        <p className="text-gray-400">{item.place} </p>
                        
                    </div>
                    ))}
                </div>
                </div>

          
        );
      case "Skills":
        return (
          <div className="p-4 md:p-0 font-bold font-mono">
            <h2 className="text-white text-2xl font-bold mb-4">My skills</h2>
            <div className="grid grid-cols-3 gap-4">
              {contentData.Skills.map((skill, index) => (
                <div
                key={index}
                className="bg-gray-800 p-4 rounded flex items-center justify-center relative group hover:shadow-md hover:shadow-green-500" // group digunakan untuk hover efek
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="h-20 text-4xl group-hover:text-green-500  transition duration-300"
                />
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white bg-green-500 text-sm rounded p-2 transition-opacity duration-200 max-w-xs">
                  {skill.alt} {/* Tooltip dengan teks (title) */}
                </div>
              </div>
              
              ))}
            </div>
          </div>
        );
      case "AboutMe":
        const aboutMe = contentData.AboutMe;
        return (
          <div className="p-4 md:p-0 font-bold font-mono">
            <h2 className="text-white text-2xl font-bold mb-4">About me</h2>
            <div className="text-gray-400">
              <p>
                Name: <span className="text-white">{aboutMe.name}</span>
              </p>
              <p>
                Adress: <span className="text-white">{aboutMe.location}</span>
              </p>
              <p>
                Experience:{" "}
                <span className="text-white">{aboutMe.experience}</span>
              </p>
              <p>
                Phone: <span className="text-white">{aboutMe.phone}</span>
              </p>
              <p>
                Email: <span className="text-white">{aboutMe.email}</span>
              </p>
              <p>
                linkedin: <span className="text-white">{aboutMe.linkedin}</span>
              </p>
              <p>
                Language: <span className="text-white">{aboutMe.languages.map((language) => language.name).join(", ")}</span>
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" min-h-screen p-8 font-bold font-mono">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-8">Why hire me?</h1>
        <p className="text-gray-400 mb-8">
        A dedicated programmer with a degree in Informatics from
 Universitas Muhammadiyah Surakarta, skilled in software development and problem-solving, and
 passionate about coding and technology innovation.
        </p>
        <div className="flex flex-col md:flex-row">
          {/* Tabs */}
          <div className="flex flex-col space-y-4 w-full md:w-1/4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={` rounded text-left ${
                  activeTab === tab.id
                    ? "bg-gray-800 text-white shadow-lg shadow-green-500 py-4 px-6"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 py-3 px-6"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Content */}
          <div className="flex-1 rounded-md ml-0 md:ml-8 ">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
