import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";

const Post = () => {
  const posts = database.Posts;
  //Khai báo các state lưu trữ
  const [tittle, setTittle] = useState("");
  const [topic_id, setTopicId] = useState(0);
  const [detail, setDetail] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
  //Ham handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Category);
  };

  const Category = {
    tittle: tittle,
    topic_id: topic_id,
    detail: detail,
    type: type,
    description: description,
    status: status
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lí Post</strong>
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
                <label htmlFor="topic-id">Chủ đề cha</label>
                <select className="form-select" id="topic-id" value={topic_id}
                  onChange={(e) => setTopicId(e.target.value)}>
                  <option value="0">None</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="tittle">Tiêu đề</label>
                <input
                  type="text"
                  value={tittle}
                  onChange={(e) => setTittle(e.target.value)}
                  id="tittle"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="detail">Chi tiết</label>
                <input
                  type="text"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  id="detail"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="type">Loại bài viết</label>
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  id="type"
                  className="form-control"
                />
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
                {posts &&
                  posts.length > 0 &&
                  posts.map((post) => {
                    return (
                      <tr key={post.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={post.image} alt={post.image} />
                        </td>
                        <td>{post.name}</td>
                        <td>{post.position}</td>
                        <td>{post.link}</td>
                        <td>{post.id}</td>
                        <td>
                        <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/category/edit/" + post.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-danger me-1"
                            to={"/admin/category/trash/" + post.id}
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

export default Post;