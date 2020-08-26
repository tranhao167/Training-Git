import React from "react";
import PropTypes from "prop-types";

Detail.propTypes = {
  todetails: PropTypes.array,
};
Detail.defaultProps = {
  todetails: [],
};

function Detail(props) {
  const detail = props.todetails.map((todetail) => (
    <form key={todetail.id}>
      <legend>Details</legend>

      <div className="form-group">
        <label for=""></label>
        <div>
          <img src={todetail.ImageMain} alt=""/>
        </div>
        <div>{todetail.content}</div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  ));
  return <div>{detail}</div>;
}

export default Detail;
