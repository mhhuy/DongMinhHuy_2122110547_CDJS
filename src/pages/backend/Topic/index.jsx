import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import database from "../../../database.json";
import { useState } from "react";

const Topic = () => {
    const topics = database.Topics;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(2);

    const handleSubmit = (e) => {
        e.preventDefault();
        const topic = {
        name,
        description,
        status,
        };
        console.log(topic);
    };
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <h5>Thêm topic</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="d-inline-block mb-2">
                Tên
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="description" className="d-inline-block mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="d-inline-block mb-2">
                Trạng thái
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="form-select"
              >
                <option value="1">Xuất bản</option>
                <option value="2">Chưa xuất bản</option>
              </select>
            </div>
            <div className="mb-2">
              <button
                type="submit"
                className="btn btn-info"
                style={{ width: "90px" }}
              >
                Thêm
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-9">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="text-capitalize">
                <th className="text-center">#</th>
                <th className="text-center">id</th>
                <th>Tên</th>
                <th>Slug</th>
                <th>Description</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {topics &&
                topics.length > 0 &&
                topics.map((topic) => (
                  <tr key={topic.id}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">{topic.id}</td>
                    <td>{topic.name}</td>
                    <td>{topic.slug}</td>
                    <td>{topic.description}</td>
                    <td style={{ width: "15%" }}>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <Link
                          to={`/admin/topic/edit/${topic.id}`}
                          className="btn btn-info text-white"
                        >
                          <FaRegEdit />
                        </Link>
                        <button className="btn btn-danger text-white">
                          <CiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Topic;
