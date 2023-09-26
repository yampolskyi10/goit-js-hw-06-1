const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><body>
    <ul id="categories">
        <!-- Ваші дані HTML тут -->
    </ul>
</body></html>`);


const document = dom.window.document;


const categoriesList = document.querySelector('ul#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector('h2');
  const subcategories = categoryItem.querySelectorAll('ul li');

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${subcategories.length}`);
});