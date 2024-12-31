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
                        {/* <motion.div className="eachItem"
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="infotop">
                                <BsStack />
                                <div>Full Stack Developer</div>
                                <div className="desc">Seamlessly integrating front-end finesse with robust back-end solutions for holistic excellence. Dedicated to driving innovation and delivering impactful experiences across the entire development stack. </div>
                            </div>
                        </motion.div> */}
                        <div class="cards-container">
                            <div class="card">
                                <div class="iconContainer"><BsStack className='icon' /></div>
                                <div class="content">
                                    <h2>Full Stack Developer</h2>
                                    <p>Masterfully bridging elegant front-end interfaces with robust back-end systems for comprehensive solutions. Dedicated to driving innovation and delivering impactful experiences across the entire development stack.</p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="iconContainer"><IoSettings className='icon' /></div>
                                <div class="content">
                                    <h2>DSA Enthusiast</h2>
                                    <p>Solving complex problems with precision and efficiency through data structures and algorithms. Dedicated to optimizing solutions and tackling challenges across competitive programming platforms with unwavering focus. </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="iconContainer"><IoColorPalette className='icon' /></div>
                                <div class="content">
                                    <h2>Freelancer</h2>
                                    <p>Delivering tailor-made solutions with a client-first approach, blending creativity with technical expertise. Passionate about crafting exceptional projects that leave a lasting impact while ensuring seamless collaboration and satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;