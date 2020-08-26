import React from "react";
import Header from "../header";
import ListItem from "../Todolist/ListItem";

function MainPage(props) {
  console.clear();

  
  return (
    <div>
      <Header />
      <ListItem />
    </div>
  );
}

export default MainPage;
