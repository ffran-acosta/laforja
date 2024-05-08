import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { Header, Footer } from './components'
import { AboutUs, Home, Portfolio, NotFound, Services } from './pages'

function App() {

  return (
    <Router>
      <div className="flex flex-col h-screen w-full">
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
