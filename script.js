const container = document.querySelector(".meals")

const meals = [
  {
    name: "Fried Rice",
    category: "Rice",
    price: 5000,
    image: "https://hemdeemealwebsite.netlify.app/Food/fried%20rice.jpg"
  },
  {
    name: "Amala",
    category: "Swallow",
    price: 4000,
    image: "https://hemdeemealwebsite.netlify.app/Food/amala.jpg"
  },
  {
    name: "Spaghetti",
    category: "Spaghetti",
    price: 3000,
    image: "https://hemdeemealwebsite.netlify.app/Food/sphaggeti.jpg"
  },
  {
    name: "Semovita",
    category: "Swallow",
    price: 4500,
    image: "https://hemdeemealwebsite.netlify.app/Food/semovita.jfif"
  },
  {
    name: "Eba",
    category: "Swallow",
    price: 4500,
    image: "https://hemdeemealwebsite.netlify.app/Food/eba.jpg"
  },
  {
    name: "Jollof Rice",
    category: "Rice",
    price: 5500,
    image: "https://hemdeemealwebsite.netlify.app/Food/jollof.jpg"
  },
  {
    name: "Potato Porridge",
    category: "Porridge",
    price: 5200,
    image: "https://hemdeemealwebsite.netlify.app/Food/potato%20porridge.jpg"
  },
  {
    name: "Tuwo Shinkafa",
    category: "Swallow",
    price: 4000,
    image: "https://hemdeemealwebsite.netlify.app/Food/tuwo%20shinkafa.jpg"
  },
  {
    name: "Yam Porridge",
    category: "Porridge",
    price: 5500,
    image: "https://hemdeemealwebsite.netlify.app/Food/Yam-Porridge-Asaro.jpg"
  }
];


const mealsTemplate = meals.map((meal) => {
    return `
        <div class="meal">
          <div class="rice">
            <img
              src=${meal.image}
              alt=""
            />
          </div>
          <div class="decription">
            <div class="top">
              <h1>${meal.name}</h1>
              <h2>#${meal.price}</h2>
            </div>
            <span></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              corrupti, quas molestiae eius et voluptatibus ab nobis recusandae
              quia quos?
            </p>
          </div>
        </div>
`;
  })
  .join("");

container.innerHTML = mealsTemplate



// button


const buttonsContainer = document.querySelector(".buttons")



let uniqueCategories = [];
meals.map((meal) => {
  if (!uniqueCategories.includes(meal.category)) {
    uniqueCategories.push(meal.category);
  }
});
uniqueCategories.unshift("All");

uniqueCategories.forEach((category) => {
  buttonsContainer.innerHTML += `<button>${category}</button>`;
});

const button = document.querySelectorAll(".buttons button")

button.forEach((but)=>{
 but.addEventListener("click", ()=>{
   meals.forEach((meal)=>{
    if (but.innerHTML == meal.category) {
      container.innerHTML += `<div class="meal">
          <div class="rice">
            <img
              src=${meal.image}
              alt=""
            />
          </div>
          <div class="decription">
            <div class="top">
              <h1>${meal.name}</h1>
              <h2>#${meal.price}</h2>
            </div>
            <span></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              corrupti, quas molestiae eius et voluptatibus ab nobis recusandae
              quia quos?
            </p>
          </div>
        </div>`
    }
  })
 })
})

console.log(button);




