fetch ("http://localhost:8088/food")
.then( data => data.json ())
.then( food => {
    console.table(food)
    let foodContainer = document.querySelector ('#food-list')
    food.forEach ( item => foodContainer.innerHTML += `<h2>I like to eat ${item.name}</h2>`)
})
fetch("https://world.openfoodfacts.org/api/v0/product/5400101059634.json")
.then ( data => data.json())
.then( foodItem => console.log(foodItem))

fetch("https://world.openfoodfacts.org/api/v0/product/5032005000612.json")
.then ( data => data.json())
.then( foodItem => console.log(foodItem))