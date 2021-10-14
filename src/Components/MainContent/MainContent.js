import React, { useState } from "react";
import { connect } from "react-redux";
import { mainReducer } from "../Reducers/mainReducer";
import "./MainContent.css";

function MainContent(props) {

  const getFilling = () => {
    const { salad, tomato, cheese, meat } = props.data;
    console.log('salad',salad)
    let content = [];
    for (let i = 0; i < salad; i++) {
      content.push(<div className="salad" />);
    }
    for (let i = 0; i < tomato; i++) {
        content.push(<div className="tomato" />);
      }
      for (let i = 0; i < cheese; i++) {
        content.push(<div className="cheese" />);
      }
      for (let i = 0; i < meat; i++) {
        content.push(<div className="meat" />);
      }
    return content;
  };

  return (
    <div className="main-content">
      <div className="burger">
        <div className="burger-top" />

        {getFilling()}

        <div className="burger-bottom"/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.mainReducer,
  };
};

export default connect(mapStateToProps, null)(MainContent);
