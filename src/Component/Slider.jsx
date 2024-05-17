import React from "react";

const Slider = () => {
  return (
    <div id="carouselExampleDark" class="carousel carousel-dark slide mt-2">
      <div class="carousel-indicators">
            <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
      </div>
      <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <img
                src="https://bizweb.dktcdn.net/100/502/483/themes/941751/assets/home_slider_2.jpg?1715769761546"
                class="d-block w-100"
                alt="..."
            />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
            <img
                src="https://file.hstatic.net/200000722513/file/uu_dai_soc_b6303389c3fb4f26b05bd368f3d61486.jpg"
                class="d-block w-100"
                alt="..."
            />
            </div>
            <div class="carousel-item">
            <img
                src="https://file.hstatic.net/200000722513/file/loa_xin_slider_55571db8742146cd85eef265cf950b35.png"
                class="d-block w-100"
                alt="..."
            />
            </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
