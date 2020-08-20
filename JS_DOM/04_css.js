let log = console.log;

// systax
// document.getElementById(id).style.property= new style

// get element of an array by id
let p2 = document.getElementsByTagName("p")["p2"];
p2.style.color = "red";

// some usual event
// an element clicked on
// the page has loaded
// input fields are changed

let lickme = document.getElementsByTagName("button")["lickme"];
lickme.onclick = (e) => {
  p2.style.visibility = "hidden";
};

// visibility
let lickme2 = document.getElementsByTagName("button")["lickme2"];
lickme2.onclick = (e) => {
  p2.style.visibility = "visible";
};
