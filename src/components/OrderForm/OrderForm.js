import React, { useState } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    clearInputs();
  }

  const clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  const handleNameChange = e => {
    e.preventDefault();
  }

  const handleIngredientChange = e => {
    e.preventDefault();
  }

  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button key={ingredient} name={ingredient} onClick={e => handleIngredientChange(e)}>
        {ingredient}
      </button>
    )
  });

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={e => handleNameChange(e)}
      />

      { ingredientButtons }

      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

      <button onClick={e => handleSubmit(e)}>
        Submit Order
      </button>
    </form>
  )
}

export default OrderForm;
