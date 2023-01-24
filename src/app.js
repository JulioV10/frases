/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".org"];

  for (let i = 0; i < pronoun.length; i++) {
    // console.log(pronoun[i]);
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < ext.length; m++) {
          let frases = pronoun[i] + "." + adj[j] + "." + noun[k] + ext[m];
          console.log(frases);
        }
        // document.getElementById("phrase").innerHTML = frases;
      }
    }
  }
};
