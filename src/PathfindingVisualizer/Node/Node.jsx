import React from "react";

import "./Node.css";


const Node = ({
  col,
  isFinish,
  isStart,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  row,
}) => {


  let extraClassName = "";
  if (isFinish) {
    extraClassName = "node-finish"
  }
  else if(isWall) {
    extraClassName = "node-wall"
  }
  else if(isStart) {
    extraClassName = "node-start"
  }

  return <div id={`node-${row}-${col}`}
  className={`node ${extraClassName}`}
  onMouseDown={() => onMouseDown(row, col)}
  onMouseEnter={() => onMouseEnter(row, col)}
  onMouseUp={() => onMouseUp()}></div>;
};

// END PART 3

export default Node;
