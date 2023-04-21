import React, { useState } from "react";
import axios from "axios";
import Quote from "./Quote";


function QuoteApp() {
  const [quote, setQuote] = useState("");

  async function getQuote() {
    const result = await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random");
    console.log(result);
    setQuote(result.data.quote.text);
  }


  return (
    <div className="Quote">
      {/* <div>{quoteText}</div> */}
      <Quote quoteText={quote} />
      <button onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default QuoteApp;