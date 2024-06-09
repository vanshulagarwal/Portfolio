import './About.scss';
import { BsStack } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { IoColorPalette } from "react-icons/io5";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="about" id='about'>
            <div className="container">

                <h1 className="section-title-01">About</h1>
                <h2 className="section-title-02">About</h2>
                <div className="content">
                    <div className="aboutList">
                        <motion.div className="eachItem playing"
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="image"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="infotop">
                                <BsStack />
                                <div>Full Stack Developer</div>
                                <div className="desc">Seamlessly integrating front-end finesse with robust back-end solutions for holistic excellence. Dedicated to driving innovation and delivering impactful experiences across the entire development stack. </div>
                            </div>
                        </motion.div>
                        <motion.div className="eachItem playing"
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="image"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="infotop">
                                <IoSettings />
                                <div>Backend Developer</div>
                                <div className="desc">Crafting scalable infrastructures and optimizing database performance for seamless data management. Committed to delivering secure, reliable server-side solutions that power mission-critical applications. </div>
                            </div>
                        </motion.div>
                        <motion.div className="eachItem playing"
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="image"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="infotop">
                                <IoColorPalette />
                                <div>Frontend Developer</div>
                                <div className="desc">Designing captivating user interfaces with pixel-perfect precision, ensuring seamless experiences across devices. Passionate about pushing the boundaries of creativity and usability in every frontend masterpiece. </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;