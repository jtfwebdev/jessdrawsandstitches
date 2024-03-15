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

    const fullScreenMenu = "h-screen z-40 w-[30%] pr-4 bg-white bg-opacity-[.95] backdrop-blur fixed overflow-hidden top-0 right-0 font-bold text-4xl font-[ubuntu] z-[60] shadow-2xl px-8"
    const mobileMenu = "h-screen z-40 w-full bg-white bg-opacity-[.95] backdrop-blur fixed top-0 font-bold text-4xl font-[ubuntu] z-[60] px-8"

    return ( 
        <motion.div
        className= {screenWidth > 1000 ? fullScreenMenu : mobileMenu}
        variants={navScreenVars}
        initial="initial"
        animate="open"
        exit="exit"
        >
            <motion.div variants={navLinkContainerVars} className="gap-8 py-[20vh] text-[#E88D67] flex h-full justify-between w-fit align-center flex-col">
                <div>
                    <motion.h3 variants={navLinkVars} className="text-[#C95D63] font-dancing mb-8">
                        Contact me
                    </motion.h3>
                    <div className="flex font-normal gap-8 ml-4 flex-col align-center font-dancing justify-around text-2xl text-[#C95D63]">
                        <motion.a variants={navLinkVars} target="_blank" href="mailto:jessicacox96@hotmail.co.uk?Subject=Portfolio%20Query">
                            Email
                        </motion.a>
                        <motion.a variants={navLinkVars} target="_blank" href="https://www.instagram.com/jessdrawsandstitches?igsh=MXhpemVtY2ZrdWRkYQ==">
                            Instagram
                        </motion.a>
                    </div>
                </div>
                <div>
                    <motion.p variants={navLinkVars} className="text-lg font-[poppins] text-champagne-100 mb-8 text-wrap">
                        Website designed and developed by Josh Ford
                    </motion.p>
                    <div className="flex font-normal gap-8 ml-4 flex-col align-center font-[poppins] justify-around text-2xl text-champagne-100">
                        <motion.a className="text-base" variants={navLinkVars} target="_blank" href="mailto:jtfwebdevconsultant@hotmail.com?Subject=Website%20Development%20Query">
                            jtfwebdevconsultant@hotmail.com
                        </motion.a>
                        <motion.a className="text-base" variants={navLinkVars} target="_blank" href="https://www.jtfwebdev.co.uk">
                            jtfwebdev.co.uk
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
     );
}
 
export default Menu;