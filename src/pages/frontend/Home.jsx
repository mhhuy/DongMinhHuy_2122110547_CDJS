import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FaCartPlus } from "react-icons/fa6";
import Slider from "../../Components/Slider";
import Policyitem from "../../Components/Policyitem";
import Database from "../../data_fake.json"
import Productitem from "../../Components/Productitem";
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer" 

const Home = () => {
  const listproduct = Database.products;
  return (
    <>
      <Header/>
      <Outlet/>
      <main className="bg-light">
        <div>
          <Slider/>
        </div>
        <div className="card policy-con container bg-light">
          <div className="row mt-3">
            <div className="col-md">
              <Policyitem
                image="https://bizweb.dktcdn.net/100/502/483/themes/941751/assets/policies_icon_1.png?1716364805032"
                tittle="GIAO HỎA TỐC"
                desc="Nội thành TP. HCM trong 4h"
              />
            </div>
            <div className="policy-home col-md">
              <Policyitem
                image="https://bizweb.dktcdn.net/100/502/483/themes/941751/assets/policies_icon_2.png?1716364805032"
                tittle="TRẢ GÓP ƯU ĐÃI 0%"
                desc="Hỗ trợ vay với lãi suất thấp"
              />
            </div>
            <div className="policy-home col-md">
              <Policyitem
                image="https://bizweb.dktcdn.net/100/502/483/themes/941751/assets/policies_icon_3.png?1716364805032"
                tittle="DEAL HOT BÙNG NỔ"
                desc="Flash sale giảm giá cực sốc"
              />
            </div>
            <div className="policy-home col-md">
              <Policyitem
                image="https://bizweb.dktcdn.net/100/502/483/themes/941751/assets/policies_icon_4.png?1716364805032 "
                tittle="MIỄN PHÍ ĐỔI TRẢ"
                desc="Trong vòng 30 ngày"
              />
            </div>
            <div className="policy-home col-md">
              <Policyitem
                image="https://bizweb.dktcdn.net/100/502/483/themes/941751/assets/policies_icon_5.png?1716364805032"
                tittle="HỖ TRỢ 24/7"
                desc="Hỗ trợ khách hàng 24/7"
              />
            </div>
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
      <Outlet/>
      <Footer/>
    </>

  );
};

export default Home
