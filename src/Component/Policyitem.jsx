import React from "react";

const Policyitem = (props) => {
    const image = props.image;
    const tittle = props.tittle;
    const desc = props.desc;
  return (
    <div>
      <div className="row">
        <div className="image-policy col-md-4">
          <img src={image} className="img-fluid py-0 m-0" />
        </div>
        <div className="col-md-8">
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
