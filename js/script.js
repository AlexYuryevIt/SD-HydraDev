const burgerMenu = document.querySelector(".burger__icon");
const burgerClose = document.querySelector(".burger__close");
const burgerItem = document.querySelector(".burger__menu");
const burgerContacts = document.querySelector(".burger__footer");

if (burgerMenu) {
  const burger = document.querySelector(".burger");
  burgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
  });
  burgerClose.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
    e.preventDefault();
  });
  burgerItem.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
  });
  burgerContacts.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
  });
  burger.addEventListener("click", function (e) {
    if (!e.target.closest(".burger__body")) {
      document.body.classList.toggle("body-lock");
      burger.classList.toggle("burger-active");
    }
  });
}

// Обработка ссылок с data-goto, чтобы в адресной строке не было ничего лишнего.
const Links = document.querySelectorAll(".link[data-goto]");
if (Links.length > 0) {
  Links.forEach((Links) => {
    Links.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const Links = e.target;
    if (Links.dataset.goto && document.querySelector(Links.dataset.goto)) {
      const gotoBlock = document.querySelector(Links.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
      // - document.querySelector('header').offsetHeight
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}