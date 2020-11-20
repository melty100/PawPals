import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container} from 'react-bootstrap'
// import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Homepage/HomePage'
import QuestionPage from './pages/QuestionPage'


const App = () => {

  
  return (
    <div className='app__main'>
      <Router>
        {/* <Navbar /> */}
        <Header />
        <HeroSection/> 
      
        <main>
          <Container>
            <Route path="/" component={HomePage} exact/>
            <Route path="question/:id" component={QuestionPage} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App

