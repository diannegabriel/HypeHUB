import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import "./Quotes.scss";

export default function Quotes(props) {
  const [open, setOpen] = useState(false);
  console.log("quotes props", props);
  let { quote, shuffleQuote } = props;
  return (
    <article id='quotes-bar'>
      <button onClick={() => setOpen(!open)} className='new-goal-button'>
        {/* <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/8be157fc744cf39.png" className="exclamation"/> */}
        <i className='nes-octocat animate'></i>
      </button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension='width'>
          <div id='example-collapse-text'>
            <Card body style={{ width: "500px" }} className='card-body-quote'>
              <div className='nes-balloon quote from-left'>
                <blockquote>
                  <img
                    src='https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/cda4060eb29c5b0.png'
                    className='quote-shuffle-button'
                    alt='Small arrow'
                    onClick={shuffleQuote}
                  />
                  &ldquo;
                  {quote.q ? quote.q : quote.quote}
                  &rdquo; &mdash;
                  <footer>{quote.a ? quote.a : "Kanye West"}</footer>
                </blockquote>
              </div>
            </Card>
          </div>
        </Collapse>
      </div>
    </article>
  );
}
