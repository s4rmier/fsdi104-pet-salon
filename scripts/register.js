const init = () => {
  const header = document.getElementById("header");
  const headline = document.createElement("h1");
  headline.innerText = "Welcome to Petzirria";
  header.appendChild(headline);
};

class Dog {
  constructor(name, age, gender, service = [], breed) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
  }
}

const dogsArr = [];

dogsArr.push(new Dog("Peter", "6", "M", ["Haircut"], "Poodle"));
dogsArr.push(new Dog("James", "5", "M", ["Nails"], "Poodle"));
dogsArr.push(new Dog("Mia", "3", "F", ["Vaccine"], "Poodle"));

const listDog = (property) => {
  dogsArr.forEach((dog) => {
    const $newListItem = document.createElement("li");
    $newListItem.innerHTML = `
    <li>${dog[property]}</li>
    `;
    document.getElementById("list-container").appendChild($newListItem);
  });
};

listDog("name");
