import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Nav from './Components/Nav/Nav'
import Services from './Pages/Services/Services'
import Gallery from './Pages/Gallery/Gallery'
import Footer from './Pages/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>X one template</h1>
      <Router>
        <Routes>
          <Route exact component={Home}/>
        </Routes>
        <Home />
        <Gallery />
        <Services />
        <Footer />
      </Router>
    </div>
  )
}

export default App