import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Database from "../../../data_fake.json";
const Brand = () => {
  const brands = Database.Brands;
  //Khai báo các state lưu trữ
  const [name, setName] = useState("");
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
  //Ham handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Brand);
  };

  const Brand = {
    name: name,
    sort_order: sort_order,
    description: description,
    status: status,
  };

  return (
    <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lí thương hiệu</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn-danger">
              <FaTrash /> Thùng rác
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Tên thương hiệu</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sort-order">Sắp xếp</label>
                <select
                  className="form-select"
                  id="sort-order"
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="0">None</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="description">Mô tả</label>
                <textarea
                  id="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="image">Hình ảnh</label>
                <input type="file" id="image" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  className="form-select"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa Xuất bản</option>
                </select>
              </div>
              <div className="mb-3 text-end">
                <button className="btn btn-success px-5">Lưu</button>
              </div>
            </form>
          </div>
          <div className="col-md-8  ">
            <div className="table table-bordered table-hover ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình</th>
                  <th>Tên danh mục</th>
                  <th>Slug</th>
                  <th>Chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {brands &&
                  brands.length > 0 &&
                  brands.map((brand) => {
                    return (
                      <tr key={brand.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={brand.image} alt={brand.image} />
                        </td>
                        <td>{brand.name}</td>
                        <td>{brand.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/brand/edit/" + brand.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{brand.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brand;
