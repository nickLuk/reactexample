import React, { Fragment } from "react";
import "./TerminalList.css";
import TerminalItem from "./TerminalItem/TerminalItem";
import Search from "../SearchComponent/search";
import Map from "../MapComponent/maps";

const TerminalList = ({ TerminalList, getChoiceCoordinates}) => {
  //console.log("Terminal List ", TerminalList);
  const listItem = TerminalList.map(item => {
    return (
      <TerminalItem
      type={item.type}
      latitude={item.latitude}
      longitude={item.longitude}
      fullAddressUa={item.fullAddressUa}
      placeUa={item.placeUa}
      cityUA={item.cityUA}
      getChoiceCoordinates={(latitude, longitude) =>   getChoiceCoordinates  (latitude, longitude) }
      ></TerminalItem>
    );
  });

  return (
    <Fragment>
      
      <h2 className="col-7 d-flex justify-content-center"> TerminaltList</h2>

      {listItem}

      <button> Show more </button>
    </Fragment>
  );
};

export default TerminalList;
