import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import './App.css'

/*  // <Route exact path="/state/:stateCode" component={Statespecific} />
   // <Route exact path="/about" component={About} />
*/

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
)

export default App
