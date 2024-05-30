import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Database from "../../../database.json";

const User = () => {
  const uses = Database.Users;
  //Khai báo các state lưu trữ
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState("");
  const [status, setStatus] = useState(2);
  //Ham handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Category);
  };

  const Category = {
    name: name,
    email: email,
    phone: phone,
    username: username,
    password: password,
    address: address,
    roles: roles,
    status: status
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <div className="row">
          <div className="col-md-6">
            <strong>Quan ly danh muc</strong>
          </div>
          <div className="col-md-6 text-end" >
            <Link to="/" className='btn btn-sm btn-danger'><FaTrash />thung rac</Link>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <div className="row">
        <div className="col-md-5">
        <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Tên Người dùng</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username">Tên đăng nhập</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  id="username"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  className="form-control"
                />
              </div>
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
                <label htmlFor="roles">Tính năng</label>
                <input
                  type="text"
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                  id="roles"
                  className="form-control"
                />
              </div>
              
              <div className="mb-3 text-end">
                <button className="btn btn-success px-5">Lưu</button>
              </div>
            </form>
        </div>
        <div className="col-md-7">
          <table className='table table-bordered table-hoved'>
            <thead>
              <tr>
                <th>#</th>
                <th>hinh</th>
                <th>ten danh muc</th>
                <th>slug</th>
                <th className='text-center' style={{width:"150px"}}>chuc nang</th>
                <th className='text-center' style={{width:"50px"}}>id</th>
              </tr>
            </thead>
            <tbody>
              {uses && uses.length>0 && uses.map(use=>{
                return( 
                    <tr key={use.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td><img src={use.image} alt={use.image} /></td>
                  <td>{use.name}</td>
                  <td>{use.slug}</td>
                  <td className='text-center'>
                    <Link className='btn btn-sm btn-info me-1' to={"/admin/use/edit/"+use.id}><FaEdit /></Link>
                  <button className='btn btn-sm btn-danger me-1'><FaTrash /></button>
                  </td>
                  <td>{use.id}</td>
                </tr>

                ) 
              })}
             
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User
