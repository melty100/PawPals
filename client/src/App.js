
import React from 'react'
import './App.css'
import './components/App.scss'
import './components/login/style.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
// import Navbar from './components/Navbar';

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Homepage/HomePage'
import QuestionPage from './pages/QuestionPage'
import LoginPage from './components/loginpage'
const App = () => {


  return (
    <div className='app__main'>
     
      <main>

        <Container>
          <Router>
          <Header />
            <Route path="/" component={HomePage} exact />

            <Route path="/question/:id" component={QuestionPage} />


            <Route path='/login' component={LoginPage} exact />
          </Router>
        </Container>

      </main>
      <Footer />
    </div>
  )
}

export default App

