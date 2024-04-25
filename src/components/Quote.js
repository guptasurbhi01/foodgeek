import React from "react";
import quote from "./quotes.css";
const QuoteCard = ({ quote, author }) => {
  return (
    <div className="m-24">
      <div class=" one">
        <h5 class="two">{quote}</h5>
        <p class="three">{author}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
