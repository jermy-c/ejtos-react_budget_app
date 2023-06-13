import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);
  const [editableBudget, setEditableBudget] = useState(budget);
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
  }, 0);
  const { currency } = useContext(AppContext);

  const handleBudgetChange = (e) => {
    if (e.target.value > 20000) {
        alert("Budget cannot exceed 20,000");
      return;
    }
    if (e.target.value < totalExpenses) {
        alert("Budget cannot be less than total spending");
      return;
    }
    setEditableBudget(parseInt(e.target.value));
    setBudget(parseInt(e.target.value));
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}</span>
      <input type='number' value={editableBudget} onChange={handleBudgetChange} step={10}/>
    </div>
  );
};

export default Budget;
