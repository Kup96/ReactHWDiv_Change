import React, { useState } from 'react';

function Input(props){
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [color, setColor] = useState('');


    const setWidth2 = ({target: {value}}) => {
        setWidth(value);
    };
    const setHeight2 = ({target: {value}}) => {
        setHeight(value);
    };
    const setColor2 = ({target: {value}}) => {
        setColor(value);
    };


    const divStyle = {
        width: width + "px",
        height: height + "px",
        backgroundColor: color,
    };

    return (
      <form>
          <input type="text" name="width" value={width} onChange={setWidth2} placeholder="width"></input>
          <input type="text" name="length" value={height} onChange={setHeight2} placeholder="height"></input>
          <input type="text" name="color" value={color} onChange={setColor2} placeholder="Color"></input>  
          <div style = {divStyle}></div>
      </form>
    );
  }

export default Input;


