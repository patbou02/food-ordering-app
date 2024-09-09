import { useState, useEffect } from 'react';

export default function Meals() {

  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const meals = await response.json();
      setLoadedMeals(meals);

      console.log(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map(meal => (
        <li key={meal.id} className="meal-item">
          <article>
            <img src={meal.image} alt={meal.name} />
            <h3>{meal.name}</h3>
            <div className="meal-item-description">{meal.description}</div>
            <div className="meal-item-price">${meal.price}</div>
          </article>
        </li>
      ))}
    </ul>
  );
}