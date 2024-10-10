
import { Route, Switch, useLocation } from 'react-router-dom'
import './App.css'

import Home1 from './components/Home1'
import OrderPizza1 from './components/OrderPizza1'
import Success1 from './components/Success1'
import { useEffect, useState } from 'react'

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
  const [shouldScroll, setShouldScroll] = useState(true);

  const ScrollToTop = ({ shouldScroll }) => {
    const { pathname } = useLocation();

    useEffect(() => {
      if (shouldScroll) {
        window.scrollTo(0, 0);
      }
    }, [pathname, shouldScroll]);

    return null;
  };


  return (
    <div>

      <ScrollToTop shouldScroll={shouldScroll} />
      <Switch>
        <Route exact path="/">
          <Home1 />
        </Route>
        <Route exact path="/order">
          <OrderPizza1 data={data} setData={setData} totalAmount={totalAmount} extra={extra}
            setTotalAmount={setTotalAmount} setExtra={setExtra} counter={counter} setCounter={setCounter} setShouldScroll={setShouldScroll} />
        </Route>
        <Route exact path="/success" >
          <Success1 data={data} totalAmount={totalAmount} extra={extra} />
        </Route>
      </Switch>

    </div>
  )
}

export default App
