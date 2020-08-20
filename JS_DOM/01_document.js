let log = console.log;

// finding  html elements

let st1 = document.getElementById("id1");
log(st1);

let arrayClass = document.getElementsByClassName("class");
log(arrayClass);

let tagName = document.getElementsByTagName("div");
log(tagName);

// changing html elements
let id0 = document.getElementById("id0");

st1.innerHTML = "heeeeee";
id0.style.background = "blue";
id0.setAttribute("style", "background:red;");
log(id0);

// adding and deleting elements
let newBtn1 = document.createElement("button");
let newBtn2 = document.createElement("button");

newBtn1.setAttribute("style", "height:100px;width:100px;");
newBtn2.setAttribute("style", "height:100px;width:100px;");

newBtn1.textContent = "button1";
newBtn2.textContent = "button2";

document.write("dasdasdsd");

id0.appendChild(newBtn1);
id0.appendChild(newBtn2);

id0.removeChild(newBtn1);

let newBtn3 = document.createElement("button");
newBtn3.setAttribute("style", "height:100px;width:100px;");
newBtn3.textContent = "button3";

id0.replaceChild(newBtn3, newBtn2);

// adding events handlers
let id0again = document.getElementById("id0");
id0again.onclick = function () {
  log("id0 has been clicked!");
};
log(id0again);

// finding html objects
// let html = document.getElementsByTagName("html");
let body = document.body;

log(body);

let wrapAtag = document.createElement("div");
wrapAtag.classList.add("wrapatag");

body.appendChild(wrapAtag);

function createListATag() {
  for (let i = 0; i < 10; i++) {
    let atag = document.createElement("a");
    atag.classList.add("atag");
    atag.href = i;
    atag.name = i;
    wrapAtag.appendChild(atag);
  }
}
createListATag();

// anchors
let anchors = document.anchors;
log(anchors);

// base URI
let baseURI = document.baseURI;
log(baseURI);

// cookie
let cookie = document.cookie;
log(cookie);

// doctype
let doctype = document.doctype;
log(doctype);

// html element - document elemetn
let html = document.documentElement;
log(html);

// document mode
let docMode = document.documentMode;
log(docMode);

// document URI
let docURI = document.documentURI;
log(docURI);

// domain
let domain = document.domain;
log(domain);

// embed - thẻ nhúng
// embed includes video, audio, img, iframe tags
let embeds = document.embeds;
log(embeds);

// forms
let forms = document.forms;
log(forms);

// head
let head = document.head;
log(head);

// image
let images = document.images;
log(images);

// implementation
let implementation = document.implementation;
log(implementation);

// input encoding
let endcoding = document.inputEncoding;
log(endcoding);

// last modified
let modified = document.lastModified;
log(modified);

// links - return area and a tag those are have a href attribute
let links = document.links;
log(links);

// ready state - stuff to handle loading
let readyState = document.readyState;
log(readyState);

// referrer - những cái liên kếch bênh ngoài
let referrer = document.referrer;
log(referrer);

// title
let title = document.title;
log(title);

// url
let url = document.URL;
log(url);

// active element

// learned page 1
