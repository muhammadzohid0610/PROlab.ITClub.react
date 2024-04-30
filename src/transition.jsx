import { motion } from 'framer-motion';

const transitionVariants = {
    initial: {
        x: "100%",
        width: "100%",
        opacity: '0.9'
    },
    animate: {
        x: "0%",
        width: "100%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"],
    },
};


const transition = (OgComponent) => {
    return () => (
        <>
            <motion.div>
                <OgComponent />
            </motion.div>

            <motion.div
                className="fixed top-0 bottom-0 right-[100vw] w-screen h-screen z-30 bg-[--succes]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
                className="fixed top-0 bottom-0 right-[100vw] w-screen h-screen z-20 bg-[--succes3]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
                className="fixed top-0 bottom-0 right-[100vw] w-screen h-screen z-10 bg-[--succes2]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            ></motion.div>
        </>
    )
}

export default transition;
