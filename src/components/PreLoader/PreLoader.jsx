import './PreLoader.scss';
import { motion } from 'framer-motion';

const PreLoader = () => {
    return (
        <motion.div className="preloader"
            initial={{ borderRadius: 0 }}
            animate={{ y: '-100vh', borderRadius: '30vw',display:'none' }}
            transition={{
                duration: 0.5,
                delay: 1,
                ease: [0.69, .04, .5, 0.57]
            }}
        >
            <motion.div className="container"
                animate={{ opacity: 0 }}
                transition={{
                    delay: 1,
                    duration: 0.5,
                    ease: "ease"
                }}
            >
                <div className='text'>
                    <motion.h1
                        initial={{ y: 40 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut"
                        }}
                    >Vanshul Agarwal</motion.h1>
                </div>
                <div className='text'>
                    <motion.h3
                        initial={{ y: 40 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut"
                        }}
                    >&copy;Portfolio 2024</motion.h3>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default PreLoader;