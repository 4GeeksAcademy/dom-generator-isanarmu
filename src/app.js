import "bootstrap";
import "./style.css";

window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['planet', 'wolves'];
  const domains = ['com', 'es', 'dev', 'io', 'net'];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let d of domains) {
          console.log(p + a + n + "." + d)
        }
      }
    }

  }
};
