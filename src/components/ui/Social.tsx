import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const dataSocial = [
    {
        icon: faGithub,
        link: "https://github.com/NovalImin14",
    },
    {
        icon: faLinkedin,
        link: "https://linkedin.com/in/muhammad-noval-muhaimin",
    },
    {
        icon: faTwitter,
        link: "https://twitter.com/novalmuhaimin",
    },
];

const Social = () => {
  return (
    <div className="items-center justify-center md:justify-start mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-2 ">
            <a
                href="#"
                className=" w-[200px] md:w-[300px] bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-400 transition flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download CV
              </a>
              <div className=" space-x-4 md:justify-start md:items-center">
                {dataSocial.map((item, index) => (
                    <a
                    href={item.link}
                    key={index}
                    target='blank'
                    className="text-gray-400 hover:text-green-500 transition text-2xl"
                    >
                    <FontAwesomeIcon icon={item.icon} />
                    </a>
                    
                ))}
                
              </div>
          </div>
  )
}

export default Social
