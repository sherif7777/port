import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { name, id, price,onSale,count } = this.props.prod;
    const deleteProduct = this.props.del;
    const updateCount = this.props.upd;
    
    return (
      <>
        <div className="col-md-3">
          <div className="inner bg-body-secondary p-2 position-relative ">
            <h5>Name: {name}</h5>
            <h5>Price: {price}</h5>
            <h5>Id: {id}</h5>
            <h5>Count: {count}</h5>
            {onSale?<span className="position-absolute end-0 top-0 bg-info p-2">Sale </span>:""}
            <button onClick={function(){deleteProduct(id)}} className="btn  btn-outline-danger w-100">Delete</button>
            <button onClick={()=>{updateCount(this.props.prod)}} className="btn  btn-outline-danger w-100">+</button>
          </div>
        </div>
      
      </>
    );
  }
}
