import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Nav from './Components/Nav/Nav'
import Services from './Pages/Services/Services'
import Gallery from './Pages/Gallery/Gallery'
import Footer from './Pages/Footer/Footer'
import Banner from './Components/Banner/Banner'
import About from './Pages/About/About'
import Team from './Pages/Team/Team'



//IMPORT AOS

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Hero from './Components/Hero/Hero'
// ..
AOS.init();


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>X one template</h1>
      <Router>
        <Routes>
          <Route component={Home}/>
        </Routes>
        <Home />
        <Hero />
        <About />
        <Banner />
        <Gallery />
        <Services />
        <Team />
        <Footer />
      </Router>
    </div>
  )
}

export default App;