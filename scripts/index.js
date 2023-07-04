const init = () => {
  renderHeader();
  renderArticle();
  renderSection();
  renderGallery();
  renderRegisterPet();
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
            From <span>pampered paws</span> to <span>fabulous fur</span>, Petzzarria serves up pet
            perfection with a <span>stylish purr!</span>
        </h2>
        <img src="img/heroimg.jpg" alt="" />
    </section>
  `);
};

const renderArticle = () => {
  const $article = (document.getElementsByTagName("article")[0].innerHTML = `
  <div class="container">
  <h2>Our Story</h2>
  <p>
    Once upon a wag, Petzzarria sprang to life with a sprinkle of
    silliness. We're pet-obsessed and slightly fur-midable! Our salon is a
    playground of pampering, where pawsome makeovers and fluff-tastic
    transformations reign supreme. Join the fur-nomenon and let the
    giggles and tail wags commence!
  </p>
</div>
  `);
};

const renderSection = () => {
  const $section = (document.getElementsByTagName("section")[1].innerHTML = `
  <div class="flex-row align">
        <figure class="flex-col align">
          <img src="img/i2.png" alt="" />
          <figcaption>
            <h3>Haircut and Styling</h3>
            <p>
              Get ready for a pawsome makeover extravaganza! Our talented
              stylists will transform your pets from shaggy to chic. With trendy
              trims and fabulous furdos, they'll strut their stuff with
              confidence. It's time to unleash their inner fashionista!
            </p>
          </figcaption>
        </figure>
        <figure class="flex-col align justify">
          <img src="img/i1.png" alt="" />
          <figcaption>
            <h3>Grooming</h3>
            <p>
              Get ready for the ultimate pet primping party! Our grooming
              services will have your furry pals looking fluff-tastic and
              smelling fur-bulous. From luxurious baths to dapper haircuts,
              we'll pamper your pets with a touch of magic and a whole lot of
              wag-worthy style!
            </p>
          </figcaption>
        </figure>
        <figure class="flex-col align justify">
          <img src="img/i3.png" alt="" />
          <figcaption>
            <h3>Nail Trimming</h3>
            <p>
              Say goodbye to scratchy shenanigans! Our nail whisperers will
              gently trim those pesky claws, ensuring maximum comfort. No more
              nail nightmares, just happy paws. Let us give their nails a trim
              and a touch of flair! It's time to put the 'purr' in purr-fectly
              manicured paws!
            </p>
          </figcaption>
        </figure>
      </div>
      <a href="services.html"
      ><button class="button">
        <i class="fa-solid fa-paw"></i>See Services
      </button></a
    >
  `);
};

const renderGallery = () => {
  const $gallery = (document.querySelector(".gallery").innerHTML = `
  <img class="g1" src="img/g1.jpg" alt="" />
  <img class="g2" src="img/g2.jpg" alt="" />
  <img class="g3" src="img/g3.jpg" alt="" />
  <img class="g4" src="img/g4.jpg" alt="" />
  <img class="g5" src="img/g5.jpg" alt="" />
  <img class="g6" src="img/g6.jpg" alt="" />
  <img class="g7" src="img/g7.jpg" alt="" />
  <img class="g8" src="img/g8.jpg" alt="" />
  `);
};

const renderRegisterPet = () => {
  const $registerPet = (document.querySelector(
    ".register-pet"
  ).innerHTML = `  <div>
  <h2>
    Ready to embark on a pet-tacular adventure? Register your furball
    today, and we'll sprinkle magic and cuddles while handling the rest!
  </h2>
  <a href="register.html"
    ><button class="button">
      <i class="fa-solid fa-paw"></i>registration
    </button></a
  >
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
