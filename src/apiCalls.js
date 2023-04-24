export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error();
    };
  });
};

export const addOrder = newOrder => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error();
    };
  });
};

export const deleteOrder = orderId => {
  return fetch(`http://localhost:3001/api/v1/orders/${orderId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error();
    };
  });
};