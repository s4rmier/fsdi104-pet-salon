const init = () => {
  renderHeader();
  renderArticle();
  renderMain();
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
  
    `);
};

const renderArticle = () => {
  const $article = (document.getElementsByTagName("article")[0].innerHTML = `
  <div class="container">
  <h2>About Us</h2>
  <p>
    Welcome to Petzzarria, the ultimate destination where we transform your fur babies into fashion-forward trendsetters, showering them with love, stylish makeovers, and belly rubs that could outpace a turbocharged pizza delivery scooter.
  </p>
  </div>
  `);
};

const renderMain = () => {
  const $main = (document.getElementsByTagName(
    "main"
  )[0].innerHTML = `<div class="container flex-col justify">
  <figure class="flex-row align justify">
    <img src="img/about1.png" alt="" />
    <figcaption>
      <h2>Expert Pet Stylists:</h2>
      <p>
        Our highly skilled team of pet stylists are trained in the latest
        grooming techniques, ensuring your furry friends receive top-notch
        care and fabulous makeovers.
      </p>
    </figcaption>
  </figure>
  <figure class="flex-row align justify">
    <img src="img/about2.png" alt="" />
    <figcaption>
      <h2>Love and Care:</h2>
      <p>
        At Petzzarria, we believe in showering your pets with love and
        attention, creating a stress-free and comfortable environment for
        their grooming sessions.
      </p>
    </figcaption>
  </figure>
  <figure class="flex-row align justify">
    <img src="img/about3.png" alt="" />
    <figcaption>
      <h2>Tailored Services:</h2>
      <p>
        We understand that every pet is unique, which is why we offer
        personalized grooming packages that cater to the specific needs
        and preferences of your beloved companions.
      </p>
    </figcaption>
  </figure>
</div>`);
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
