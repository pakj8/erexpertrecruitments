import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function ChallengesCard(props) {
  return (
    <div className="challenge-section text-center text-light">
      <div
        style={{
          width: "15rem",
          height: "11rem",
          borderRight: "none",
        }}
        className="card cardContainer bg-dark"
      >
        <motion.div whileHover={{ scale: 1.1 }} className="face bg-dark">
          <div className="face-inner">
            <Image
              className="challenge-img"
              src={props.images}
              width={100}
              height={100}
              alt={props.alt}
            />
            <h3>{props.name}</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ChallengesCard;
