// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  const icon = element.querySelector("i");
  element.classList.toggle("active");

  if (icon.classList.contains("fa-chevron-up")) {
    icon.classList.replace("fa-chevron-up", "fa-chevron-down");
  } else {
    icon.classList.replace("fa-chevron-down", "fa-chevron-up");
  }
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const parentEl = document.getElementById("parent");
// const section1Element = document.getElementById("section1");
// const section2Element = document.getElementById("section2");
// const section3Element = document.getElementById("section3");

// section1Element.addEventListener("click", toggle);
// section2Element.addEventListener("click", toggle);
// section3Element.addEventListener("click", toggle);

async function getFAQs() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const faqData = await response.json();
  faqData.forEach((faq) => {
    const faqEl = document.createElement("div");
    faqEl.setAttribute("class", "title");
    faqEl.addEventListener("click", toggle);
    faqEl.innerHTML = `${faq.title} <i class="fa-solid fa-chevron-up"></i>`;
    parentEl.appendChild(faqEl);

    const faqBody = document.createElement("div");
    faqBody.setAttribute("class", "description");
    faqBody.innerHTML = `<p> ${faq.body}</p>`;
    parentEl.appendChild(faqBody);
  });
}
getFAQs();
