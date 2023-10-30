import quotes from '../data/data';
import React, { useState } from 'react';

const Box = () => {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * 32)]);
  const [color, Setcolor] = useState(
    `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
  );

  const handleNext = () => {
    setQuote(quotes[Math.floor(Math.random() * 32)]);
    let buttonColor = document.querySelector('#root');
	// !!! root elementine butun komponentler oturulmelidir
// !!! index js de secilir
    Setcolor(
      `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`
    );
    buttonColor.style.backgroundColor = color;
    document.querySelector('.quote').classList.add('animate');
	// !!! class attribute unu deyismek ucun onu state e menimsetmek lazimdir ve ya useref hookdan istifade etmek
	// ! react zamani document query selector istifadesi duzgun praktika deyil
    console.log();
  };

  return (
    <div className="container">
      <h2 className="quote">"{quote.quote}"</h2>
      <p className="author">-{quote.author}-</p>
      <button className="nextQuote" onClick={handleNext}>
        New quote
      </button>
    </div>
  );
};

export default Box;
