import React from "react";

const TrafficLight = () => {

  const changeColor = (event) => {
    const allColors = document.getElementsByClassName("traffic-light")[0].children

    for (let i = 0; i < allColors.length; i++){
      if (allColors[i].id == event.target.id) {
        allColors[i].style.opacity="1"
      } else {
        allColors[i].style.opacity=""
      }
    }
  }

  return (
    <div className="traffic-light">
      {Array.of("red", "yellow", "green").map((item, index) => {
        return (
          <span
            className="lights-item"
            key={index}
            id={item}
            style={{ background: item }}
            onClick={changeColor}
          >
          </span>)
      })}
    </div>
  )
}

export default TrafficLight