import mags from "../data/magazines.js";
let data = [];
let length = mags.length;
for (let i = 0; i < length; i++) {
  let response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mags[i]}`);
  data.push(await response.json());
}
console.log(data);

const ID = () => Math.random().toString(36).substring(2, 9);
const active = (j) => {
  if (j === 0) {
    return "active";
  }
  else return "";
}
const acc = (k) => {
  if (k === 0) {
    return "";
  }
  else {
    return "collapsed";
  }
}
const show = (l) => {
  if (l === 0) {
    return "show";
  }
  else {
    return "";
  }
}
let content = document.getElementById("content");
content.classList.add("accordion");
content.setAttribute("id", "accordionExample");

data.forEach(i => {
  let id = ID();
  let inner = document.createElement("div");
  inner.classList.add("carousel-inner");
  for (let j = 0; j < i.items.length; j++) {
    let item = `<div class="carousel-item ${active(j)}">
    <a href="${i["items"][j]["link"]}" target="_blank">
    <div class="card" >
    <div class="overflow-hidden">
    <img src="${i["items"][j]["enclosure"]["link"]}" class="card-img-top d-block w-100" alt="...">
    </div>
    <div class="card-body">
    <div class="card-title carouselHeading">${i.items[j].title}</div>
    <div class="card-subtitle carouselSubHeading">${i.items[j].author}</div>
    <div class="card-text">${i.items[j].content}</div>
    </div>
    <div>
    </a>
  </div>`;
    inner.innerHTML += item;
  }
  let carousel = `<div id="carouselExampleControls${id}" class="carousel slide" data-bs-ride="carousel">
  <div class= "carousel-inner">
  ${inner.innerHTML}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${id}" id= "carousel${id}prev" data-bs-slide="prev" onclick="prev('${id}')">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${id}" id= "carousel${id}next" data-bs-slide="next" onclick="next('${id}', ${i.items.length})">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>`

  let accordionItem = `<div class="accordion-item" >
      <h2 class="accordion-header" id="heading${id}">
        <button class="accordion-button ${acc(data.indexOf(i))}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}" aria-controls="collapse${id}">
          ${i.feed.title}
        </button>
      </h2>
      <div class="accordion-collapse collapse ${show(data.indexOf(i))}" id="collapse${id}" aria-labelledby="heading${id}">
        <div class="accordion-body">
          ${carousel}
        </div>
      </div>
    </div>`;
  let wrap = document.createElement("div");
  wrap.innerHTML = accordionItem;
  content.innerHTML += wrap.innerHTML;

  document.getElementById(`carousel${id}prev`).classList.add("d-none");

})

