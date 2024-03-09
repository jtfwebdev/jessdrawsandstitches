import '../assets/Styles/Portfolio.css';

const Portfolio = ({posts, fetching, setItemView, portfolioRef}) => {

    const handleClick = (e, img) => {
        e.stopPropagation();
        setItemView(img);
    }

    return ( 
        <div ref={portfolioRef} 
        className="
        masonry_container mt-24 w-[85%] mx-auto p-[1%] bg-white
        max-[1000px]:w-[100%] max-[1000px]:mt-12
        ">
            { fetching && <SkeletonBox />}
            { posts && posts.map((img, idx) => {
                return <div className="masonry_box relative" onClick={(e) => handleClick(e, img)}>
                    <img src={img.source} alt="" />
                </div>
            })
            }
        </div>
     );
}
 
export default Portfolio;

const SkeletonBox = () => {
    return (
        <div role="status" className="space-y-2.5 animate-pulse max-w-lg mb-16">
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            <div className="h-32 bg-gray-200 mb-6 rounded dark:bg-gray-700 w-full"></div>
            
        </div>
    )
}