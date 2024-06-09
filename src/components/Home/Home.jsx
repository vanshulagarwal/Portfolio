import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './Home.scss';
import Resume from "../../assets/Resume.pdf";
import avatar6 from '../../assets/avatar6.png';
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.png'
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const Home = ({ addBtnRef }) => {
    const btnRefs = useRef([]);

    useEffect(() => {
        btnRefs.current.forEach((btnRef) => {
            if (btnRef) {
                addBtnRef(btnRef);
            }
        });
    }, [addBtnRef]);

    return (
        <div className="home" id="home">

            <motion.h1 className='name'
                initial={{ scale: 1.05, }}
                animate={{ scale: 1, }}
                transition={{ duration: 0.5, delay: 1.2 }}
            >VANSHUL AGARWAL</motion.h1>

            <div className="content">
                <motion.div className="avatar"
                    initial={{ scale: 1.1, }}
                    animate={{ scale: 1, }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileInView={{ once: true }}
                >
                    <img src={avatar6} alt="avatar" />
                </motion.div>
                <div className="details">
                    <div className="top">
                        <motion.div className="left"
                            initial={{ x: 50, }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            <img src={img1} alt="" />
                        </motion.div>
                        <motion.div className="right"
                            initial={window.innerWidth >= 700 ? { x: -50, } : { y: 20 }}
                            animate={window.innerWidth >= 700 ? { x: 0, } : { y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            <div className="desc">
                                An innovative full stack web developer fluent in the MERN stack, I excel in both frontend and backend development. I thrive on crafting pixel-perfect frontend interfaces and engineering robust backend systems.
                            </div>
                            <div className="buttons">
                                <a href={Resume} download="VanshulAgarwal.pdf"
                                    ref={(el) => (btnRefs.current.push(el))}>
                                    <button className='btn'>
                                        <span className='btnAnimation'>
                                            <span></span>
                                        </span>
                                        <span className='btnText'>Download CV</span>
                                    </button>
                                </a>
                                <a href="#contact"
                                    ref={(el) => (btnRefs.current.push(el))}>
                                    <button className='btn'>
                                        <span className='btnAnimation'>
                                            <span></span>
                                        </span>
                                        <span className='btnText'>Contact Me</span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                    <div className="bottom">
                        <div className='left'>
                            <div>28.5355° N, 77.3910° E</div>
                            <div>NOIDA, INDIA</div>
                        </div>
                        <div className="right">
                            <a href="https://www.linkedin.com/in/vanshul-agarwal/" target='_blank'
                                ref={(el) => (btnRefs.current.push(el))}><FaLinkedinIn /></a>
                            <a href="https://github.com/vanshulagarwal" target='_blank'
                                ref={(el) => (btnRefs.current.push(el))}><FaGithub /></a>
                            <a href="https://leetcode.com/u/vanshulagarwal2004/" target='_blank'
                                ref={(el) => (btnRefs.current.push(el))}><SiLeetcode /></a>
                            <a href="https://codeforces.com/profile/vanshulagarwal" target='_blank'
                                ref={(el) => (btnRefs.current.push(el))}><SiCodeforces /></a>
                            <a href="https://www.twitter.com/vanshulagarwal" target='_blank'
                                ref={(el) => (btnRefs.current.push(el))}><FaXTwitter /></a>
                            <a href="https://www.instagram.com/im_v_agarwal/" target='_blank'
                                ref={(el) => (btnRefs.current.push(el))}><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            <img className='img1' src={img1} alt="" />
            <img className='img2' src={img2} alt="" />
        </div>
    )
}

export default Home;