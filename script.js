// Menu Items Array of Objects
const menuItems = [
    {
        id: 1,
        name: "Classic Zinger Burger",
        category: "Burger",
        price: 450,
        image: "burger-images/burger-1.jpg"
    },
    {
        id: 2,
        name: "Cheese Burst Burger",
        category: "Burger",
        price: 500,
        image: "burger-images/burger-2.jpg"
    },
    {
        id: 3,
        name: "Crispy Chicken Burger",
        category: "Burger",
        price: 550,
        image: "burger-images/burger-3.jpg"
    },
    {
        id: 4,
        name: "Double Patty Burger",
        category: "Burger",
        price: 650,
        image: "burger-images/burger-4.jpg"
    },
    {
        id: 5,
        name: "BBQ Beef Burger",
        category: "Burger",
        price: 750,
        image: "burger-images/burger-10.jpg"
    },
    {
        id: 6,
        name: "Chocolate Fudge Cake",
        category: "Cake",
        price: 1900,
        image: "cake-images/cake-1.jpg"
    },
    {
        id: 7,
        name: "Red Velvet Cake",
        category: "Cake",
        price: 550,
        image: "cake-images/cake-2.jpg"
    },
    {
        id: 8,
        name: "Black Forest Cake",
        category: "Cake",
        price: 500,
        image: "cake-images/cake-3.jpg"
    },
    {
        id: 9,
        name: "Fresh Orange Juice",
        category: "Drinks",
        price: 300,
        image: "drink-2.jpg"
    },
    {
        id: 10,
        name: "Chocolate Lava Cake",
        category: "Dessert",
        price: 450,
        image: "cake-images/dessert-1.jpg"
    }
];

//Select menu-cards-container from html document
const menuCardsContainer = document.getElementById("menu-cards-container")

//Filter By Category
const filterBurgerBtn = document.getElementById("filter-burger-btn")
const filterCakeBtn = document.getElementById("filter-cake-btn")
const filterDrinkBtn = document.getElementById("filter-drink-btn")
const displayAllItems = document.getElementById("display-all-items")

//displayMenu function here
const displayMenu = (items) => {
    menuCardsContainer.innerHTML = items.map((item) => {
        return `
        <div class = "col-lg-3 col-sm-6 col-12">
            <div class="card">
                <img src="${item.image}">
                <div class = "card-body">
                    <h5>${item.name}</h5>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="food-price ps-2">${item.price}</span>
                </div>
                <div class="food-card-section-btn text-center mt-1 mb-1">
                        <button class="btn">Add to cart</button>
                </div>
            </div>
        </div>
        `
    }).join("")
}

//Display Menu
displayMenu(menuItems)

//Display All Items
displayAllItems.addEventListener("click", () => {
    displayMenu(menuItems)
})

//Fllter By Category

//Burger
filterBurgerBtn.addEventListener("click", () => {
    const burger = menuItems.filter(item => item.category === "Burger")
    displayMenu(burger)
})

//Cake
filterCakeBtn.addEventListener("click", () => {
    const cake = menuItems.filter(item => item.category === "Cake")
    displayMenu(cake)
})

//Drink
filterDrinkBtn.addEventListener("click", () => {
    const drink = menuItems.filter(item => item.category === "Drinks")
    displayMenu(drink)

})
