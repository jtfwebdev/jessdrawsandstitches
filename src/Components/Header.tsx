import { motion } from "framer-motion";
import '../assets/Styles/Header.css';

const Header = ({menuOpen, setMenuOpen, itemView, setItemView}) => {

    const handleMenuClick = () => {

        if (menuOpen) {
            setMenuOpen(false)
        } else if (!menuOpen && !itemView) {
            setMenuOpen(true)
        } else if (itemView) {
            setItemView(null)
        }

        // if (itemView) setItemView(null)
        // else if (menuOpen) setMenuOpen(false)
    }

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
            <div className="hamburger" onClick={handleMenuClick}>
                <motion.div className="bar bg-rose-100" variants={burgerMenuVariants} initial="initial1" animate={menuOpen || itemView ? "open1" : "initial1"}></motion.div>
                <motion.div className="bar bg-rose-100" variants={burgerMenuVariants} initial="initial2" animate={menuOpen || itemView ? "open2" : "initial2"}></motion.div>
                <motion.div className="bar bg-rose-100" variants={burgerMenuVariants} initial="initial3" animate={menuOpen || itemView ? "open3" : "initial3"}></motion.div>
            </div>
        </div>
     );
}
 
export default Header;