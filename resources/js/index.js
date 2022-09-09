(async () => {
  let a = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@thenewsdesk/the-latest-on-coronavirus-covid-19-t82no8kmz.rss"
  );
  let b = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@dfletcher/india-tech-b2meqpd6z.rss"
  );
  let c = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@thehindu/sportstarlive-rj3ttinvz.rss"
  );
  let one = await a.json();
  let two = await b.json();
  let three = await c.json();
  console.log(one);
  console.log(two);
  console.log(three);

  let content = document.getElementById("content");
  content.classList.add("accordion");
  content.setAttribute("id", "accordionExample");
  // content.classList.add("border-0");

  let button1prev = `<button class="carousel-control-prev" type="button" id="carousel1prev" data-bs-target="#carousel1" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>`;
  let button1next = `<button class="carousel-control-next" type="button" id="carousel1next" data-bs-target="#carousel1" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>`;

  let button2prev = `<button class="carousel-control-prev" type="button" id="carousel2prev" data-bs-target="#carousel2" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>`;
  let button2next = `<button class="carousel-control-next" type="button" id="carousel2next" data-bs-target="#carousel2" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>`;

  let button3prev = `<button class="carousel-control-prev" type="button" id="carousel3prev" data-bs-target="#carousel3" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>`;
  let button3next = `<button class="carousel-control-next" type="button" id="carousel3next" data-bs-target="#carousel3" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>`;

  // carousel1
  let carousel1 = document.createElement("div");
  carousel1.setAttribute("id", "carousel1");
  carousel1.setAttribute("class", "carousel slide");
  let inner1 = document.createElement("div");
  inner1.classList.add("carousel-inner");
  inner1.setAttribute("id", "inner1");
  carousel1.append(inner1);
  carousel1.setAttribute("data-bs-ride", "carousel");
  carousel1.setAttribute("data-bs-wrap", false);
  one.items.forEach((i) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("border-0");
    let item = document.createElement("div");
    item.classList.add("carousel-item");
    if (i.guid === one.items[0].guid) {
      item.classList.add("active");
    }

    // image
    let img = document.createElement("img");
    img.setAttribute("src", i.enclosure.link);
    img.setAttribute("alt", i.title);
    img.classList.add("w-100");
    img.classList.add("card-img-top");
    card.append(img);

    let body = document.createElement("div");
    body.classList.add("card-body");

    // heading
    let heading = document.createElement("div");
    heading.classList.add("card-title");
    heading.classList.add("carouselHeading");
    heading.innerHTML = i.title;
    body.append(heading);

    // subheading
    let subheading = document.createElement("div");
    subheading.classList.add("card-subtitle");
    subheading.classList.add("carouselSubHeading");
    subheading.innerHTML = i.author;
    body.append(subheading);

    // content

    let content = document.createElement("div");
    content.classList.add("card-text");
    content.classList.add("carouselContent");
    content.innerHTML = i.content;
    body.append(content);

    let link = document.createElement("a");
    link.setAttribute("href", i.link);
    link.setAttribute("target", "_blank");
    card.append(body);
    link.append(card);
    item.append(link);
    inner1.append(item);
  });
  carousel1.innerHTML += button1prev;
  carousel1.innerHTML += button1next;
  let wrap1 = document.createElement("div");
  wrap1.append(carousel1);

  // carousel2
  let carousel2 = document.createElement("div");
  carousel2.setAttribute("id", "carousel2");
  carousel2.setAttribute("class", "carousel slide");
  let inner2 = document.createElement("div");
  inner2.classList.add("carousel-inner");
  inner2.setAttribute("id", "inner2");
  carousel2.append(inner2);
  carousel2.setAttribute("data-bs-ride", "carousel");
  carousel2.setAttribute("data-bs-wrap", false);
  two.items.forEach((i) => {
    let card = document.createElement("div");
    card.classList.add("border-0");
    card.classList.add("card");
    let item = document.createElement("div");
    item.classList.add("carousel-item");
    if (i.guid === two.items[0].guid) {
      item.classList.add("active");
    }

    // image
    let img = document.createElement("img");
    img.setAttribute("src", i.enclosure.link);
    img.setAttribute("alt", i.title);
    img.classList.add("w-100");
    img.classList.add("card-img-top");
    card.append(img);

    let body = document.createElement("div");
    body.classList.add("card-body");

    // heading
    let heading = document.createElement("div");
    heading.classList.add("card-title");
    heading.classList.add("carouselHeading");
    heading.innerHTML = i.title;
    body.append(heading);

    // subheading
    let subheading = document.createElement("div");
    subheading.classList.add("card-subtitle");
    subheading.classList.add("carouselSubHeading");
    subheading.innerHTML = i.author;
    body.append(subheading);

    // content

    let content = document.createElement("div");
    content.classList.add("card-text");
    content.classList.add("carouselContent");
    content.innerHTML = i.content;
    body.append(content);

    card.append(body);
    let link = document.createElement("a");
    link.setAttribute("href", i.link);
    link.setAttribute("target", "_blank");
    link.append(card);
    item.append(link);
    inner2.append(item);
  });
  carousel2.innerHTML += button2prev;
  carousel2.innerHTML += button2next;
  let wrap2 = document.createElement("div");
  wrap2.append(carousel2);

  // carousel3
  let carousel3 = document.createElement("div");
  carousel3.setAttribute("id", "carousel3");
  carousel3.setAttribute("class", "carousel slide");
  let inner3 = document.createElement("div");
  inner3.classList.add("carousel-inner");
  inner3.setAttribute("id", "inner3");
  carousel3.append(inner3);
  carousel3.setAttribute("data-bs-ride", "carousel");
  carousel3.setAttribute("data-bs-wrap", false);
  three.items.forEach((i) => {
    let card = document.createElement("div");
    card.classList.add("border-0");
    card.classList.add("card");
    let item = document.createElement("div");
    item.classList.add("carousel-item");
    if (i.guid === three.items[0].guid) {
      item.classList.add("active");
    }

    // image
    let img = document.createElement("img");
    img.setAttribute("src", i.enclosure.link);
    img.setAttribute("alt", i.title);
    img.classList.add("w-100");
    img.classList.add("card-img-top");
    card.append(img);

    let body = document.createElement("div");
    body.classList.add("card-body");

    // heading
    let heading = document.createElement("div");
    heading.classList.add("card-title");
    heading.classList.add("carouselHeading");
    heading.innerHTML = i.title;
    body.append(heading);

    // subheading
    let subheading = document.createElement("div");
    subheading.classList.add("card-subtitle");
    subheading.classList.add("carouselSubHeading");
    subheading.innerHTML = i.author;
    body.append(subheading);

    // content

    let content = document.createElement("div");
    content.classList.add("card-text");
    content.classList.add("carouselContent");
    content.innerHTML = i.content;
    body.append(content);

    let link = document.createElement("a");
    link.setAttribute("href", i.link);
    link.setAttribute("target", "_blank");
    card.append(body);
    link.append(card);
    item.append(link);
    inner3.append(item);
  });
  carousel3.innerHTML += button3prev;
  carousel3.innerHTML += button3next;
  let wrap3 = document.createElement("div");
  wrap3.append(carousel3);

  inside = `<div class="accordion-item border-0">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ${one.feed.title}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
      <div class="accordion-body">
      <div>${wrap1.innerHTML}</div>
      </div>
    </div>
  </div>
  <div class="accordion-item border-0">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      ${two.feed.title}
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
      <div class="accordion-body">
      <div>${wrap2.innerHTML}</div>
      </div>
    </div>
  </div>
  <div class="accordion-item border-0">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      ${three.feed.title}
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
      <div class="accordion-body">
      <div>${wrap3.innerHTML}</div>
      </div>
    </div>
  </div>`;
  content.innerHTML = inside;

  // button1
  document.getElementById("carousel1prev").classList.add("d-none");

  document.getElementById("carousel1prev").addEventListener("click", () => {
    document.getElementById("carousel1next").classList.remove("d-none");

    let flag1 = document
      .getElementById("inner1")
      .getElementsByClassName("carousel-item")[1]
      .classList.contains("active");

    if (flag1) {
      document.getElementById("carousel1prev").classList.add("d-none");
    } else {
      document.getElementById("carousel1prev").classList.remove("d-none");
    }
  });

  document.getElementById("carousel1next").addEventListener("click", () => {
    let length = document
      .getElementById("inner1")
      .getElementsByClassName("carousel-item").length;
    document.getElementById("carousel1prev").classList.remove("d-none");

    let flag2 = document
      .getElementById("inner1")
      .getElementsByClassName("carousel-item")
      [length - 2].classList.contains("active");

    if (flag2) {
      document.getElementById("carousel1next").classList.add("d-none");
    } else {
      document.getElementById("carousel1next").classList.remove("d-none");
    }
  });

  // button2

  document.getElementById("carousel2prev").classList.add("d-none");

  document.getElementById("carousel2prev").addEventListener("click", () => {
    document.getElementById("carousel2next").classList.remove("d-none");

    let flag1 = document
      .getElementById("inner2")
      .getElementsByClassName("carousel-item")[1]
      .classList.contains("active");

    if (flag1) {
      document.getElementById("carousel2prev").classList.add("d-none");
    } else {
      document.getElementById("carousel2prev").classList.remove("d-none");
    }
  });

  document.getElementById("carousel2next").addEventListener("click", () => {
    let length = document
      .getElementById("inner2")
      .getElementsByClassName("carousel-item").length;
    document.getElementById("carousel2prev").classList.remove("d-none");

    let flag2 = document
      .getElementById("inner2")
      .getElementsByClassName("carousel-item")
      [length - 2].classList.contains("active");

    if (flag2) {
      document.getElementById("carousel2next").classList.add("d-none");
    } else {
      document.getElementById("carousel2next").classList.remove("d-none");
    }
  });

  // button3
  document.getElementById("carousel3prev").classList.add("d-none");

  document.getElementById("carousel3prev").addEventListener("click", () => {
    document.getElementById("carousel3next").classList.remove("d-none");

    let flag1 = document
      .getElementById("inner3")
      .getElementsByClassName("carousel-item")[1]
      .classList.contains("active");

    if (flag1) {
      document.getElementById("carousel3prev").classList.add("d-none");
    } else {
      document.getElementById("carousel3prev").classList.remove("d-none");
    }
  });

  document.getElementById("carousel3next").addEventListener("click", () => {
    let length = document
      .getElementById("inner3")
      .getElementsByClassName("carousel-item").length;
    document.getElementById("carousel3prev").classList.remove("d-none");

    let flag2 = document
      .getElementById("inner3")
      .getElementsByClassName("carousel-item")
      [length - 2].classList.contains("active");

    if (flag2) {
      document.getElementById("carousel3next").classList.add("d-none");
    } else {
      document.getElementById("carousel3next").classList.remove("d-none");
    }
  });
})();
