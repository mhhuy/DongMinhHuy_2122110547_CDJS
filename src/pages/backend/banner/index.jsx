import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";

const Banner = () => {
  const banners = database.Banners;
  //Khai báo các state lưu trữ
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [sort_order, setSortOrder] = useState(0);
  const [position, setPosition] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
  //Ham handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Banner);
  };

  const Banner = {
    name: name,
    link: link,
    sort_order: sort_order,
    position: position,
    description: description,
    status: status
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lí BANNER</strong>
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
          <div className="col-md-4">
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Tên Banner</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name">Liên kết</label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sort-order">Sắp xếp</label>
                <select className="form-select" id="sort-order" value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="0">None</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="position">Vị trí</label>
                <select className="form-select" id="position" value={position}
                  onChange={(e) => setPosition(e.target.value)}>
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
                <label htmlFor="status">Trạng thái</label>
                <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa Xuất bản</option>
                </select>
              </div>
              <div className="mb-3 text-end">
                <button className="btn btn-success px-5">Lưu</button>
              </div>
            </form>
          </div>
          <div className="col-md-8">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên Banner</th>
                  <th>Vị trí</th>
                  <th>Liên kết</th>
                  <th>ID</th>
                  <th style={{"width":"100px"}}>chức năng</th>
                </tr>
              </thead>
              <tbody>
                {banners &&
                  banners.length > 0 &&
                  banners.map((banner) => {
                    return (
                      <tr key={banner.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={banner.image} alt={banner.image} />
                        </td>
                        <td>{banner.name}</td>
                        <td>{banner.position}</td>
                        <td>{banner.link}</td>
                        <td>{banner.id}</td>
                        <td>
                        <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/category/edit/" + banner.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-danger me-1"
                            to={"/admin/category/trash/" + banner.id}
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

export default Banner;
