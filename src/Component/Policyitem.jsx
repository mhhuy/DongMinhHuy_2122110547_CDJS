import React from "react";

const Policyitem = (props) => {
    const image = props.image;
    const tittle = props.tittle;
    const desc = props.desc;
  return (
    <div className=" policy">
      <div className="row">
        <div className="img-policy col-md-2">
          <img src={image} className="img-fluid py-0 m-0" />
        </div>
        <div className="col-md-10">
          <p className="m-0 py-0">
            <strong>{tittle}</strong>
          </p>
          <p className="m-0 py-0">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Policyitem;
