import React, { useState } from 'react';
import data from '../data/data';
import SingleQuestion from './Question';
import "../styles/main.scss"

const QandA = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <section className='questions'>
        <h3 className='questions__title'>پرسش های شما</h3>
        <div className='Container'>
            <section className='info'>
              {questions.map((question) => {
                  return (
                  <SingleQuestion key={question.id} {...question}></SingleQuestion>
                  );
              })}
            </section>
        </div>
    </section>
  );
}

export default QandA