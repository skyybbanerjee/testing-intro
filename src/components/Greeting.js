import React, { useState } from "react";
import OutPut from "./OutPut";
//dummy component

function Greeting() {
  const [changedTxt, setChangedTxt] = useState(false);
  function changeTxtHandler() {
    setChangedTxt(true);
  }
  return (
    <div>
      <h2>Hello World</h2>
      {!changedTxt && <OutPut>Great to see ya!</OutPut>}
      {changedTxt && <p>Changed!</p>}
      <button onClick={changeTxtHandler}>Change Text</button>
    </div>
  );
}

export default Greeting;
