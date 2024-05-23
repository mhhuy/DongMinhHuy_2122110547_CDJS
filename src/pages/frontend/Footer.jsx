import React from 'react'
import {
    FaFacebook,
    FaRegUser,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
  } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footer
