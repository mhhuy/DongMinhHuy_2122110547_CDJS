import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";

const Category = () => {
  const categorys = database.Categorys;
  //Khai báo các state lưu trữ
  const [name, setName] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
  //Ham handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Category);
  };

  const Category = {
    name: name,
    parent_id: parent_id,
    sort_order: sort_order,
    description: description,
    status: status
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quan li danh muc</strong>
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
          <div className="col-md-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Tên danh mục</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="parentid">Cấp cha</label>
                <select className="form-select" id="parentid" value={parent_id}
                  onChange={(e) => setParentId(e.target.value)}>
                  <option value="0">None</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="sort-order">Sắp xếp</label>
                <select className="form-select" id="sort-order" value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}>
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
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên danh mục</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {categorys &&
                  categorys.length > 0 &&
                  categorys.map((category) => {
                    return (
                      <tr key={category.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={category.image} alt={category.image} />
                        </td>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/category/edit/" + category.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-danger me-1"
                            to={"/admin/category/trash/" + category.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
                        <td>{category.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Category;
