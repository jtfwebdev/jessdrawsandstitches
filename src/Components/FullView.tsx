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

    const containerLandscape = "fixed z-50 h-fit w-3/4 m-auto inset-x-0 inset-y-0 p-4 bg-white rounded max-[1000px]:w-[90%] max-[900px]:w-[95%] max-[800px]:w-fit max-[800px]:h-[95%]";
    const containerPortrait = "fixed z-50 h-[90%] w-fit m-auto inset-x-0 inset-y-0 p-4 bg-white rounded";
    const wrapLandscape = "h-full w-full flex max-[800px]:flex-col";
    const wrapPortrait = "h-full w-full flex flex-col";
    const imgLandscape = "max-h-[65vh] mr-4 max-[800px]:mr-0 max-[800px]:max-h-[55vh]";
    const imgPortrait = "max-w-[35vw] mb-2 max-[1200px]:max-w-[40vw] max-[1050px]:max-w-[45vw] max-[950px]:max-w-[50vw] max-[850px]:max-w-[57vw] max-[750px]:max-w-[66vw] max-[650px]:max-w-[77vw] max-[550px]:max-w-[88vw]";

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
                    <div className="flex-1 flex flex-col w-full overflow-y-hidden">
                        <div className="flex flex-1 flex-col overflow-y-hidden">
                            <h3 className="text-[#C95D63] font-dancing text-4xl mb-4">Comments</h3>
                            <div className="flex-1 flex flex-col overflow-y-scroll comments_box mb-2">
                                {!itemView.comments[0] && 
                                <p className="bg-champagne-100 w-fit px-2 mb-4 rounded text-[#C95D63]">No comments yet...</p>
                                }
                                {itemView.comments.map((comment) => {
                                    return  <Comment comment={comment.comment} />
                                })}
                            </div>
                        </div>
                        <AddMessage itemView={itemView} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
     );
}

export default FullView;

const Comment = ({comment}) => {
    return (
        <p className="bg-champagne-100 w-fit px-2 mb-2 rounded text-[#C95D63]" dangerouslySetInnerHTML={{__html: comment}} />
    )
}