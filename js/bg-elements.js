const bgElements = () => {
  const elements = document.querySelectorAll(".set-bg");

  elements.forEach((elem) => {
    elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
  });

  const arr = [1, 2, 3, 4];

  const newArr = arr.filter((item) => item <= 3);
  console.log(newArr);
};

bgElements();
