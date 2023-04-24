import React from 'react';
import './Orders.css';

const Orders = ({ orders, removeOrder }) => {
  const orderEls = orders.map((order, index) => {
    return (
      <div className="order" key={`order${index}`} id={`order${index + 1}`}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map((ingredient, index) => <li key={`ingr${index}`}>{ingredient}</li>)}
        </ul>
        <button className='delete-btn' id={`delete${index + 1}`} onClick={() => removeOrder(order.id)}>❌</button>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;