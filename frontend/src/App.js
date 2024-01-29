import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import List from './components/List';
import { baseURL } from './utiles/constant';

const App = () => {
  const [id, setId] = useState(1);
  const [name, setName] = useState("phone");
  const [discription, setDiscription] = useState("E");
  const [price, setPrice] = useState(1200);
  const [tasks, setTasks] = useState([{}]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, [updateUI]);

  const addTask = (e) => {
    e.preventDefault();

    const taskData = {
      productId: id,
      productName: name,
      productDiscription: discription,
      productPrice: price,
    };

    if (updateId) {
      axios.put(`${baseURL}/update/${updateId}`, taskData, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => {
          console.log(res.data);
          setUpdateId(null);
          setId("");
          setName("");
          setDiscription("");
          setPrice("");
          setUpdateUI((prevState) => !prevState);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      axios.post(`${baseURL}/save`, taskData, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => {
          console.log(res.data);
          setId("");
          setName("");
          setDiscription("");
          setPrice("");
          setUpdateUI((prevState) => !prevState);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const updateMode = (id) => {
    setUpdateId(id);

    const selectedTask = tasks.find(task => task._id === id);

    setId(selectedTask.productId);
    setName(selectedTask.productName);
    setDiscription(selectedTask.productDiscription);
    setPrice(selectedTask.productPrice);
  };

  return (
    <div>
      <div className="container mt-5" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        <form onSubmit={addTask}>
          <div className="mb-3">
            <label htmlFor="productId" className="form-label">
              Product ID
            </label>
            <input
              type="text"
              className="form-control"
              id="productId"
              name="productId"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="productDescription"
              name="productDescription"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              name="productPrice"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" >
            Save
          </button>
        </form>
      </div>
      <ul>
        {
          tasks.map((task) => (
            <List
              key={task._id}
              id={task._id}
              task={task}
              setUpdateUI={setUpdateUI}
              updateMode={updateMode}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default App;
