/*=============== Show & Hidden Menu ===============*/
const showMenu = ({ toggleId, menuId }) => {
  const navToggle = document.getElementById(toggleId),
    navMenu = document.getElementById(menuId);

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
};
showMenu({ toggleId: "nav-toggle", menuId: "nav-menu" });

const hiddenMenu = ({ closeId, menuId }) => {
  const navClose = document.getElementById(closeId),
    navMenu = document.getElementById(menuId);

  if (navClose && navMenu) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
};
hiddenMenu({ closeId: "nav-close", menuId: "nav-menu" });

/*=============== Remove Mobile Menu ===============*/
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== Change Background Header ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== Scroll Sections Active Link ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== Show Scroll Up ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 1
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== Accordions ===============*/
const accordionItems = document.querySelectorAll(".about-accordion-item");
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".about-accordion-header");
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);
    if (openItem && openItem !== item) toggleItem(openItem);
  });
});
const toggleItem = (item) => {
  const accordionContent = item.querySelector(".about-accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== Products ===============*/
const productsList = [
  {
    image: "assets/images/cars/cars (1).png",
    mark: "Toyota",
  },
  {
    image: "assets/images/cars/cars (2).png",
    mark: "Audi",
  },
  {
    image: "assets/images/cars/cars (3).png",
    mark: "Audi",
  },
  {
    image: "assets/images/cars/cars (4).png",
    mark: "BMW",
  },
  {
    image: "assets/images/cars/cars (5).png",
    mark: "BMW",
  },
  {
    image: "assets/images/cars/cars (6).png",
    mark: "Cadillac",
  },
  {
    image: "assets/images/cars/cars (7).png",
    mark: "Citroen",
  },
  {
    image: "assets/images/cars/cars (8).png",
    mark: "Citroen",
  },
  {
    image: "assets/images/cars/cars (9).png",
    mark: "Ford",
  },
  {
    image: "assets/images/cars/cars (10).png",
    mark: "Ford",
  },
  {
    image: "assets/images/cars/cars (11).png",
    mark: "Hyundai",
  },
  {
    image: "assets/images/cars/cars (12).png",
    mark: "Hyundai",
  },
  {
    image: "assets/images/cars/cars (13).png",
    mark: "Kia",
  },
  {
    image: "assets/images/cars/cars (14).png",
    mark: "Mercedes",
  },
  {
    image: "assets/images/cars/cars (15).png",
    mark: "Mercedes",
  },
  {
    image: "assets/images/cars/cars (16).png",
    mark: "Nissan",
  },
  {
    image: "assets/images/cars/cars (17).png",
    mark: "Porsches",
  },
  {
    image: "assets/images/cars/cars (18).png",
    mark: "Porsches",
  },
  {
    image: "assets/images/cars/cars (19).png",
    mark: "Suzuki",
  },
  {
    image: "assets/images/cars/cars (20).png",
    mark: "Toyota",
  },
];
const swiperWrapper = document.getElementById("swiper-wrapper");
productsList.forEach((el) => {
  swiperWrapper.innerHTML += `
  <article class="products-card swiper-slide">
    <div class="products-data grid">
      <div class="products-data-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="17"
          height="17"
          fill="var(--title-color)"
          >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.596 5.404c-.204-.205-.526-.233-.763-.067-2.89 2.028-4.52 3.23-4.894 3.602-.585.586-.585 1.536 0 2.122.586.585 1.536.585 2.122 0 .219-.22 1.418-1.851 3.598-4.897.168-.234.141-.556-.063-.76zM17.5 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-11 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm2.318-3.596c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.023 0 1.414.39.39 1.023.39 1.414 0 .39-.39.39-1.024 0-1.414zM12 5.5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
          />
        </svg>
          100km/h
      </div>

        <div class="products-data-group">
          <i class="ri-funds-box-fill"></i> 3.5Sec
        </div>

        <div class="products-data-group">
          <i class="ri-gas-station-fill"></i> Diesel
        </div>
      </div>

    <img
      src="${el.image}"
      alt=""
      class="products-img"
    />

    <div class="products-bottom">
      <h2 class="products-mark">${el.mark}</h2>
      <p class="products-modele caramel">SLS AMG GT</p>
    </div>

    <button class="button products-button">
      <h3 class="products-price">$126.345</h3>
      <i class="ri-shopping-bag-2-fill"></i>
    </button>
  </article>
  `;
});
let swiperProduct = new Swiper(".products-content", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*=============== Popular ===============*/
const popularCars = [
  {
    image: "assets/images/cars/cars (17).png",
    mark: "Porsches",
    filter: "porsches",
  },
  {
    image: "assets/images/cars/cars (3).png",
    mark: "Audi",
    filter: "audi",
  },
  {
    image: "assets/images/cars/cars (18).png",
    mark: "Porsches",
    filter: "porsches",
  },
  {
    image: "assets/images/cars/cars (15).png",
    mark: "Mercedes",
    filter: "mercedes",
  },
  {
    image: "assets/images/cars/cars (2).png",
    mark: "Audi",
    filter: "audi",
  },
];
const popularContent = document.getElementById("popular-content");
popularCars.forEach((el) => {
  popularContent.innerHTML += `
  <article class="popular-card mix ${el.filter}">
    <div class="shape shape-smaller"></div>
    
    <h1 class="popular-mark">${el.mark}</h1>
    <h3 class="popular-modele caramel">SLS AMG GT</h3>

    <img
    src="${el.image}"
    alt=""
    class="popular-img"
    />

    <div class="popular-data grid">
      <div class="popular-data-group">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="17"
        height="17"
        fill="var(--title-color)"
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.596 5.404c-.204-.205-.526-.233-.763-.067-2.89 2.028-4.52 3.23-4.894 3.602-.585.586-.585 1.536 0 2.122.586.585 1.536.585 2.122 0 .219-.22 1.418-1.851 3.598-4.897.168-.234.141-.556-.063-.76zM17.5 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-11 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm2.318-3.596c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.023 0 1.414.39.39 1.023.39 1.414 0 .39-.39.39-1.024 0-1.414zM12 5.5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
          />
          </svg>
            3.6Sec
      </div>
        
      <div class="popular-data-group">
        <i class="ri-funds-box-fill"></i> 250 Km/h
      </div>
        
      <div class="popular-data-group">
        <i class="ri-gas-station-fill"></i> Diesel
      </div>
    </div>
      
    <h3 class="popular-price">$175.900</h3>
      
    <button class="button popular-button">
      <i class="ri-shopping-bag-2-fill"></i>
    </button>
  </article>`;
});

var mixerPopular = mixitup(".popular-content", {
  selectors: {
    target: ".popular-card",
  },
  animation: {
    duration: 300,
  },
});

const linkPopular = document.querySelectorAll(".popular-item");
function activePopular() {
  linkPopular.forEach((l) => {
    l.classList.remove("active-popular");
  });
  this.classList.add("active-popular");
}
linkPopular.forEach((l) => l.addEventListener("click", activePopular));

/*=============== Scroll Reveal ===============*/
let sr = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.section-title, .section-subtitle`);
sr.reveal(
  `.home-data-group, .about-accordion-item, .services-category article, .marks-content`,
  {
    interval: "300",
    reset: false,
  }
);
sr.reveal(`.about-img, .about-card`, {
  origin: "top",
});
sr.reveal(`.footer-data`, {
  origin: "top",
  interval: "300",
  reset: false,
});
