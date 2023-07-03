const init = () => {
  renderHeader();
  renderFooter();
  renderTable();
};

const renderTable = () => {
  class Dog {
    constructor(name, age, gender, service, breed) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.service = service;
      this.breed = breed;
    }
  }

  const dogsArr = [];
  dogsArr.push(new Dog("Ernie", "3", "M", "Grooming", "Husky"));
  dogsArr.push(new Dog("Josie", "7", "F", "Nails", "Poodle"));
  dogsArr.push(new Dog("Max", "4", "M", "Haircut", "Labrador"));
  dogsArr.push(new Dog("Luna", "2", "F", "Haircut", "German Shepherd"));
  dogsArr.push(new Dog("Rocky", "5", "M", "Grooming", "Bulldog"));
  dogsArr.push(new Dog("Bella", "3", "F", "Nails", "Golden Retriever"));
  dogsArr.push(new Dog("Charlie", "6", "M", "Nails", "Dachshund"));
  dogsArr.push(new Dog("Lucy", "1", "F", "Grooming", "Beagle"));
  dogsArr.push(new Dog("Cooper", "8", "M", "Vaccine", "Siberian Husky"));
  dogsArr.push(new Dog("Molly", "9", "F", "Vaccine", "Boxer"));

  const $mainTbale = (document.getElementsByTagName(
    "main"
  )[0].innerHTML = `<h1>Pet Registry</h1>
  <div class="table-info flex-row align">
    <h3>Registry Count: ${dogsArr.length}</h3>
    <button class="button">
      <i class="fa-solid fa-user-plus"></i> Register
    </button>
  </div>
  <table id="pet-registry">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Service</th>
      <th>Breed</th>
      <th></th>
    </tr>
  </table>`);

  const $petTable = document.getElementsByTagName("table")[0];

  dogsArr.forEach((dog) => {
    $petTable.innerHTML += `
  <tr>
    <td>${dog.name}</td>
    <td>${dog.age}</td>
    <td>${dog.gender}</td>
    <td>${dog.service}</td>
    <td>${dog.breed}</td>
    <td><i class="fa-solid fa-trash-can"></i></td>
  </tr>
  `;
  });
};

const renderHeader = () => {
  const $header = (document.getElementsByTagName("header")[0].innerHTML = `
    <nav class="container flex-row align">
        <div class="brand-logo">
            <a href="index.html" class="flex-row align justify">
            <i class="fa-solid fa-dog"></i>
            <h1>Petzzarria</h1></a>
        </div>
        <ul class="flex-row">
            <li><a href="services.html">Services</a></li>
            <li><a href="register.html">Register</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
        <div class="social flex-row align justify">
            <a href="https://www.instagram.com/" target="_blank"
            ><i class="fa-brands fa-instagram"></i
            ></a>
            <a href="https://twitter.com/" target="_blank"
            ><i class="fa-brands fa-twitter"></i
            ></a>
            <a href="https://www.yelp.com/" target="_blank"
            ><i class="fa-brands fa-yelp"></i></i
            ></a>
            <a href="18006462023"><h3>1(800)PET-2023</h3></a>
      </div>
    </nav>
    <section class="hero container flex-row align justify">
    <h2>
    Fetch <span>wag-tastic savings!</span> Register your fur baby, unlock discounts on <span>paw-some services!</span> 
    </h2>
    <img src="img/regheroimg.png" alt="" />
</section>
  `);
};

const renderFooter = () => {
  const businessInfo = {
    name: "Petzzarria",
    address: "123 Paw Avenue, Petropolis, Wooflandia",
    tel: "1(800)PET-2023",
    email: "contact@petzzarria.com",
    hours: ["M-F: 8AM-10PM", "W: Closed", "Sat/Sun: 6AM-10PM"],
  };

  const $footer = (document.getElementsByTagName(
    "footer"
  )[0].innerHTML = `<div class="container flex-row">
  <div class="footer-brand flex-col align">
    <i class="fa-solid fa-dog"></i>
    <h1>Petzzarria</h1>
    <p>
      © 2023 Petzzarria. All fur rights reserved. No tail wagging, barks,
      or purrs allowed without our paw-some permission. Let's keep the pet
      pampering purr-fection intact!
    </p>
  </div>

  <div class="footer-info flex-col align">
        <ul>
          <h2>Hours of Pawperations</h2>
          <li>${businessInfo.hours[0]}</li>
          <li>${businessInfo.hours[1]}</li>
          <li>${businessInfo.hours[2]}</li>
          <li>---------</li>
          <li>${businessInfo.address}</li>
          <li>${businessInfo.email}</li>
          <li>${businessInfo.tel}</li>
          </ul>
      </div>

  <div class="footer-subscribe align">
    <h2>Subscribe to Newsletter</h2>
    <p>
      "Paws-itive vibes and fur-tastic updates await! Don't miss out,
      subscribe to our newsletter and unleash the joy of pet-tastic
      perks!"
    </p>
    <div class="flex-row align">
      <input type="text" placeholder="Enter Your E-Mail" maxlength="20" />
      <button class="button" id="sub-newsletter">
        <i class="fa-solid fa-paw"></i>Submit
      </button>
    </div>
  </div>
</div>`);

  const $subButton = document.getElementById("sub-newsletter");
  $subButton.addEventListener("click", () => alert("Subscribed! Paws bump~"));
};
