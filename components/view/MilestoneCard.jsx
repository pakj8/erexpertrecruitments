import React, { useRef, useState, useEffect } from "react";

const MilestoneCard = ({ start, end, text = "", timer = 10 }) => {
  const [state, setState] = useState(null);
  const ref = useRef(start);

  const accumlator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumlator);
      if (result > end) {
        return setState(end);
      } else {
        setState(result);
        ref.current = result;
      }
    }
    setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    const isMounted = true;
    if (isMounted) {
      {
        updateCounterState();
      }
    } else {
      return () => (isMounted = false);
    }
  }, [end]);
  return (
    <div
      style={{ width: "20rem", height: "12rem" }}
      className="card bg-light border-danger milestone-card"
    >
      <div className="card-title">
        <h2 className="text-center">{state}</h2>
      </div>
      <div className="card-body">
        <h4 className="card-text">{text}</h4>
      </div>
    </div>
  );
};

export default MilestoneCard;
