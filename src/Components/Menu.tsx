import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ScreenWidthContext } from '../App';

const Menu = () => {

    const screenWidth = useContext(ScreenWidthContext);

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

    const fullScreenMenu = "h-screen z-40 w-[30%] pr-4 bg-white bg-opacity-[.95] backdrop-blur fixed overflow-hidden top-0 right-0 font-bold text-4xl font-[ubuntu] z-[60] shadow-2xl"
    const mobileMenu = "h-screen z-40 w-full bg-white bg-opacity-[.95] backdrop-blur fixed top-0 font-bold text-4xl font-[ubuntu] z-[60]"

    return ( 
        <motion.div
        className= {screenWidth > 1000 ? fullScreenMenu : mobileMenu}
        variants={navScreenVars}
        initial="initial"
        animate="open"
        exit="exit"
        >
            <motion.div variants={navLinkContainerVars} className="gap-8 pl-8 text-[#E88D67] flex h-full justify-center w-fit align-center flex-col">
                <motion.h3 variants={navLinkVars} className="text-[#C95D63] font-dancing">
                    Contact me
                </motion.h3>
                <div className="flex font-normal gap-8 ml-8 flex-col align-center font-dancing justify-around text-2xl text-[#C95D63]">
                    <motion.a variants={navLinkVars} target="_blank" href="/">
                        Email
                    </motion.a>
                    <motion.a variants={navLinkVars} target="_blank" href="/">
                        Instagram
                    </motion.a>
                </div>
                <motion.p variants={navLinkVars} className="text-lg mt-[30vh] font-[poppins] text-champagne-100 text-wrap">
                    Website designed and developed by Josh Ford
                </motion.p>
                <div className="flex font-normal gap-8 ml-8 flex-col align-center font-[poppins] justify-around text-2xl text-champagne-100">
                    <motion.a className="text-base" variants={navLinkVars} target="_blank" href="mailto:jtfwebdevconsultant@hotmail.com?Subject=Website%20Development%20Query">
                        jtfwebdevconsultant@hotmail.com
                    </motion.a>
                    <motion.a className="text-base" variants={navLinkVars} target="_blank" href="https://www.jtfwebdev.co.uk">
                        jtfwebdev.co.uk
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
     );
}
 
export default Menu;