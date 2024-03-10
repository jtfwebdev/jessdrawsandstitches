import { motion } from "framer-motion";
import '../assets/Styles/Header.css';

const Header = ({menuOpen, setMenuOpen}) => {

    const burgerMenuVariants = {
        initial1: {

        },
        open1: {
            rotate: "45deg",
            y: "185%"
        },
        initial2: {
            opacity: 1,
            transition: {
                duration: 0.05
            }
        },
        open2: {
            opacity: 0,
            transition: {
                duration: 0.05
            }
        },
        initial3: {

        },
        open3: {
            rotate: "-45deg",
            y: "-185%"
        }
    }

    return ( 
        <div className="w-full flex justify-end h-16 bg-transparent fixed top-0 left-0 z-[70]">
            <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
                <motion.div className="bar bg-rose-100" variants={burgerMenuVariants} initial="initial1" animate={menuOpen ? "open1" : "initial1"}></motion.div>
                <motion.div className="bar bg-rose-100" variants={burgerMenuVariants} initial="initial2" animate={menuOpen ? "open2" : "initial2"}></motion.div>
                <motion.div className="bar bg-rose-100" variants={burgerMenuVariants} initial="initial3" animate={menuOpen ? "open3" : "initial3"}></motion.div>
            </div>
        </div>
     );
}
 
export default Header;