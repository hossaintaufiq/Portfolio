// import React from 'react';
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left " src="/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg" alt="" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I am Hossain Ahmmed </h1>
                    <h2 className='flex sm:text-2xl text-2xl text-gray-800 '>I am a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Software Engineer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Full Stack Web Developer',
                                1000,
                                'Tech Enthusiast',
                                1000,
                                'Entrepreneur',
                                1000
                            ]}
                            wrapper="div"
                            cursor={true}
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full '>
                        <a href="https://twitter.com/hossaintaufiq22" target='blank'> <FaTwitter size={20} /></a>
                        <a href="https://www.facebook.com/mdhossainahmmed.taufiq/" target='blank'><FaFacebook size={20} /></a>
                        <a href="https://www.linkedin.com/in/hossain-ahmmed-129b29253/" target='blank'> <FaLinkedin size={20} /></a>
                       <a href="https://www.instagram.com/hossain_ahmmed_taufiq/" target='blank'> <FaInstagram size={20} /></a>
                       <a href="https://github.com/hossaintaufiq" target='blank'><FaGithub size={20} /></a>
                        


                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;