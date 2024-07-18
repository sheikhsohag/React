import { useState } from "react";

const Colorizer = () => {
    const [color,setColor]=useState('#6d0e0e');


    const newColors = () => {
        // Generate a random color
        const newColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        return newColor;
      };

    const changeColor = ()=>{
        
        setColor(newColors);
    }

    return (
        <div className="colorizer">
           <div className="box" style={{backgroundColor:color}}>
           
            </div>
           <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default Colorizer;