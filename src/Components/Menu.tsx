import { motion } from 'framer-motion';

const Menu = () => {

    const navScreenVars = {
        initial: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: {
                duration: .2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .2
            }
        }
    }

    const navLinkContainerVars = {
        initial: {
            transition: {
                staggerChildren: 0.2
            }
        },
        open: {
            transition: {
                staggerChildren: 0.13
            }
        }
    }

    const navLinkVars = {
        initial: {
            x: "-50vw"
        },
        open: {
            x: 0,
            transition: {
                type: "spring", 
                stiffness: 60
            }
        }
    }

    return ( 
        <motion.div
        className="h-screen z-40 w-full bg-white bg-opacity-[.95] backdrop-blur fixed top-0 font-bold text-4xl font-[ubuntu] z-[60]"
        variants={navScreenVars}
        initial="initial"
        animate="open"
        exit="exit"
        >
            <motion.div variants={navLinkContainerVars} className="gap-8 pl-8 text-[#E88D67] flex h-full justify-center w-fit align-center flex-col">
                <motion.a variants={navLinkVars} className="mb-16" href="/">
                    Home
                </motion.a>
                <motion.a variants={navLinkVars} href="/">
                    Contact me
                </motion.a>
                <div className="flex font-normal gap-8 ml-8 flex-col align-center font-[poppins] justify-around text-2xl">
                    <motion.a variants={navLinkVars} href="/">
                        Email
                    </motion.a>
                    <motion.a variants={navLinkVars} href="/">
                        Github
                    </motion.a>
                    <motion.a variants={navLinkVars} href="/">
                        Portfolio
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
     );
}
 
export default Menu;