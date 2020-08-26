import React, { useState, useEffect } from "react";
import querystring from "querystring";
import Search from "./Search";
import Axios from "axios";
import { toast } from 'react-toastify';

export default () => {
  const [item, setItem] = useState([]);
  const [pageNumber, setpagi] = useState(1);
  const [totalPage, setTotal] = useState();
  const [filter, setfilter] = useState({
    pageNumber: 1,
    QuerySearch: "",
  });
  useEffect(() => {
    async function fetchdata() {
      try {
        const params = querystring.stringify(filter);
        const reqUrl = `https://localhost:44367/api/Item?${params}`;
        const res = await fetch(reqUrl);
        const resJson = await res.json();
        setItem(resJson.paginationMetadata.data);
        setTotal(resJson.paginationMetadata.totalPages);
      } catch (error) {
        console.log("Error", error.message);
      }
    }
    fetchdata();
  }, [filter]);

  function handlePage(newPage) {
    setfilter({
      ...filter,
      pageNumber: newPage,
    });
    setpagi(newPage);
  }

  function handleFilterSearch(newFilter) {
    setfilter({
      ...filter,
      pageNumber: 1,
      QuerySearch: newFilter.searchTerm,
    });
  }

  function handleDel(itemDel) {
    const notify = () => toast.error("Deleted!");
    Axios({
      method: 'DELETE',
      url: `https://localhost:44367/api/Del?id=${itemDel}`
    }).then(res => {
      if (res.status === 200) {
        var index = item.findIndex(x=>x.ItemID===itemDel);
        if(index<0) return;
        const newList= [...item];
        newList.splice(index,1);
        setItem(newList);
        notify();
      }
    }).catch(error=>{
      alert(error)
    });
  }
  return (
    <div>
      <Search onSubmit={handleFilterSearch} />
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {item.map((items) => (
            <tr key={items.ItemID}>
              <td>{items.ItemName}</td>
              <td>{items.CategoryName}</td>
              <td><button className="btn btn-success">Details</button>II  
                <button className="btn btn-warning" onClick={()=>handleDel(items.ItemID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          disabled={pageNumber <= 1}
          onClick={() => handlePage(pageNumber - 1)}
        >
          Prev
        </button>

        <button
          disabled={pageNumber >= totalPage}
          onClick={() => handlePage(pageNumber + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
