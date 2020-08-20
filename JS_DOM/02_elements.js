let log = console.log;

// id
var ele__1 = document.getElementById("ele1");

// tag name
var ele__array = document.getElementsByTagName("div");
log(ele__array);

// class name
var ele_array__class = document.getElementsByClassName("class");
log(ele_array__class);

// query seletor
var x = document.forms["form__1"];

var text = "";
for (let i = 0; i < x.length; i++) {
  // elements[i]
  text += x.elements[i].value + "<br/>";
}

document.getElementById("demo").innerHTML = text;

// if you wanna test attribute - control it like an array - example: a[0].innerHTML

// the following HTML objects (and object collections) are also accessible

// document.anchors
// document.body
// document.documentElement
// document.embeds
// document.forms
// document.head
// document.images
// document.links
// document.scripts
// document.title
