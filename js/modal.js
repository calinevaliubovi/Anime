const modal = () => {
  const modal = document.querySelector(".search-model");
  const modalBtn = document.querySelector(".icon_search");
  const modalClose = modal.querySelector(".icon_close");
  const modalSearch = modal.querySelector("#search-input");
  let timeout;

  modalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalSearch.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(modalSearch.value);
    }, 2000);
  });
};

modal();
