const url = 'http://localhost:5000';

export const fetchProducts = async () => {
  const response = await fetch(`${url}/productSchema`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const fetchSaleOrders = async () => {
  const response = await fetch(`${url}/saleOrderSchema`);
  if (!response.ok) {
    throw new Error('Failed to fetch sale orders');
  }
  return response.json();
};

export const addSaleOrder = async (order) => {
  const response = await fetch(`${url}/saleOrderSchema`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error('Failed to add sale order');
  }
  return response.json();
};

export const updateSaleOrder = async (orderId, order) => {
  const response = await fetch(`${url}/saleOrderSchema/${orderId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error('Failed to update sale order');
  }
  return response.json();
};





