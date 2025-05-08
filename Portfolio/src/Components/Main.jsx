import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const profilePic = 'https://randomuser.me/api/portraits/men/32.jpg'; // Example professional photo from web
const resumeLink = 'https://drive.google.com/uc?export=download&id=1Qw2Qw3Qw4Qw5Qw6Qw7Qw8Qw9Qw0Qw'; // Replace with your actual resume link

const Main = () => {
    return (
        <section id="main" className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
            {/* Animated SVG Wave Background */}
            <svg className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#6366f1" fillOpacity="0.12" d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </svg>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 w-full">
                {/* Profile Image */}
                <div className="flex-shrink-0 shadow-2xl rounded-full overflow-hidden border-4 border-primary bg-white">
                    <img
                        src={profilePic}
                        alt="Hossain Ahmmed Taufiq"
                        className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
                {/* Info */}
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-gray-900 text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 leading-tight">
                        Hossain Ahmmed Taufiq
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary flex justify-center md:justify-start items-center mb-4">
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                1200,
                                'Full Stack Web Developer',
                                1200,
                                'Tech Enthusiast',
                                1200,
                                'Entrepreneur',
                                1200,
                            ]}
                            wrapper="div"
                            cursor={true}
                            speed={50}
                            style={{ paddingLeft: '6px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className="text-gray-700 max-w-xl mb-6 mx-auto md:mx-0 text-base sm:text-lg">
                        Passionate about building scalable web applications and interactive user experiences. Experienced in full-stack development, modern frameworks, and cross-functional teamwork. Always eager to learn and take on new challenges.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                        <span className="flex items-center gap-2 text-gray-600 bg-white/80 px-3 py-1 rounded-full text-xs sm:text-sm shadow"><FaEnvelope className="text-primary" /> hossainmhmedtaufiq22@gmail.com</span>
                        <span className="flex items-center gap-2 text-gray-600 bg-white/80 px-3 py-1 rounded-full text-xs sm:text-sm shadow"><FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4">
                        <div className="flex justify-center md:justify-start gap-4 text-gray-800 text-xl sm:text-2xl">
                            <a href="https://twitter.com/hossaintaufiq22" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform transform hover:scale-110"><FaTwitter /></a>
                            <a href="https://www.facebook.com/mdhossainahmmed.taufiq/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-transform transform hover:scale-110"><FaFacebook /></a>
                            <a href="https://www.linkedin.com/in/hossain-ahmmed-129b29253/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-transform transform hover:scale-110"><FaLinkedin /></a>
                            <a href="https://www.instagram.com/hossain_ahmmed_taufiq/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110"><FaInstagram /></a>
                            <a href="https://github.com/hossaintaufiq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-transform transform hover:scale-110"><FaGithub /></a>
                        </div>
                        <a
                            href={resumeLink}
                            download
                            className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition-colors duration-200 text-sm sm:text-base"
                        >
                            <FaDownload /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
