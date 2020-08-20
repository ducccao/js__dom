let log = console.log;

// In the HTML DOM, the Attr object represents an HTML attribute.
// An HTML attribute always belongs to an HTML element.
function learnAttributes() {
  // attr.isID - Returns true if the attribute is of type Id, otherwise it returns false
  let demo__00 = document.getElementById("demo__00");

  // attr.name	Returns the name of an attribute
  let attr__name = demo__00.attributes[0].name;

  //attr.value	Sets or returns the value of the attribute
  demo__00.attributes[0].value = "ok";

  //attr.specified	Returns true if the attribute has been specified, otherwise it returns false
  log(demo__00.attributes[0].specified);
  // log(demo__00.attributes[1].specified);

  // nodemap.getNamedItem()	Returns a specified attribute node from a NamedNodeMap

  let btn__l1 = document.getElementById("l1");

  btn__l1.onclick = () => {
    log("ll1 onlick");
    demo__00.innerHTML = demo__00.attributes[0].isID;

    log("attr name:", attr__name);

    // can create attribute and log it to debug
    let nodemap__name = btn__l1.attributes.getNamedItem("onMyCreate").value;
    log("nodemap name:", nodemap__name);
  };
}

function main() {
  // learn attributes
  learnAttributes();
}

main();
