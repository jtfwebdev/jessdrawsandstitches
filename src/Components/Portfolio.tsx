import '../assets/Styles/Portfolio.css';

const Portfolio = ({posts, setItemView, portfolioRef}) => {

    const handleClick = (e, img) => {
        e.stopPropagation();
        setItemView(img);
    }

    return ( 
        <div ref={portfolioRef} className="masonry_container mt-24 w-[85%] mx-[7.5%] p-[1%] bg-white">
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