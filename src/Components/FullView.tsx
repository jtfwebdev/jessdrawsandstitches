import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import AddMessage from "./AddMessage";

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

    const containerLandscape = "fixed z-50 h-fit w-3/4 m-auto inset-x-0 inset-y-0 p-4 bg-white rounded";
    const containerPortrait = "fixed z-50 h-[90%] w-fit m-auto inset-x-0 inset-y-0 p-4 bg-white rounded";
    const wrapLandscape = "h-full w-full flex";
    const wrapPortrait = "h-full w-full flex flex-col";
    const imgLandscape = "h-full max-h-[65vh] mr-4";
    const imgPortrait = "w-full max-w-[35vw] mb-2";

    return ( 
        <motion.div 
        className="fixed z-50 h-full w-full inset-x-0 inset-y-0 bg-transparent backdrop-blur" 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <motion.div 
            ref={fullViewRef}
            className={orientation == "portrait" ? containerPortrait : containerLandscape}>
                <div className={orientation == "portrait" ? wrapPortrait : wrapLandscape}>
                    <img ref={imgRef} src={itemView.source} alt="" className={orientation == "portrait" ? imgPortrait : imgLandscape} />
                    <div className="w-full h-full flex flex-col justify-between align-start">
                        <h3 className="text-[#C95D63] font-dancing text-4xl mb-4">Comments</h3>
                        {!itemView.comments[0] && 
                            <p className="bg-champagne-100 w-fit px-2 mb-4 rounded text-white">No comments yet...</p>
                        }
                        <div className="flex flex-col">
                            {itemView.comments && itemView.comments.map((comment) => {
                                return  <Comment comment={comment.comment} />
                            })} 
                        </div>
                        <AddMessage id={itemView.id} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
     );
}

export default FullView;

const Comment = ({comment}) => {
    return (
        <p className="bg-champagne-100 w-fit px-2 mb-2 rounded text-white" dangerouslySetInnerHTML={{__html: comment}} />
    )
}