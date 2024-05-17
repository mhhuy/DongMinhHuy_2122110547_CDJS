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
import Slider from "./Component/Slider";
import Policyitem from "./Component/Policyitem";
import Database from "./data_fake.json"
import Productitem from "./Component/Productitem";

function App() {
  const listproduct = Database.products;
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
                  <a class="nav-link active" href="#">
                    <FaRegUser />
                  </a>
                </div>
                <div>
                  <a class="nav-link" href="#">
                    <FaCartPlus />
                  </a>
                </div>
              </nav>
            </div>
            <div col-md-2></div>
          </div>
        </div>
      </header>
      <main className="bg-light">
        <div>
          <Slider/>
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-3">
              <Policyitem
                image="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_1.svg?1712897547805"
                tittle="Vận chuyển miễn phí"
                desc="Hóa đơn trên 5 triệu"
              />
            </div>
            <div className="col-md-3">
              <Policyitem
                image="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_2.svg?1712897547805"
                tittle="Quà tặng hấp dẫn"
                desc="Hóa đơn trên 10 triệu"
              />
            </div>
            <div className="col-md-3">
              <Policyitem
                image="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_3.svg?1712897547805"
                tittle="Chứng nhận chất lượng"
                desc="Sản phẩm chính hãng"
              />
            </div>
            <div className="col-md-3">
              <Policyitem
                image="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_4.svg?1712897547805"
                tittle="Hotline: 1900 9090"
                desc="Hỗ trợ 24/7"
              />
            </div>
            <hr />
          </div>
        </div>
        <div className="section_product">
          <div class="container mt-5">
            <div class="row">
              {listproduct.map((pt, index)=>{
                return (
                  <div className="col-md-3" key={index}>
                    <Productitem product={pt}/>
                  </div>
                );
              })}
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
