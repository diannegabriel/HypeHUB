import axios from "axios";
import { useState, useEffect } from "react";

//Original state before load.
let id = {};
//Do not export this func.
const setId = (newId) => {
  id = {
    ...id,
    ...newId,
  };
}

export default function useId() {
  
function setIdOnLogIn(){
// call axios route to check credentials
//create route
}  
if(true){
  //billiesId ----> this will become id returns from db (axios call)
  if(!id.id){

    setId({ 
      id: "614de5c4646237d2b991f65c" 
    })
  }
    //Set cookie...
console.log(`====== ID: ${JSON.stringify(id)}`)
  }





  return {
    id,
    setIdOnLogIn
  }
}  