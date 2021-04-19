const drink_btn = document.getElementById("drink_btn");
const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const getRandomdrinks = () => {
  const drink1 = new Promise((resolve) => {
    resolve(
      fetch(url)
        .then((response) => response.json())
        .then((value) => value.drinks[0])
        .catch((error) => console.log(error))
    );
  });
  const drink2 = new Promise((resolve) => {
    resolve(
      fetch(url)
        .then((response) => response.json())
        .then((value) => value.drinks[0])
        .catch((error) => console.log(error))
    );
  });

  const drink3 = new Promise((resolve) => {
    resolve(
      fetch(url)
        .then((response) => response.json())
        .then((value) => value.drinks[0])
        .catch((error) => console.log(error))
    );
  });

  Promise.all([drink1, drink2, drink3]).then((result) =>
    result.forEach((singledrink) => {
      const drinkDiv = document.createElement("div");
      drinkDiv.appendChild(document.createTextNode(singledrink.strDrink));
      drinkDiv.className = "drink";
      document.body.insertBefore(drinkDiv, drink_btn.nextSibling);
    })
  );
};

drink_btn.addEventListener("click", getRandomdrinks);
