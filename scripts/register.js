const init = () => {
  renderHeader();
  renderDogData();
  renderFooter();
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

class Dog {
  constructor(name, age, gender, service, breed, contact, method) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
    this.contact = contact;
    this.method = method;
  }
}

const dogsArr = [];
dogsArr.push(
  new Dog("Ernie", "3", "M", "Grooming", "Husky", "619-555-4444", "Cash")
);
dogsArr.push(
  new Dog("Josie", "7", "F", "Nails", "Poodle", "619-323-5231", "Cash")
);
dogsArr.push(
  new Dog("Max", "4", "M", "Haircut", "Labrador", "619-123-0002", "Cash")
);

const registerPet = document.getElementById("register-pet"); //open registry modal
registerPet.addEventListener("click", () => toggleModal(registryModal));

const closeModalButton = document.querySelector(".cancel-button"); //modal cancel button
closeModalButton.addEventListener("click", () => toggleModal(registryModal));

const registerToTable = document.getElementById("add-to-table"); //add pet to the array/table
registerToTable.addEventListener("click", () => {
  clearInputStyling();
  const petName = document.getElementById("petname");
  const petGender = document.getElementById("petgender");
  const petAge = document.getElementById("petage");
  const petService = document.getElementById("options");
  const petBreed = document.getElementById("petbreed");
  const contactInfo = document.getElementById("contactinfo");
  const paymentMethod = document.getElementById("payment-method");

  if (
    petName.value == "" ||
    petGender.value == "" ||
    petAge.value == "" ||
    petService.value == "" ||
    petBreed.value == "" ||
    contactInfo.value == "" ||
    paymentMethod.value == ""
  ) {
    if (petName.value == "") {
      petName.classList.add("error");
    }
    if (petGender.value == "") {
      petGender.classList.add("error");
    }
    if (petAge.value == "") {
      petAge.classList.add("error");
    }
    if (petService.value == "") {
      petService.classList.add("error");
    }
    if (petBreed.value == "") {
      petBreed.classList.add("error");
    }
    if (contactInfo.value == "") {
      contactInfo.classList.add("error");
    }
    if (paymentMethod.value == "") {
      paymentMethod.classList.add("error");
    }
    alert("Please fill out all fields before continuing");
  } else {
    dogsArr.push(
      new Dog(
        petName.value,
        petAge.value,
        petGender.value,
        petService.value,
        petBreed.value,
        contactInfo.value,
        paymentMethod.value
      )
    );
    renderDogData();
    toggleModal(registryModal);
  }
});

const renderDogData = () => {
  const $petTable = document.getElementsByTagName("table")[0];
  $petTable.innerHTML = `<tr>
  <th>Name</th>
  <th>Age</th>
  <th>Gender</th>
  <th>Service</th>
  <th>Breed</th>
  <th>Contact</th>
  <th>Method</th>
  <th></th>
    </tr>`;
  dogsArr.forEach((dog) => {
    $petTable.innerHTML += `
  <tr>
    <td>${dog.name}</td>
    <td>${dog.age}</td>
    <td>${dog.gender}</td>
    <td>${dog.service}</td>
    <td>${dog.breed}</td>
    <td>${dog.contact}</td>
    <td>${dog.method}</td>
    <td class="dog-remove"><i class="fa-solid fa-trash-can"></i></td>
  </tr>
  `;
  });

  const deleteRegistrationButton = document.querySelectorAll(".dog-remove");
  deleteRegistrationButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      const confirmed = window.confirm(
        "Are you sure you want to delete this registration?"
      );
      if (confirmed) {
        dogsArr.splice(index, 1);
        renderDogData();
      }
    });
  });

  const registryCount = (document.getElementById("regcount").innerText =
    dogsArr.length);
};

const registryModal = document.querySelector(".registry-modal");

const toggleModal = (modal) => {
  modal.classList.toggle("hidden");
  clearModalData();
};

const clearModalData = () => {
  const petName = (document.getElementById("petname").value = "");
  const petGender = (document.getElementById("petgender").value = "");
  const petAge = (document.getElementById("petage").value = "");
  const petService = (document.getElementById("options").value = "Grooming");
  const petBreed = (document.getElementById("petbreed").value = "");
  const contactInfo = (document.getElementById("contactinfo").value = "");
  const paymentMethod = (document.getElementById("payment-method").value = "");
  clearInputStyling();
};

const clearInputStyling = () => {
  const petName = document.getElementById("petname").classList.remove("error");
  const petGender = document
    .getElementById("petgender")
    .classList.remove("error");
  const petAge = document.getElementById("petage").classList.remove("error");
  const petService = document
    .getElementById("options")
    .classList.remove("error");
  const petBreed = document
    .getElementById("petbreed")
    .classList.remove("error");
  const contactInfo = document
    .getElementById("contactinfo")
    .classList.remove("error");
  const paymentMethod = document
    .getElementById("payment-method")
    .classList.remove("error");
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
      <input class="email-input" type="text" placeholder="Enter Your E-Mail" maxlength="20" />
      <button class="button" id="sub-newsletter">
        <i class="fa-solid fa-paw"></i>Submit
      </button>
    </div>
  </div>
</div>`);

  const $subButton = document.getElementById("sub-newsletter");

  $subButton.addEventListener("click", () => {
    const emailInput = document.querySelector(".email-input").value;

    if (emailInput === "") {
      alert("Please enter a valid e-mail address");
    } else {
      alert("Subscribed! Paws-bump!");
    }
  });
};
