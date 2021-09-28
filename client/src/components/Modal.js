// import React, { useRef, useEffect, useCallback, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// // import { MdClose } from 'react-icons/md';

import "./rpgui.css";
// import "./Modal.scss"

// export const Modal = ({ showModal, setShowModal }) => {
//   const [goal, setGoal] = useState("");

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//   };
  
//   const modalRef = useRef();

//   const animation = useSpring({
//     config: {
//       duration: 250
//     },
//     opacity: showModal ? 1 : 0,
//     transform: showModal ? `translateY(0%)` : `translateY(-100%)`
//   });

//   const keyPress = useCallback(
//     e => {
//       if (e.key === 'Escape' && showModal) {
//         setShowModal(false);
//         console.log('I pressed');
//       }
//     },
//     [setShowModal, showModal]
//   );

//   useEffect(
//     () => {
//       document.addEventListener('keydown', keyPress);
//       return () => document.removeEventListener('keydown', keyPress);
//     },
//     [keyPress]
//   );

//   return (
//     <>
//       {showModal ? (
//         <>
//         <form onSubmit={handleSubmit}>
//         <script src="http://yourjavascript.com/1393205217/rpgui-copy.js"></script>
//         <div className="Modal">
//           <div className="rpgui-content">
//             <div className="rpgui-container framed add-goal-modal">
//               <h1>Next Goal</h1>
//               <hr />
//               <label>Goal:</label>
//               <input type="text" name="goal" value={goal} autoComplete="off" onChange={(e) => setGoal(e.target.value)} />
//               <br/><br/>
//               <textarea name="description" rows="4" cols="50" placeholder="Goal Description"></textarea>
//               <br/><br/>
//               <label>Select the type:</label>
//               <select className="rpgui-dropdown" name="goal-type">
//                 <option value="Daily" selected>Daily Task</option>
//                 <option value="Mission">Mission</option>
//                 <option value="Quest">Quest</option>
//               </select>
//               <input className="rpgui-checkbox golden" type="checkbox" value="1" name="strength"/><label>STR&nbsp;</label>
//               <input className="rpgui-checkbox golden" type="checkbox" value="1" name="vitality" /><label>VIT&nbsp;</label>
//               <input className="rpgui-checkbox golden" type="checkbox" value="1" name="knowledge" /><label>KNO&nbsp;</label>
//               <input className="rpgui-checkbox golden" type="checkbox" value="1" name="social" /><label>SOC&nbsp;</label>
//               <input className="rpgui-checkbox golden" type="checkbox" value="1" name="willpower" /><label>WIL</label>
//               <br />
//               <br />
//               <div className="rpgui-center">
//               <button className="rpgui-button" type="submit">
//                 <p className="button-text">Enter</p>
//               </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         </form>
//         </>
//       ) : null}
//     </>
//   );
// };

import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./Modal.scss";

const Modal = ({ show, close }) => {
  const [goal, setGoal] = useState("");

const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
}

useEffect(() => {
  const script = document.createElement('script');

  script.src = "http://yourjavascript.com/1393205217/rpgui-copy.js";
  script.async = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  }
}, []);

  // return (
    return ReactDom.createPortal(
    <>
     {
     show ?
     
      <div
        className="modal-container"
        onClick={() => close()}
      >

        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <main className="modal_content">
            <form onSubmit={handleSubmit}>
              <div className="Modal">
                <div className="rpgui-content">
                  <div className="rpgui-container framed add-goal-modal">
                    <h1>Next Goal</h1>
                    <hr />
                    <label>Goal:</label>
                    <input type="text" name="goal" value={goal} autoComplete="off" onChange={(e) => setGoal(e.target.value)} />
                    <br/><br/>
                    <textarea name="description" rows="4" cols="50" placeholder="Goal Description"></textarea>
                    <br/><br/>

                    <label>Select the type:</label>
                    <select className="rpgui-dropdown" name="goal-type">
                      <option value="Daily" selected>Daily Task</option>
                      <option value="Mission">Mission</option>
                      <option value="Quest">Quest</option>
                    </select>

                    <input className="rpgui-checkbox golden" type="checkbox" value="1" name="strength"/><label>STR&nbsp;</label>
                    <input className="rpgui-checkbox golden" type="checkbox" value="1" name="vitality" /><label>VIT&nbsp;</label>
                    <input className="rpgui-checkbox golden" type="checkbox" value="1" name="knowledge" /><label>KNO&nbsp;</label>
                    <input className="rpgui-checkbox golden" type="checkbox" value="1" name="social" /><label>SOC&nbsp;</label>
                    <input className="rpgui-checkbox golden" type="checkbox" value="1" name="willpower" /><label>WIL</label>
                    <br />
                    <br />

                    <div className="rpgui-center">
                      <button className="rpgui-button" type="submit">
                        <p className="button-text">Enter</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
      : null
    }
    </>,
        document.getElementById("modal")

  );
};

export default Modal;