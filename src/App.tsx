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

  const heroRef = useRef();
  const portfolioRef = useRef();
  const [itemView, setItemView] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
    <ScreenWidthContext.Provider value={screenWidth}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && <Menu />}
      </AnimatePresence>
      <AnimatePresence>
        {itemView && <FullView itemView={itemView} setItemView={setItemView} />}
      </AnimatePresence>
      <div 
      className="
        w-full bg-champagne-100 pt-16 pb-8 px-[10%]
        max-[700px]:px-[6%]
        max-[550px]:px-[1%]
        ">
        <Hero heroRef={heroRef} portfolioRef={portfolioRef} />
        <Portfolio posts={posts} fetching={fetching} setItemView={setItemView} portfolioRef={portfolioRef} />
      </div>
    </ScreenWidthContext.Provider>
    </>
  )
}

export default App
