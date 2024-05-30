import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";

const Product = () => {
  const products = database.Products;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [qty, setQty] = useState(0);
  const [status, setStatus] = useState("");
  const [brand_id, setBrandId] = useState(0);
  const [pricesale, setPriceSale] = useState(0);
  const [detail, setDetail] = useState('');
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    const product={
      name: name,
      price: price,
      description: description,
      category_id: category_id,
      qty: qty,
      status: status,
      brand_id: brand_id,
      pricesales: pricesale,
      details: detail
    }
    console.log(product);
   }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lí sản phẩm</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn danger">
              {" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-7">
          <div class="row">
                <div class="col-md-9">
                  <form action="" onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label htmlFor="name">
                        <strong>Tên sản phẩm (*)</strong>
                      </label>
                      <input
                        type="text"
                        placeholder="Nhập tên sản phẩm"
                        name="name"
                        value={name}
                        class="form-control"
                        onChange={(e)=>setName(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label htmlFor="detail">
                        <strong>Chi tiết (*)</strong>
                      </label>
                      <textarea
                        name="detail"
                        value={detail}
                        placeholder="Nhập chi tiết sản phẩm"
                        rows="7"
                        class="form-control"
                        onChange={(e)=>setDetail(e.target.value)}
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <label htmlFor="description">
                        <strong>Mô tả (*)</strong>
                      </label>
                      <textarea
                        name="description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        rows="3"
                        class="form-control"
                        placeholder="Nhập mô tả"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="status">Trạng thái</label>
                      <select className="form-select" id="status"
                      value={status}
                      onChange={(e)=>setStatus(e.target.value)}>
                        <option value="1">Xuất bản</option>
                        <option value="2">Chưa xuất bản</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="catagory_id">Danh mục</label>
                      <select className="form-select" id="catagory_id"
                      value={category_id}
                      onChange={(e)=>setCategoryId(e.target.value)}>
                        <option value="0">Chọn danh mục</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="brand_id">Thương hiệu</label>
                      <select className="form-select" id="brand_id"
                      value={brand_id}
                      onChange={(e)=>setBrandId(e.target.value)}>
                        <option value="0">Chọn thương hiệu</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div class="col-md-3">
                  <div class="box-container mt-2 bg-white">
                    <div class="box-header py-1 px-2 border-bottom">
                      <strong>Giá và số lượng</strong>
                    </div>
                    <div class="box-body p-2 border-bottom">
                      <div class="mb-3">
                        <label htmlFor="price">
                          <strong>Giá bán (*)</strong>
                        </label>
                        <input
                          type="number"
                          min="10000"
                          value={price}
                          name="price"
                          onChange={(e)=>setPrice(e.target.value)}
                          class="form-control"
                        />
                      </div>
                      <div class="mb-3">
                        <label htmlFor="price_sale">
                          <strong>Giá khuyến mãi (*)</strong>
                        </label>
                        <input
                          type="number"
                          value={pricesale}
                          min="10000"
                          name="price_sale"
                          onChange={(e)=>setPriceSale(e.target.value)}
                          class="form-control"
                        />
                      </div>
                      <div class="mb-3">
                        <label htmlFor="qty">
                          <strong>Số lượng (*)</strong>
                        </label>
                        <input
                          type="number"
                          value={qty}
                          min="1"
                          name="qty"
                          onChange={(e)=>setQty(e.target.value)}
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="box-container mt-2 bg-white">
                    <div class="box-header py-1 px-2 border-bottom">
                      <strong>Hình đại diện(*)</strong>
                    </div>
                    <div class="box-body p-2 border-bottom">
                      <input type="file" name="image" class="form-control" />
                    </div>
                  </div>
                  <div className="mb-3 text-end mt-5">
                    <button type="submit" className="btn btn-success px-5">
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-md-5">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Tên danh mục</th>
                  <th>Tên thương hiệu</th>
                  <th>ID</th>
                  <th style={{"width":"100px"}}>chức năng</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.length > 0 &&
                  products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={product.image} alt={product.image} />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>{product.id}</td>
                        <td>
                        <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/category/edit/" + product.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-danger me-1"
                            to={"/admin/category/trash/" + product.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
                       
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
