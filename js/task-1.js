const categories = document.querySelectorAll("#categories .item");
const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);
const listOfCategories = categories.forEach(category => {
    const title = category.querySelector("h2");
    const elements = category.querySelectorAll("ul li").length;

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elements}`);
});
