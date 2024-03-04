import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

const FullView = ({setItemView, itemView}) => {

    const fullViewRef = useRef();
    const imgRef = useRef();
    const [orientation, setOrientation] = useState("");

    useEffect(() => {

        const handleClick = (event) => {
            
            if (fullViewRef.current && !fullViewRef.current.contains(event.target)) {
                setItemView(null);
            }
        }

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [])

    useEffect(() => {
        if (imgRef.current) {
            if (imgRef.current.clientWidth > imgRef.current.clientHeight) setOrientation("portrait")
            else if (imgRef.current.clientWidth < imgRef.current.clientHeight) setOrientation("landscape")
            else setOrientation("square")
        }
    }, [imgRef.current, itemView])

    const containerLandscape = "fixed z-50 h-fit w-3/4 m-auto inset-x-0 inset-y-0 p-4 bg-white rounded-sm";
    const containerPortrait = "fixed z-50 h-[90%] w-fit m-auto inset-x-0 inset-y-0 p-4 bg-white rounded-sm";
    const wrapLandscape = "h-full w-full flex";
    const wrapPortrait = "h-full w-full flex flex-col";
    const imgLandscape = "h-full max-h-[65vh]";
    const imgPortrait = "w-full max-w-[75vw]";

    return ( 
        <motion.div 
        ref={fullViewRef}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className={orientation == "portrait" ? containerPortrait : containerLandscape}>
            <div className={orientation == "portrait" ? wrapPortrait : wrapLandscape}>
                <img ref={imgRef} src={itemView.source} alt="" className={imgLandscape} />
                <div className="w-full flex align-center flex-col justify-center">
                    <h3 className="text-[#C95D63] w-fit mx-auto font-dancing text-4xl">Comments</h3>
                    <div className="flex flex-col w-fit mx-auto">
                        {itemView.comments && itemView.comments.map((comment) => {
                            return  <p>{comment.comment}</p>
                        })} 
                    </div>
                    
                </div>
            </div>
        </motion.div>
     );
}

export default FullView;