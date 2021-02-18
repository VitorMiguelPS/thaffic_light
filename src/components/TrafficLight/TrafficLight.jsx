import React from "react";

const TrafficLight = () => {

  const changeColor = (event) => {
    if (event.target.className.indexOf("actived") > 0) {
      event.target.className = "lights-item"
    } else {
      const allColors = document.getElementsByClassName("traffic-light")[0].children

      for (let i = 0; i < allColors.length; i++) {
        allColors[i].id == event.target.id
          ? allColors[i].className = "lights-item actived"
          : allColors[i].className = "lights-item"
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