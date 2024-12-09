import Image from 'next/image'
import { Inter } from 'next/font/google'
 
import Social from '@/components/ui/Social';
import Photo from '@/components/ui/Photo';
import Footer from '@/components/layouts/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-full">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="flex flex-col md:flex-col-2 md:flex-row items-center md:items-center md:my-10 my-10 container mx-auto md:px-6">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-3/2 ">
          <p className="text-green-500 font-semibold text-lg">
            Software Developer
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4">
            Hello, I'm <span className="text-green-500">Muhammad Noval Muhaimin</span>
          </h1>
          <p className="text-gray-400 mt-4">
          I specialize in developing responsive and user-friendly applications while continuously improving my skills in modern programming frameworks and tools.
          </p>

          {/* Buttons */}
          <Social />
        </div>

        {/* Right Content */}
        <Photo/>
      </section>
      <Footer/>
      
    </div>
  )
}
