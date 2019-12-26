import React from "react";
import "./search.css";

class Search extends React.Component{

state = {
    city: ""
};


GetCity = e => {
  //console.log("city", e.target.value)
    this.setState({
      city: e.target.value
      
    });
  };



onSubmit = e => {
    e.preventDefault();
    const {city} = this.state;
    this.props.gCity(city);
   //console.log("city",this.state )
  };


render ()   { 
  return (


    <div className="row d-flex ">
      <form onSubmit={this.onSubmit} action="" className="col-12 offset-2 ">
      <div className="col-7">
        <div className="panel panel-default">
          <div className="panel-body p-t-0">
            <div  className="input-group">
              <input 
                type="text"
                id="example-input1-group2"
                name="example-input1-group2"
                className="form-control"
                placeholder="Sity"
               onChange={this.GetCity}
              />
              <span className="input-group-btn">
                <button
                  type="submit"
                  className="btn btn-effect-ripple btn-success"
                  
                  
                >
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
}

export default Search;
