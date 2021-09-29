import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import './Quotes.scss'

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <article id="quotes-bar">
      <button onClick={() => setOpen(!open)} className="new-goal-button">
        {/* <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/8be157fc744cf39.png" className="exclamation"/> */}
        <i class="nes-octocat animate"></i>
      </button>
      <div style={{minHeight: '150px'}}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{width: '500px'}} className="card-body-quote">
            <div class="nes-balloon quote from-left">
              <p>
              <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/cda4060eb29c5b0.png" className="quote-shuffle-button" />
                &nbsp;
                This is an 8-Bit website! You are awesome :) Keep rocking! This is an 8-Bit website! You are awesome :) Keep rocking! 
                This is an 8-Bit website! You are awesome :) Keep
              </p>
            </div>
            </Card>
          </div>
        </Collapse>
      </div>
    </article>
  );
}