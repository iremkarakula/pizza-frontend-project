
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'

import Home1 from './components/Home1'
import OrderPizza1 from './components/OrderPizza1'
import Success1 from './components/Success1'
import { useState } from 'react'

const initialValue = {
  isim: "",
  boyut: "",
  hamur: "",
  malzemeler: [],
  not: ""
}

function App() {
  const [data, setData] = useState(initialValue);
  const [totalAmount, setTotalAmount] = useState(0);
  const [counter, setCounter] = useState(1);
  const [extra, setExtra] = useState(0);


  return (
    <div>


      <Switch>
        <Route exact path="/">
          <Home1 />
        </Route>
        <Route exact path="/order">
          <OrderPizza1 data={data} setData={setData} totalAmount={totalAmount} extra={extra}
            setTotalAmount={setTotalAmount} setExtra={setExtra} counter={counter} setCounter={setCounter} />
        </Route>
        <Route exact path="/success" >
          <Success1 data={data} totalAmount={totalAmount} extra={extra} />
        </Route>
      </Switch>

    </div>
  )
}

export default App
