import React from "react";

function Quote({ quoteText }) {
  return (
    <div className="Quote">
      <div>{quoteText}</div>
    </div>
  );
}

export default Quote;