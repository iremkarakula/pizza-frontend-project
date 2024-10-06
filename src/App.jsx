
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'

import Home1 from './components/Home1'
import OrderPizza1 from './components/OrderPizza1'
import Success1 from './components/Success1'

function App() {


  return (
    <div>


      <Switch>
        <Route exact path="/">
          <Home1 />
        </Route>
        <Route exact path="/order">
          <OrderPizza1 />
        </Route>
        <Route exact path="/success">
          <Success1 />
        </Route>
      </Switch>
    </div>
  )
}

export default App
