import { motion, useAnimate } from 'framer-motion';
import { useEffect, useRef, useState, useContext } from 'react';
import { ScreenWidthContext } from '../App';

const Hero = ({heroRef, portfolioRef}) => {

    const screenWidth = useContext(ScreenWidthContext);

    const [heroMinimised, setHeroMinimised] = useState(false);                   

    const handleScroll = () => {
        const hero = heroRef.current?.getBoundingClientRect();
        const portfolio = portfolioRef.current?.getBoundingClientRect();
        if (portfolio.top - hero.bottom < -50) {
            setHeroMinimised(true);
        } else setHeroMinimised(false);
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [svgScope, animateSvg] = useAnimate();
    const [subTitleRef, animateSubTitle] = useAnimate();

    useEffect(() => {
        if (heroMinimised) {
            animateSvg(svgScope.current, {
                scale: .6, 
                y: screenWidth > 1200 ? -40 : screenWidth > 1050 ? -30 : screenWidth > 800 ? -25 : -20
            }, {duration: .6});
            animateSubTitle(subTitleRef.current, {
                y: screenWidth > 1050 ? -60 : screenWidth > 620 ? -40 : -30
            }, {duration: .3});
        } else {
            animateSvg(svgScope.current, {scale: 1, y: 0}, {duration: .6});
            animateSubTitle(subTitleRef.current, {y: 0}, {duration: .3});
        }

    }, [heroMinimised])

    return ( 
        <div ref={heroRef} className="w-full flex flex-col sticky top-0 justify-center overflow-none z-40">
            <div className="w-full bg-champagne-100 pt-4">
                <motion.svg className="bg-champagne-100"
                ref={svgScope}
                height="100%" version="1.1" viewBox="0 55 800 120" width="100%" strokeWidth="2">
                <defs/>
                <g id="Layer-1">
                <motion.path 
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{duration: 5, ease: "easeInOut"}} 
                d="M59.5313 114.629C55.3737 116.015 65.7987 113.474 68.3744 111.471C73.6252 107.387 78.1616 102.947 82.9022 98.206C83.9549 97.1532 87.392 95.7136 86.0604 95.0478C81.6002 92.8177 75.286 113.098 74.6908 114.629C72.1334 121.205 47.2153 169.898 38.6871 167.055C27.9719 163.484 41.02 147.575 45.0035 144.316C62.5607 129.951 82.5873 121.366 101.22 108.944C102.201 108.29 128.304 94.378 120.801 90.6262C109.756 85.1041 97.7361 115.892 113.853 115.892C121.524 115.892 130.513 101.126 135.329 96.311C137.778 93.8616 139.887 93.4002 142.908 91.8895C144.279 91.204 148.414 91.7101 147.33 90.6262C144.352 87.6482 132.439 99.2879 136.592 101.364C140.385 103.261 156.364 97.6319 153.015 107.681C150.703 114.617 131.539 124.71 131.539 115.26C131.539 114.743 143.262 115.488 144.172 115.26C151.946 113.317 157.188 105.479 163.121 100.733C166.021 98.4128 168.873 95.8451 171.964 93.7845C173.239 92.9342 177.918 92.5212 176.386 92.5212C173.592 92.5212 162.452 98.1311 164.384 101.996C166.807 106.841 187.967 93.8862 181.439 110.207C180.129 113.481 164.384 126.006 164.384 116.524C164.384 114.815 185.63 116.417 189.018 113.997C196.185 108.878 208.424 84.1343 219.969 95.6794C225.041 100.751 207.872 94.3668 205.441 96.311C199.979 100.681 196.572 113.34 202.283 119.05C207.952 124.719 214.566 112.077 216.179 108.312C222.267 94.1082 236.656 79.5795 233.865 62.8339C231.627 49.4044 222.306 65.3613 220.601 71.0453C216.686 84.0947 215.818 101.994 221.232 114.629C228.214 130.92 242.708 104.733 242.708 96.9427C242.708 94.3813 241.728 101.977 241.445 104.522C241.304 105.794 240.481 119.682 238.918 119.682C238.288 119.682 239.547 113.389 239.55 113.365C240.311 106.521 243.535 98.2788 251.551 96.9427C254.589 96.4364 286.305 114.346 280.607 100.101C275.469 87.2553 250.323 110.607 265.447 119.682C274.508 125.118 276.278 106.677 277.449 101.996C278.02 99.7121 277.047 93.3832 278.712 95.0478C281.749 98.0851 275.956 122.873 285.028 121.577C293.36 120.387 298.081 106.106 299.556 99.4693C299.977 97.5743 300.82 93.7845 300.82 93.7845C300.82 93.7845 300.48 96.7461 300.188 98.206C299.018 104.058 294.264 119.392 302.714 122.208C312.189 125.367 316.885 98.0158 318.506 93.1528C319.042 91.5424 319.137 96.5085 319.137 98.206C319.137 100.101 319.309 102.004 319.137 103.891C318.683 108.886 317.428 121.02 323.559 123.472C327.629 125.1 343.299 95.6794 355.141 95.6794C356.304 95.6794 361.673 100.517 361.457 100.733C360.555 101.635 344.075 94.53 346.93 104.522C348.352 109.502 376.081 113.162 363.984 122.84C360.539 125.596 346.053 131.785 349.456 121.577C350.812 117.511 362.663 115.701 365.879 114.629C373.692 112.024 377.043 103.02 384.828 100.101C387.884 98.955 406.536 103.778 401.883 97.5743C392.341 84.8523 378.235 114.023 388.618 120.945C397.563 126.908 401.063 107.13 402.514 103.259C403.037 101.865 403.146 98.8376 403.146 98.8376C403.146 98.8376 400.945 121.523 408.199 120.314C414.505 119.263 417.636 109.729 418.937 104.522C419.47 102.39 420.137 96.1206 420.832 98.206C421.498 100.204 420.236 119.682 418.937 119.682C417.253 119.682 418.937 116.313 418.937 114.629C418.937 105.75 422.069 96.6006 432.202 95.6794C444.243 94.5847 430.455 114.703 439.15 119.05C451.829 125.39 458.477 81.5298 478.312 101.364C481.898 104.95 470.593 93.2221 465.679 95.6794C457.902 99.5679 449.858 115.872 459.362 122.208C465.64 126.393 472.395 114.516 475.153 110.839C482.918 100.487 499.942 73.9569 494.734 60.9389C490.461 50.2547 481.489 67.4217 480.207 70.4136C475.411 81.6022 473.113 101.706 478.943 113.365C486.249 127.978 498.932 107.803 503.577 101.996C505.585 99.4862 514.061 99.2152 511.789 96.9427C508.23 93.3837 499.997 103.188 502.946 105.154C506.55 107.557 513.871 106.827 518.105 108.944C527.437 113.61 510.358 124.103 505.472 124.103C503.835 124.103 497.672 118.776 499.156 117.787C503.121 115.143 516.013 121.313 522.527 118.419C534.656 113.028 541.561 75.3973 535.16 64.7288C533.312 61.6491 530.257 79.9775 530.107 81.7832C529.616 87.6662 528.083 118.86 536.423 120.945C542.199 122.389 547.852 111.352 549.688 107.681C550.319 106.417 550.319 103.259 551.582 103.891C553.786 104.993 550.301 132.203 566.742 119.05C577.025 110.824 582.947 89.0788 585.691 76.7301C585.877 75.8957 587.717 65.4479 587.586 65.3605C575.058 57.0082 572.827 110.234 579.375 118.419C586.174 126.918 595.58 109.847 598.324 106.417C599.314 105.18 607.376 101.15 607.167 100.733C602.975 92.3488 584.129 124.163 606.536 119.682C622.746 116.44 630.911 96.3431 633.696 82.4149C634.136 80.215 641.118 69.3872 639.381 68.5187C637.497 67.5768 633.23 93.3929 633.065 95.0478C632.798 97.7157 624.704 116.474 628.643 117.787C631.842 118.853 631.015 108.785 632.433 108.312C636.784 106.862 641.009 98.966 646.329 98.206C663.412 95.7656 646.245 113.323 652.646 116.524C661.266 120.834 683.136 99.2764 678.543 93.1528C671.648 83.9599 656.468 117.87 670.963 119.682C686.316 121.601 688.767 110.721 697.492 101.996C700.096 99.3917 704.139 98.0957 707.599 96.9427C709.053 96.458 713.553 95.6794 712.02 95.6794C709.58 95.6794 692.918 103.546 698.756 107.049C712.633 115.376 713.571 96.7142 717.073 124.735C718.18 133.59 699.194 140.333 697.492 138.631C678.814 119.953 741.378 120.314 745.497 120.314" fill="none" opacity="1" stroke="#C95D63" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.732555" stroke-width="3.18442" />
                </g>
                <g id="Layer-2">
                <motion.path 
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{delay: 5}}
                d="M91.7452 83.6782C89.7581 83.9424 92.7701 79.4533 93.6402 79.8883C96.0661 81.1013 91.8748 87.3676 89.2186 86.8364C85.4604 86.0847 89.4162 80.5199 91.7452 80.5199C98.2913 80.5199 87.9128 88.8376 90.4819 82.4149C90.8729 81.4374 93.3414 79.5212 93.0085 80.5199C92.4717 82.1303 92.2119 83.6161 91.7452 83.6782Z" fill="none" opacity="1" stroke="#C95D63" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.732555" stroke-width="3.18442" />
                <motion.path 
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{delay: 5.2}}
                d="M511.157 84.9414C511.157 83.5701 533.835 81.7018 537.686 81.1516C539.448 80.8998 549.061 79.8883 546.529 79.8883" fill="none" opacity="1" stroke="#C95D63" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.732555" stroke-width="3.18442" />
                <motion.path 
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{delay: 5.4}}
                d="M550.003 96.6269C546.969 97.2957 550.077 92.6509 551.582 93.1528C558.149 95.3415 543.136 98.3628 549.056 94.4161C550.684 93.3309 552.893 95.9899 550.003 96.6269Z" fill="none" opacity="1" stroke="#C95D63" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.732555" stroke-width="3.18442" />
                <motion.path 
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{delay: 5.6}}
                d="M561.057 81.7832C572.76 81.7832 584.145 79.8883 595.798 79.8883" fill="none" opacity="1" stroke="#C95D63" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.732555" stroke-width="3.18442"/>
                </g>
                </motion.svg>
            </div>
            <div ref={subTitleRef} 
            className="
                w-full bg-champagne-100 text-2xl text-[#C95D63] font-dancing flex align-center gap-16 pb-4 justify-center
                max-[850px]:m-auto max-[850px]:text-lg
                max-[680px]:gap-5 max-[680px]:text-sm bg-transparent
                ">
                <p>Embroidery</p>
                <span>|</span>
                <p>Artwork</p>
                <span>|</span>
                <p>Greetings cards</p>
            </div>
        </div>
     );
}
 
export default Hero;