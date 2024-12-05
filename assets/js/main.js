/* =============== Show Mobile Menu =============== */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* Show Menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

/* Show Menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/* =============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll(".nav__link");

const removeMenu = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show__menu");
};

navLink.forEach((link) => link.addEventListener("click", removeMenu));

/* =============== Change Background Header =============== */
const headerScroll = () => {
  const header = document.getElementById("header");

  //   Adding header__bg class when viewport height is greater than 50
  this.scrollY >= 50
    ? header.classList.add("header__bg")
    : header.classList.remove("header__bg");
};
window.addEventListener("scroll", headerScroll);

/* =============== Product Slider =============== */
const popularSlider = new Swiper(".popular__content", {
  slidesPerView: "auto",
  centerdSlides: true,
  loop: true,

  // Autoplay
  autoplay: {
    delay: 2500,
  },

  // Nagivation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Breakpoints
  breakpoints: {
    768: {
      centerdSlides: false,
    },
  },
});

/* =============== Select Faq =============== */
const faqItems = document.querySelectorAll(".faq__item");

// Selecting each item
faqItems.forEach((item) => {
  const faqHeader = item.querySelector(".faq__header");

  // Selecting each button on click
  faqHeader.addEventListener("click", () => {
    // Selecting current faq__open class
    const openItem = document.querySelector(".faq__open");

    // Calling toggler
    toggleItem(item);

    // Removing the faq__open class
    if (openItem && openItem != item) {
      toggleItem(openItem);
    }
  });
});

// Function to display faq content
const toggleItem = (item) => {
  // Selecting each faq content
  const faqItemContent = item.querySelector(".faq__item-content");

  // Removing faq__open class faq item contains it
  if (item.classList.contains("faq__open")) {
    faqItemContent.removeAttribute("style");
    item.classList.remove("faq__open");
  } else {
    // Adding max-height to the faq content and faq__open class
    faqItemContent.style.height = faqItemContent.scrollHeight + "px";
    item.classList.add("faq__open");
  }
};

/* =============== Show Scroll Up =============== */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  // Adding Scroll up button when height is more than 350 viewport
  this.scrollY >= 350
    ? scrollUp.classList.add("show__scroll")
    : scrollUp.classList.remove("show__scroll");
};
window.addEventListener("scroll", scrollUp);

/* =============== Scroll Sections Active Link =============== */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active__link");
    } else {
      sectionClass.classList.remove("active__link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* =============== Toggle Dark & Light Theme =============== */
const themeToggle = document.getElementById("theme-toggle");
const darkTheme = "dark__theme";
const iconTheme = "ri-sun-line";

// Previously selected theme (if selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtaining the current theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeToggle.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Obtaining the previously selected theme by user
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeToggle.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate or deactivate theme manually
themeToggle.addEventListener("click", () => {
  // Adding or removing icon theme
  document.body.classList.toggle(darkTheme);
  themeToggle.classList.add(iconTheme);

  // Saving the current theme & thme-icon selected by user
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* =============== ScrollReveal Animation =============== */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true, // Animation repeat
});

sr.reveal(
  `.home__content, .popular__container, .products__container, .join__bg, .footer__container`
);
sr.reveal(`.home__image`, { origin: "bottom" });
sr.reveal(`.faq__image, .features__image`, { origin: "left" });
sr.reveal(`.faq__content, .features__content`, { origin: "right" });
