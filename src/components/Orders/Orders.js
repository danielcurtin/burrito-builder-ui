import React from 'react';
import './Orders.css';

const Orders = ({ orders }) => {
  const orderEls = orders.map((order, index) => {
    return (
      <div className="order" key={`order${index}`} id={`order${index + 1}`}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map((ingredient, index) => <li key={`ingr${index}`}>{ingredient}</li>)}
        </ul>
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