const ingredientsList = document.querySelector('#ingredients');


const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];


const fragment = document.createDocumentFragment();


ingredients.forEach((ingredient) => {
 
  const listItem = document.createElement('li');
  

  listItem.textContent = ingredient;
  
  
  listItem.classList.add('item');
  
  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);