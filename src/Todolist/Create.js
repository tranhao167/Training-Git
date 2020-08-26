import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../header";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

Create.propTypes = {
  onsubmit: PropTypes.func,
};
Create.defaultProps = {
  onsubmit: null,
};

function Create(props) {
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("1");
  let back=useHistory();
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeCategory(e) {
    setCategory(e.target.value);
  }
  function handleSubmit(e) {
    const notify = () => toast("Wow, an Item has been created!");
    e.preventDefault();
    Axios({
        method: 'POST',
        url: `https://localhost:44367/api/Item`,
        data: {
            ItemName: name,
            CategoryID: Category
        }
    }).then(res => {
        notify();
        back.push("/")
    }
    ).catch(err=>{
        alert(err)
    })
  }
  return (
    <div>
      <Header />
      <div style={{ justifyContent: "center" }}>
        <h2>CREATE NEW ITEM</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <select
            className="form-control"
            onChange={handleChangeCategory}
            value={Category}
          >
            <option value="1">Shirts</option>
            <option value="2">Shoes</option>
            <option value="3">Jacket</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
