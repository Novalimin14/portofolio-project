
import Link from "next/link";
import Image from "next/image";

const DataFooter = [
    {
        title: "Years of experience",
        value: "<1"
    },
    {
        title: "Projects completed",
        value: "3"
    },
    {
        title: "Technologies mastered",
        value: "9"
    },
    {
        title: "Code commits",
        value: "5"
    },
    
]

export default function Footer() {
  return (
    <div className="mt-12 mb-12 flex justify-around w-full text-center">
        {DataFooter.map((item, index) =>(
            <div key={index} className="transition-transform duration-300 hover:scale-110">
                <p className="text-4xl font-bold ">{item.value}</p>
                <p className="text-gray-400">{item.title}</p>
            </div>
        ))}  
    </div>
  );
}
