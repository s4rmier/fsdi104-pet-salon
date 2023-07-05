const init = () => {
  renderHeader();
  renderFooter();
  renderArticle();
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
            "<span>Enchanting</span> salon transforms pets into <span>fashionistas.</span> Beg for more as we <span>sprinkle magic</span> on their furry journey!"
          </h2>
          <img src="img/serviceshero.png" alt="" />
      </section>
    `);
};

const renderArticle = () => {
  const $article = (document.getElementsByTagName("article")[0].innerHTML = `
  <div class="container">
  <h2>Our Services</h2>
  <p>
    Pamper your beloved pets with expert grooming, luxurious spa treatments, and stylish makeovers at our premium pet salon. Our skilled team provides personalized care, including nail trims, soothing massages, gentle bathing, and breed-specific haircuts. We prioritize your pet's comfort and well-being.
  </p>
  </div>
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
        <input class="email-input" type="text" placeholder="Enter Your E-Mail" maxlength="20" />
        <button class="button" id="sub-newsletter">
          <i class="fa-solid fa-paw"></i>Submit
        </button>
      </div>
    </div>
  </div>
    `);

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
