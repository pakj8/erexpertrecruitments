import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MilestoneCard = ({ start, end, text = "", timer = 100 }) => {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end]);
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="card bg-light mt-5 border-info milestoneCard"
    >
      <div className="card-body">
        <h2 className="text-center text-title">{state}</h2>

        <h6 className="card-text text-start">{text}</h6>
      </div>
    </motion.div>
  );
};

export default MilestoneCard;
