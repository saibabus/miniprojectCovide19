import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import StateSpecific from './components/StateSpecific'
import ShowoptionsContext from './context/ShowopionsContext'
import './App.css'
import CovidError from './components/CovidError'

class App extends Component {
  state = {showsoptions: false}

  changeshowStatus = () => {
    this.setState(prevstate => ({showsoptions: !prevstate.showsoptions}))
  }

  render() {
    const {showsoptions} = this.state
    return (
      <ShowoptionsContext.Provider
        value={{showsoptions, changeshowStatus: this.changeshowStatus}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/state/:stateCode" component={StateSpecific} />
          <Route exact path="/about" component={About} />
          <Route exact path="/not-found" component={CovidError} />
          <Redirect to="/not-found" />
        </Switch>
      </ShowoptionsContext.Provider>
    )
  }
}

export default App
