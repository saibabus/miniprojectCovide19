import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'

/*  // <Route exact path="/state/:stateCode" component={Statespecific} />
   // <Route exact path="/about" component={About} />
*/

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)

export default App
