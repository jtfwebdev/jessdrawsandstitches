import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Portfolio from './Components/Portfolio'

function App() {

  return (
    <>
    <Header />
      <div className="w-full bg-champagne-100 pt-16 pb-8 px-[10%]">
        <Hero />
        <Portfolio />
      </div>
    </>
  )
}

export default App
