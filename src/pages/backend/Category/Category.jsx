import React from "react";
import useState from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";

const Category = () => {
    
    const categorys = database.Categorys;

    //Khai báo các state lưu trữ
    const [name, setName] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(2);
    //Ham handleSubmit
    const handleSubmit = (e) => {
    e.preventDefault();
    //Lưu vào CSDL
    console.log("Nhấn Submit");
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
    </div>
  );
};

export default Category;
