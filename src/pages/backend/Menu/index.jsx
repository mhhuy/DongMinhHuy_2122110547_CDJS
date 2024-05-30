import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";

const Menu = () => {
  const menus = database.Menus;
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [table_id, setTableId] = useState(0);
  const [type, setType] = useState("");
  const [status, setStatus] = useState(2);
  //Ham handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Banner);
  };

  const Banner = {
    name: name,
    link: link,
    table_id: table_id,
    type: type,
    status: status
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lí Menu</strong>
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
                <label htmlFor="name">Tên Menu</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="table_id">Nhóm cha</label>
                <select className="form-select" id="table_id" value={table_id}
                  onChange={(e) => setTableId(e.target.value)}>
                  <option value="0">None</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  id="link"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="type">Loại menu</label>
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  id="type"
                  className="form-control"
                />
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
                {menus &&
                  menus.length > 0 &&
                  menus.map((menu) => {
                    return (
                      <tr key={menu.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={menu.image} alt={menu.image} />
                        </td>
                        <td>{menu.name}</td>
                        <td>{menu.position}</td>
                        <td>{menu.link}</td>
                        <td>{menu.id}</td>
                        <td>
                        <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/category/edit/" + menu.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-danger me-1"
                            to={"/admin/category/trash/" + menu.id}
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

export default Menu;