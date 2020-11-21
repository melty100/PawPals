
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container} from 'react-bootstrap'
// import Navbar from './components/Navbar';

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Homepage/HomePage'
import QuestionPage from './pages/QuestionPage'
// import { Login } from './components/login' 


const App = () => {

  
  return (
    <div className='app__main'>
      <Router>
        <Header />
        
      
        <main>
        <Route path="/" component={HomePage} exact/>
          <Container>
          
            <Route path="/question/:id" component={QuestionPage} />
            {/* <Route path='/login' component={Login} exact/> */}
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App

