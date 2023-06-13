import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, setCurrency } = useContext(AppContext);
  const [editableCurrency, setEditableCurrency] = useState(currency);

  const handleCurrencyChange = (e) => {
    setEditableCurrency(e.target.value);
    setCurrency(e.target.value);
  };

  return (
    <div className='alert alert-secondary'>
      <label htmlFor='currency'>Select Currency:</label>
      <select id='currency' value={editableCurrency} onChange={handleCurrencyChange}>
        <option value='$'>$ Dollar</option>
        <option value='£'>£ Pound</option>
        <option value='€'>€ Euro</option>
        <option value='₹'>₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;
