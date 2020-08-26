import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Redirect, useHistory } from "react-router-dom";
import Create from "./Create";

Search.propTypes = {
  onSubmit: PropTypes.func,
};

Search.defaultProps = {
  onSubmit: null,
};

function Search(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typing = useRef(null);

  function handleSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typing.current) {
      clearTimeout(typing.current);
    }

    typing.current = setTimeout(() => {
      const formValues = { searchTerm: value };
      onSubmit(formValues);
    }, 300);
  }
  let history = useHistory();

  function handleCreate() {
    history.push("/create");
  }
  
  return (
      <div>
        <form className="form-inline">
          <div className="form-group col-8">
            <label className="sr-only">Search</label>
            <input
              type="text"
              className="form-control col-12"
              value={searchTerm}
              onChange={handleSearch}
              id=""
              placeholder="Search..."
            />
          </div>
          <button 
          onClick={()=>handleCreate()}
          className="btn btn-primary col-2">Create</button>
        </form>
      </div>
  );
}

export default Search;
