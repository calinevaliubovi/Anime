const preloader = () => {
  const preloader = document.querySelector(".preloder");
  console.log(preloader);

  preloader.classList.add("active");

  setTimeout(() => {
    preloader.classList.remove("active");
    console.log("Hi");
  }, 500);
};

preloader();
