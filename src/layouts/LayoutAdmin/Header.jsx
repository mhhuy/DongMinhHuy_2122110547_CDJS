import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Header = () => {
  return (
    <section className="admin-header">
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
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Sản phẩm
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Tất cả sản phẩm
                            </a>
                          </li>
                          <li>
                           <Link to="/admin/category">
                            Danh mục
                           </Link>
                          </li>

                          <li>
                          <Link to="/admin/brand">
                            Thương hiệu
                           </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Bài viết
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Tất cả bài viết
                            </a>
                          </li>
                          <li>
                          <Link to="/admin/topic">
                            Chủ đề
                           </Link>
                          </li>
                          <li>
                          <Link to="/admin/topic">
                            Trang đơn
                           </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                      <Link to="/admin/order">
                            Quản lí đơn hàng
                           </Link>
                      </li>
                      <li class="nav-item">
                      <Link to="/admin/user">
                            Khách hàng
                           </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Giao diện
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                          <Link to="/admin/banner">
                            Banner
                           </Link>
                          </li>
                          <li>
                          <Link to="/admin/menu">
                            Menu
                           </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                      <Link to="/admin/contact">
                            Liên hệ
                           </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div col-md-2></div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
