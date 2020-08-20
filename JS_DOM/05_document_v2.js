let log = console.log;

// active element

function learnActiveElement() {
  let body = document.body;
  body.style.minHeight = "100vh";
  function activeEle() {
    let active__ele = document.activeElement.tagName;

    log(active__ele);
    let demo = document.getElementById("demo");

    demo.innerHTML = active__ele;
  }

  body.onclick = (e) => {
    activeEle();
  };
}

// add event listener
// syntax - document.addEventListener(event,function,useCapture)
function learAddEventListener() {
  let body = document.body;
  function randomNumber(e) {
    let random__number = Math.random();
    let rander = document.getElementById("random");
    rander.innerHTML = random__number;
  }

  // remove the event handler from the document
  function cancelHanler() {
    body.removeEventListener("mouseover", randomNumber);
  }

  // attach an event handler to the document
  body.addEventListener("mouseover", randomNumber);

  let remove__handler = document.getElementById("remove__handler");

  remove__handler.onclick = () => {
    cancelHanler();
  };

  // some browser may not has addEventlistener so use attachEvent instead
  if (document.addEventListener) {
    // do something
  } else if (document.attachEvent) {
    // do something
  }
}

function main() {
  // active element
  learnActiveElement();

  // add event listener
  learAddEventListener();
}

main();
