const mainData = () => {
  const renderTopAnime = (array) => {
    const wrapper = document.querySelector(".filter__gallery");

    wrapper.innerHTML = "";

    array.forEach((element) => {
      wrapper.insertAdjacentHTML(
        "afterbegin",
        `<div class="product__sidebar__view__item set-bg mix" data-setbg="${element.image}">
            <div class="ep">${element.rating}/ ?</div>
            <div class="view"><i class="fa fa-eye"></i> ${element.views}</div>
            <h5><a href="/anime-details.html">${element.title}</a></h5>
        </div>`
      );
    });
    wrapper.querySelectorAll(".set-bg").forEach((elem) => {
      console.log(elem);
      elem.style.backgoundImage = `url(${elem.dataset.setbg})`;
      console.log(elem.dataset.setbg);
    });
  };

  fetch("./db.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderTopAnime(data.anime.sort((a, b) => b.views - a.views).slice(0, 5));
    });
};
mainData();
