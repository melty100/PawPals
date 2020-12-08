import React from 'react'
import './App.css'
import './components/App.scss'
import './components/login/style.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Homepage/HomePage'
import QuestionPage from './pages/QuestionPage'
import { Login } from './components/login/login'
import { Register } from './components/login/register'
import MyProfile from './pages/MyProfile/index.js'
import { StoreProvider } from "./utils/GlobalState";




const App = () => {


  return (
    <div className='app__main'>
      <Router>
        <StoreProvider>
          <Header />


          <main>
            <Route exact path="/" component={HomePage} />
            <Container>

              <Route exact path="/question/:id" component={QuestionPage} />
              <Route path="/myprofile" component={MyProfile} />

              <Route path='/login' component={Login} exact />
            </Container>
          </main>
          <Footer />
        </StoreProvider>

      </Router>
    </div>
  )
}

export default App

