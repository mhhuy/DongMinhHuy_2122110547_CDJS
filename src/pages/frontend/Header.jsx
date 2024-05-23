import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaRegUser}  from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import React from "react";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
