


const categoriesList = document.querySelector('ul#categories');
const categoryItems = categoriesList.querySelectorAll('li'); 

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector('h2');
  const subcategories = categoryItem.querySelectorAll('ul li');

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${subcategories.length}`);
});

