
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Main = () => {
    return (
        <div id="main" className="relative w-full h-screen overflow-hidden">
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg"
                alt="Background"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-white/60 backdrop-blur-sm flex justify-center items-center">
                <div className="max-w-[800px] px-6 text-center">
                    <h1 className="text-gray-900 text-3xl sm:text-5xl font-extrabold mb-4">
                        Hi, I'm Hossain Ahmmed
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 flex justify-center items-center mb-6">
                        <TypeAnimation
                            sequence={[
                                'A Software Engineer',
                                1000,
                                'Full Stack Web Developer',
                                1000,
                                'A Tech Enthusiast',
                                1000,
                                'An Entrepreneur',
                                1000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            speed={50}
                            style={{ paddingLeft: '6px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-center gap-6 sm:gap-8 text-gray-800 transition-all duration-300">
                        <a href="https://twitter.com/hossaintaufiq22" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform transform hover:scale-110">
                            <FaTwitter size={25} />
                        </a>
                        <a href="https://www.facebook.com/mdhossainahmmed.taufiq/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-transform transform hover:scale-110">
                            <FaFacebook size={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/hossain-ahmmed-129b29253/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-transform transform hover:scale-110">
                            <FaLinkedin size={25} />
                        </a>
                        <a href="https://www.instagram.com/hossain_ahmmed_taufiq/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110">
                            <FaInstagram size={25} />
                        </a>
                        <a href="https://github.com/hossaintaufiq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-transform transform hover:scale-110">
                            <FaGithub size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
