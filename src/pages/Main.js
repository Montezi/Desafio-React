import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { FaPencilAlt, FaTrash, FaPlus } from 'react-icons/fa';

import './Main.css';

import api from '../services/api';

// import { Container } from './styles';

export default function Main({ history }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');
      const data = response.data.map(user => ({
        ...user,
      }));
      setUsers(data);
    }
    loadUsers();
  }, []);

  function handleAddUser() {
    history.push('/new');
  }
  return (
    <div className="main-container">
      <MDBTable className="table table-bordered">
        <MDBTableHead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button type="button" onClick={() => handleAddUser(user.id)}>
                  <FaPencilAlt color="#FFF" size={14} />
                </button>
                <button type="button" onClick={() => handleAddUser(user.id)}>
                  <FaTrash color="#FFF" size={14} />
                </button>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <button type="button" onClick={() => handleAddUser()} className="plus">
        <FaPlus color="#FFF" size={20} />
      </button>
    </div>
  );
}
