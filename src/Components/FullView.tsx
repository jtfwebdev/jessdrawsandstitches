import { useEffect, useRef, useState, useContext } from "react";
import { motion } from 'framer-motion';
import AddMessage from "./AddMessage";
import { ScreenWidthContext } from "../App";

const FullView = ({setItemView, itemView, handleScroll}) => {

    const screenWidth = useContext(ScreenWidthContext);

    const fullViewRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [orientation, setOrientation] = useState("");

    useEffect(() => {

        const handleClick = (event) => {
            
            if (fullViewRef.current && !fullViewRef.current.contains(event.target)) {
                setItemView(null);
                if (screenWidth <= 635) handleScroll();
            }
        }

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [])

    // useEffect(() => {
    //     if (imgRef.current !== null) {
    //         if (imgRef.current.clientWidth > imgRef.current.clientHeight) setOrientation("landscape")
    //         else if (imgRef.current.clientWidth < imgRef.current.clientHeight) setOrientation("portrait")
    //         else setOrientation("square")
    //     }
    // }, [imgRef, itemView])

    useEffect(() => {
        if (itemView.orientation == 'portrait') {
            setOrientation("portrait")
        } else setOrientation("landscape")
    }, [])

    // const containerLandscape = "fixed z-50 h-fit w-3/4 m-auto inset-x-0 inset-y-0 p-4 bg-white rounded max-[1000px]:w-[90%] max-[900px]:w-[95%] max-[800px]:w-fit max-[800px]:h-[95%] max-[635px]:mt-0 max-[635px]:max-h-[85vh] max-[635px]:relative";
    // const containerPortrait = "fixed z-50 h-[90%] w-fit m-auto inset-x-0 inset-y-0 p-4 bg-white rounded max-[635px]:mt-0 max-[635px]:max-h-[85vh] max-[635px]:relative";
    // const wrapLandscape = "w-full flex max-[800px]:flex-col";
    // const wrapPortrait = "w-full flex flex-col";
    // const imgLandscape = "h-auto max-h-[65vh] mr-4 max-[800px]:mr-0 max-[800px]:max-h-[55vh] max-[800px]:h-[470px]";
    // const imgPortrait = "max-w-[35vw] mb-2 max-[1200px]:max-w-[40vw] max-[1050px]:max-w-[45vw] max-[950px]:max-w-[50vw] max-[850px]:max-w-[57vw] max-[750px]:max-w-[66vw] max-[650px]:max-w-[77vw] max-[550px]:max-w-[88vw]";

    return ( 

        <motion.div 
        className="fixed z-50 h-full w-full py-2 inset-x-0 inset-y-0 bg-transparent backdrop-blur max-[635px]:inset-y-16"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            {orientation == "landscape" ? <PortraitView itemView={itemView} fullViewRef={fullViewRef} img={itemView.source} imgRef={imgRef} /> : <LandscapeView img={itemView.source} itemView={itemView} fullViewRef={fullViewRef} imgRef={imgRef} />}
        </motion.div>


        // <motion.div 
        // className="
        // fixed z-50 h-full w-full inset-x-0 inset-y-0 bg-transparent backdrop-blur
        // max-[635px]:inset-y-16
        // "
        // initial={{opacity: 0}}
        // animate={{opacity: 1}}
        // exit={{opacity: 0}}>
        //     <motion.div 
        //     ref={fullViewRef}
        //     className={orientation == "portrait" ? containerPortrait : containerLandscape}>
        //         <div className={orientation == "portrait" ? wrapPortrait : wrapLandscape}>
        //             <img ref={imgRef} src={itemView.source} alt="" className={orientation == "portrait" ? imgPortrait : imgLandscape} />
        //             <div className="flex-1 flex flex-col w-full overflow-y-hidden">
        //                 <div className="flex flex-1 flex-col overflow-y-hidden">
        //                     <h3 className="text-[#C95D63] font-dancing text-4xl max-[768px]:mt-4 mb-4">Comments</h3>
        //                     <div className="flex-1 flex flex-col overflow-y-scroll comments_box mb-2">
        //                         {!itemView.comments[0] && 
        //                         <p className="bg-champagne-100 w-fit px-2 mb-4 rounded text-[#C95D63]">No comments yet...</p>
        //                         }
        //                         {itemView.comments.map((comment, id) => {
        //                             return <Comment key={id} comment={comment.comment} />
        //                         })}
        //                     </div>
        //                 </div>
        //                 <AddMessage itemView={itemView} />
        //             </div>
        //         </div>
        //     </motion.div>
        // </motion.div>
     );
}

export default FullView;

const PortraitView = ({img, imgRef, itemView, fullViewRef}) => {
    return (
        <div 
        className="
            portrait mx-auto p-2 w-fit h-full flex flex-col bg-white rounded
            max-[635px]:h-[85vh] max-[635px]:items-start
        "
        ref={fullViewRef}>
            <img src={img} ref={imgRef} alt="" className="max-h-[60vh] max-w-[70vw] max-[635px]:max-w-[80vw] max-[500px]:max-w-[95vw]" />
            <div className="flex-1 flex flex-col justify-end overflow-y-hidden">
                <h3 className="text-[#C95D63] font-dancing text-4xl max-[768px]:mt-4 mb-4">Comments</h3>
                <div className="flex-1 flex flex-col overflow-y-scroll">
                    {!itemView.comments[0] && 
                        <p className="bg-champagne-100 w-fit px-2 mb-4 rounded text-[#C95D63]">No comments yet...</p>
                    }
                    {itemView.comments.map((comment, id) => {
                        return <Comment key={id} comment={comment.comment} />
                    })}
                </div>
                <div className="mt-2">
                    <AddMessage itemView={itemView} />
                </div>
            </div>
        </div>
    )
}

const LandscapeView = ({img, imgRef, fullViewRef, itemView}) => {
    return (
        <div className="landscape mx-auto rounded flex h-full w-[80%] items-center max-[1000px]:w-fit max-[635px]:items-start" ref={fullViewRef}>
            <div className="w-full h-[70vh] flex p-2 bg-white max-[1250px]:h-[60vh] max-[1000px]:flex-col max-[1000px]:h-[85vh]">
                <img src={img} ref={imgRef} alt="" className="h-full max-[1000px]:h-[55vh] max-[1000px]:mx-auto max-[435px]:h-[45vh] max-[360px]:h-[40vh]"/>
                <div className="h-full flex flex-col flex-1 ml-2 overflow-y-hidden max-[1000px]:mx-auto max-[1000px]:w-full max-[1000px]:h-[15vh]">
                    <h3 className="text-[#C95D63] font-dancing text-4xl max-[768px]:mt-4 mb-4">Comments</h3>
                    <div className="flex-1 flex flex-col justify-between overflow-y-hidden">
                        <div className="flex-1 overflow-y-scroll">
                            {!itemView.comments[0] && 
                            <p className="bg-champagne-100 w-fit px-2 mb-4 rounded text-[#C95D63]">No comments yet...</p>
                            }
                            {itemView.comments.map((comment, id) => {
                            return <Comment key={id} comment={comment.comment} />
                            })}
                        </div>
                        <AddMessage itemView={itemView} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Comment = ({comment}) => {
    return (
        <p className="bg-champagne-100 w-fit px-2 mb-2 rounded text-[#C95D63]" dangerouslySetInnerHTML={{__html: comment}} />
    )
}