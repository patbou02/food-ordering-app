export default function Meals() {

  async function fetchMeals() {
    const response = await fetch('http://localhost:3000/meals');

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const meals = await response.json();

    console.log(meals);
  }

  return (
    <ul id="meals"></ul>
  );
}