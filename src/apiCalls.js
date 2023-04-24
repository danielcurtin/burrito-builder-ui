export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error();
      };
    });
}