import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Todo from './components/Todo/Todo.js'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Registration from './components/Registration'
import UpperCase from './components/Text/Textconverter'
import GitUser from './components/Github/GitUser'
import SideMenu from './components/Navbar/SideMenu';
import CompanyForm from './components/Navbar/CompanyForm';
const App = () => {
  const [token, Settoken] = useState(false)
  if (!token) {
    return <Login Settoken={Settoken} />
  } else {
    return (
      <>
        <Router>
          <Navbar title="MY__PROFILE" Settoken={Settoken} />        {/* Always On the top Navbar*/}
          <SideMenu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/CompanyForm">
              <CompanyForm />
            </Route>
            <Route path="/Todo">
              <Todo />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Registration">
              <Registration />
            </Route>
            <Route path="/Textconverter">
              <UpperCase heading="Converting...text" />
            </Route>
            <Route path="/GitUser">
              <GitUser />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}
export default App
