import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Nav from './Components/Nav/Nav'
import Services from './Pages/Services/Services'
import Gallery from './Pages/Gallery/Gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>X one</h1>
      <Router>
        <Nav />
        <Routes>
          <Route exact component={Home}/>
          <Route component={Gallery}/>
          <Route component={Services}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
