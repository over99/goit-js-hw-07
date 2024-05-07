const categoriesUl = document.querySelector("categories");
const items = document.querySelectorAll("li.item");

console.log("Number of categories:", items.length);

items.forEach(function(item) {
    const title = item.querySelector("h2").textContent;

    const subItems = item.querySelectorAll("li");

    console.log("Category:", title);
    console.log("Elements:", subItems.length);
});




