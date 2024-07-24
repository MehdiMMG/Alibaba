import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <div className='question__container'>
        <h4 className='question__container--title'><MdOutlineQuestionMark className='question__container--logo'/>{title}</h4>
        <button className='question__container--btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {showInfo && <p className='question__container--p'>{info}</p>}
    </article>
  );
};

export default Question;
