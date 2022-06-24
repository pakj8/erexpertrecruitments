import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { FiPlus } from "react-icons/fi";

function FaqBar(props) {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccording = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="app">
        <div>
          <button
            style={{ width: "50rem" }}
            className={`question-section ${active}`}
            onClick={toggleAccording}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">{props.question}</h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                ></FiPlus>
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <h5>{props.answer}</h5>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default FaqBar;
