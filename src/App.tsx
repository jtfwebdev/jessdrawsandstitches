import { useEffect, useRef, useState, createContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import FetchPosts from './Hooks/FetchPosts'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Portfolio from './Components/Portfolio'
import FullView from './Components/FullView'
import Menu from './Components/Menu'

export const ScreenWidthContext = createContext(window.innerWidth);

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth);

    return () => window.removeEventListener("resize", watchWidth);
  }, [])

  const heroRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [itemView, setItemView] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [heroMinimised, setHeroMinimised] = useState(false); 

  const [posts, setPosts] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    FetchPosts(setPosts, setFetching);
  }, [])

  useEffect(() => {
    if (itemView) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [itemView])

  const handleScroll = () => {
        const hero = heroRef.current?.getBoundingClientRect();
        const portfolio = portfolioRef.current?.getBoundingClientRect();
        if (portfolio.top - hero.bottom < 20) {
            setHeroMinimised(true);
        } else setHeroMinimised(false);
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
    <ScreenWidthContext.Provider value={screenWidth}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} itemView={itemView} setItemView={setItemView} />
      <AnimatePresence>
        {menuOpen && <Menu />}
      </AnimatePresence>
      <AnimatePresence>
        {itemView && <FullView itemView={itemView} setItemView={setItemView} handleScroll={handleScroll} />}
      </AnimatePresence>
      <div 
      className="
        w-full bg-champagne-100 pt-16 pb-8 px-[10%]
        max-[700px]:px-[6%]
        max-[550px]:px-[1%]
        ">
        <Hero heroRef={heroRef} heroMinimised={heroMinimised} />
        <Portfolio posts={posts} fetching={fetching} setItemView={setItemView} portfolioRef={portfolioRef} setHeroMinimised={setHeroMinimised} />
      </div>
    </ScreenWidthContext.Provider>
    </>
  )
}

export default App
