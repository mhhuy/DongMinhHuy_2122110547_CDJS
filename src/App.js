import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./images/logo-web.png";
import {
  FaFacebook,
  FaRegUser,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

function App() {
  return (
    <>
      <header className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-3">
              <img
                src="https://bizweb.dktcdn.net/100/502/483/themes/941751/assets/logo.png?1715769761546"
                alt="logo"
              />
            </div>
            <div className="col-md-7 mt-2">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Menu
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Giới thiệu
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                         Linh kiện
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Bàn phím
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Tai nghe
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Màn hình
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button class="btn btn-outline-danger" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
                <div>
                  <a class="nav-link active" href="#"><FaRegUser /></a>
                </div>
                <div>
                  <a class="nav-link" href="#"><FaCartPlus /></a>
                </div>
              </nav>
            </div>
            <div col-md-2>
              
            </div>
          </div>
        </div>
      </header>
      <main className="bg-light">
        <div className="container">
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
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-3">
              <div class="card mb-4">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/502/483/products/tai-nghe-edifier-w830bt-5-jpg-v-1658377631820.jpg?v=1703666878963"
                  class="card-img-top"
                  alt="Product-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Product 1</h5>
                  <p>
                    Price: <span class="price">$19.99</span>
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div class="product-details d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-danger btn-sm">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-4">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/502/483/products/tai-nghe-edifier-w830bt-5-jpg-v-1658377631820.jpg?v=1703666878963"
                  class="card-img-top"
                  alt="Product-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Product 2</h5>
                  <p>
                    Price: <span class="price">$19.99</span>
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="row">
                    <div class="product-details d-flex justify-content-between align-items-center">
                      <a href="#" class="btn btn-danger btn-sm">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-4">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/502/483/products/tai-nghe-edifier-w830bt-5-jpg-v-1658377631820.jpg?v=1703666878963"
                  class="card-img-top"
                  alt="Product-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Product 3</h5>
                  <p>
                    Price: <span class="price">$19.99</span>
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div class="product-details d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-danger btn-sm">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-4">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/502/483/products/tai-nghe-edifier-w830bt-5-jpg-v-1658377631820.jpg?v=1703666878963"
                  class="card-img-top"
                  alt="Product-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Product 4</h5>
                  <p>
                    Price: <span class="price">$19.99</span>
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div class="product-details d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-danger btn-sm">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-4">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/502/483/products/tai-nghe-edifier-w830bt-5-jpg-v-1658377631820.jpg?v=1703666878963"
                  class="card-img-top"
                  alt="Product-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Product 1</h5>
                  <p>
                    Price: <span class="price">$19.99</span>
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div class="product-details d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-danger btn-sm">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-4">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/502/483/products/tai-nghe-edifier-w830bt-5-jpg-v-1658377631820.jpg?v=1703666878963"
                  class="card-img-top"
                  alt="Product-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Product 2</h5>
                  <p>
                    Price: <span class="price">$19.99</span>
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div class="product-details d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-danger btn-sm">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-4">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/502/483/products/tai-nghe-edifier-w830bt-5-jpg-v-1658377631820.jpg?v=1703666878963"
                  class="card-img-top"
                  alt="Product-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Product 3</h5>
                  <p>
                    Price: <span class="price">$19.99</span>
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div class="product-details d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-danger btn-sm">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mb-4">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/502/483/products/tai-nghe-edifier-w830bt-5-jpg-v-1658377631820.jpg?v=1703666878963"
                  class="card-img-top"
                  alt="Product-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Product 4</h5>
                  <p>
                    Price: <span class="price">$19.99</span>
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div class="product-details d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-danger btn-sm">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="container-fluid bg-dark py-5">
        <div className="container">
          <div class="row">
            <div class="col-md-3 col-lg-3">
              <h5 class="text-white mb-4">Về shop</h5>
              <ul class="list-unstyled text-white">
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Tuyển dụng</a>
                </li>
                <li>
                  <a href="#">Customer Success Story</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3">
              <h5 class="text-white mb-4">Chính sách</h5>
              <ul class="list-unstyled text-white">
                <li>
                  <a href="#">Chính sách bảo hành</a>
                </li>
                <li>
                  <a href="#">Chính sách thanh toán</a>
                </li>
                <li>
                  <a href="#">Chính sách giao hàng</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3">
              <h5 class="text-white mb-4">Thông tin</h5>
              <ul class="list-unstyled text-white">
                <li>
                  <a href="#">Hệ thống của hàng</a>
                </li>
                <li>
                  <a href="#">Hướng dẫn mua hàng</a>
                </li>
                <li>
                  <a href="#">Tra cứu bảo hành</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-lg-3">
              <h5 class="text-white mb-4">Kết nối với chúng tôi</h5>
              <ul class="list-unstyled d-flex justify-content-between">
                <li>
                  <a href="#" class="btn btn-outline-light btn-sm">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" class="btn btn-outline-light btn-sm">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" class="btn btn-outline-light btn-sm">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" class="btn btn-outline-light btn-sm">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-12 mt-4">
              <p class="text-white text-center">
                &copy; 2024 Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
