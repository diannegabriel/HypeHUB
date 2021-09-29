import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import "./Quotes.scss";

const shuffleQuote = () => {};

export default function Quotes(props) {
  const [open, setOpen] = useState(false);
  console.log("quotes props", props);
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
                  />
                  &ldquo;{props.quote.q}&rdquo; &mdash;
                  <footer>{props.quote.a}</footer>
                </blockquote>
              </div>
            </Card>
          </div>
        </Collapse>
      </div>
    </article>
  );
}
