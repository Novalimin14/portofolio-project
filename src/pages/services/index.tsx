
import Link from "next/link";
import Image from "next/image";
const dataServices = [
    {
        title: "Web Development",
        numbers: "01",
        description: "I develop responsive and functional websites using frameworks like Laravel, React, and Next.js, focusing on performance optimization and user experience."
    },
    {
        title: "Mobile Development",
        numbers: "02",
        description: "I build mobile applications using Android Studio with Java, designed to meet user needs with optimal performance and functionality."
    },
    {
        title: "UI/UX Design",
        numbers: "03",
        description: "I create engaging and intuitive user interfaces with a strong focus on user experience, ensuring the design aligns with business goals and is easy to use."
    },
];



const Services = () => {
  return (
    
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl ">Services Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-4 p-4">
                {dataServices.map((item, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-800  color-white p-4 hover:text-white hover:shadow-lg hover:shadow-green-500 rounded-lg shadow-lg max-w-lg max-h-lg md:p-4">
                        <div className=" w-full flex justify-between items-center text-3xl md:text-4xl">
                            <h1 className="">{item.numbers}</h1>
                            <h1 className="">hallo</h1>
                        </div>
                        <div >
                            <h3 className="text-3xl text-gray-100 pb-4">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div className="border-b border-white/20 w-full pt-3"></div>
                    </div>
                ))}
                
                
            </div>
            
        </div>
    
  );
}
export default Services;
