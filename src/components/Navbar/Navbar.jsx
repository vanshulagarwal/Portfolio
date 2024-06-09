import './Navbar.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../constants';
import { useEffect, useRef, useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = ({ addBtnRef }) => {
    const btnRefs = useRef([]);

    useEffect(() => {
        btnRefs.current.forEach((btnRef) => {
            if (btnRef) {
                addBtnRef(btnRef);
            }
        });
    }, [addBtnRef]);

    const [toggle, setToggle] = useState(false);

    return (
        <motion.div className="navbar"
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
        >
            <nav className="navMenu">
                <ul className='navMenuUL'
                    initial={{ y: -100, x: '-50%', opacity: 0 }}
                    animate={{ y: 0, x: '-50%', opacity: 1 }}>
                    {navLinks.map((link, index) => (
                        <motion.li key={link.hash} className='navItems'>
                            <a href={link.hash} ref={(el) => (btnRefs.current[index] = el)}>
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <span className='hamburger' onClick={() => setToggle(prev => !toggle)}><FaBarsStaggered /></span>
            <AnimatePresence>
                {toggle &&
                    <nav className="navMobile">
                        <div className='navMenuUL'
                            initial={{ y: -100, x: '-50%', opacity: 0 }}
                            animate={{ y: 0, x: '-50%', opacity: 1 }}>
                            {navLinks.map((link, index) => (
                                <motion.div key={index} className='navItems'
                                    initial={{
                                        y: 20 * index,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: 0.1 * index,
                                            duration: 0.8,
                                            ease: [.075, .82, .165, 1]
                                        }
                                    }}
                                    exit={{
                                        y: 20 * index,
                                        opacity: 0,
                                        transition: {
                                            delay: 0.1 * (navLinks.length - index),
                                            duration: 0.8,
                                            ease: [.075, .82, .165, 1]
                                        }
                                    }}
                                >
                                    <a href={link.hash} ref={(el) => (btnRefs.current[index] = el)} onClick={() => setToggle(prev => !toggle)}>
                                        {link.name}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </nav>
                }
            </AnimatePresence>
        </motion.div>
    )
}
export default Navbar;