import React, { useState } from 'react';

const OrderForm = ({ addNewOrder }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setError(false);
    
    if (!name || !ingredients.length) {
      setError(true);
      return;
    }
    
    addNewOrder({ name: name, ingredients: ingredients });
    clearInputs();
  };

  const clearInputs = () => {
    setName('');
    setIngredients([]);
  };

  const handleIngredientChange = e => {
    e.preventDefault();
    setIngredients([...ingredients, e.target.name]);
  };

  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button key={ingredient} name={ingredient} className='ingredient-button' onClick={e => handleIngredientChange(e)}>
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
        onChange={e => setName(e.target.value)}
      />

      { ingredientButtons }

      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>
      {error && <p style={{color: 'red'}} id='incompleteFormError'>Please enter a name and at least one ingredient.</p>}

      <button type="submit" onClick={e => handleSubmit(e)}>
        Submit Order
      </button>
    </form>
  )
}

export default OrderForm;
