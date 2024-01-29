import axios from 'axios';
import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { baseURL } from '../utiles/constant';

const List = ({ id, task, setUpdateUI, updateMode }) => {
  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const editTask = () => {
    updateMode(id);
  };

  return (
    <li>
      <div className="container mt-5" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        <div>
          <p>ID: {task.productId}</p>
          <p>Name: {task.productName}</p>
          <p>Description: {task.productDiscription}</p>
          <p>Price: {task.productPrice}</p>
        </div>
        <BiEditAlt className='icon1' onClick={editTask} />
        <FaTrash className='icon2' onClick={removeTask} />
      </div>
    </li>
  );
};

export default List;
