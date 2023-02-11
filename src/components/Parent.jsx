import React, { useContext, useState } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
  const {count} = useContext(COUNTER_CONTEXT)
  return (
    <div class="">
      <div className="parrent">
        <h1>{count} <small>Parrent</small></h1>
        {/* <div>
          <button onClick={() => setcount(count - 1)} className="btn_1">
            Decrement
          </button>
          <button
            onClick={() => setcount((prevState) => prevState + 1)}
            className="btn_2"
          >
            Increment
          </button>
        </div> */}
      </div>
      <div>
        <Child />
      </div>
    </div>
  );
};

export default Parent;
