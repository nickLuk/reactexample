import React from "react";
import "./TerminalItem.css";

class TerminalItem extends React.Component {
    state={
      type: this.props.type,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      fullAddressUa: this.props.fullAddressUa,
      placeUa: this.props.placeUa,
      cityUA: this.props.cityUA,
      


    };



    getCoordinates (latitude, longitude){
      //console.log ("ccc", longitude, latitude)
      this.props.getChoiceCoordinates(latitude, longitude);
  }
    render(){
        const {type, latitude, longitude,fullAddressUa, placeUa, cityUA } = this.state;
        
      
        return(
            //<h4>{fullAddressUa}</h4>

            <div className="row d-flex justify-content-center">
            <div className="col-7 ">
              <div className="panel">
                <div
                  //className={borderStyle}
                 // onMouseEnter={this.SetBorderPrint}
                 // onMouseLeave={this.DelBorderPrint}
                >
                  <div className="row media-main">
                    <div className="col-3 p-t-10 text-center one">
                      <p >Тип терміналу</p>
                      <p className="fff text-center">{type}</p>
                    </div>
                    <div className="col-3 p-t-10 text-center  two">
                    <p>Розміщення</p>
                      <p className="fff text-center">{placeUa}</p>
                    </div>
                    <div className="col-4 p-t-10   text-center three">
                    <p>Адреса</p>
                      <p className="fff text-center">{fullAddressUa}</p>
                    </div>
                    <div className="col-2 p-t-10   text-center four">
                    <p>На карті</p>
                    <button onClick={() => this.getCoordinates(longitude, latitude)} type="button" className="btn btn-effect-ripple btn-primary">Show in map</button>
                    </div>
                    
                  



                  </div>
                  <div className="clearfix">
                    <hr />
                    
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
        )

    }
}
export default TerminalItem;
