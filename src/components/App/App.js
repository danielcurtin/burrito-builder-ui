import React, { useState, useEffect } from 'react';
import './App.css';
import { getOrders, addOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders()
    .then(res => {
      setOrders(res.orders)
    })
    .catch(err => console.error('Error fetching:', err));
  }, []);

  const addNewOrder = newOrder => {
    addOrder(newOrder)
    .then(res => setOrders([...orders, res]))
    .catch(err => console.log('Error posting:', err));
  };

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addNewOrder={addNewOrder}/>
      </header>

      <Orders orders={orders}/>
    </main>
  );
}


export default App;
