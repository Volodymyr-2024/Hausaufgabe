const root = document.querySelector("#root");
let slider_index = 0;
const images = [
  "https://oir.mobi/uploads/posts/2024-06/728461/1718219551_oir-mobi-dn81-p-zamok-kilkenni-5.jpg",
  "https://oir.mobi/uploads/posts/2024-06/728461/1718219530_oir-mobi-dpc4-p-zamok-kilkenni-11.jpg",
  "https://oir.mobi/uploads/posts/2024-06/728461/1718219539_oir-mobi-dxh5-p-zamok-kilkenni-16.jpg",
  "https://oir.mobi/uploads/posts/2024-06/728461/1718219546_oir-mobi-eiwu-p-zamok-kilkenni-28.jpg",
  "https://oir.mobi/uploads/posts/2024-06/728461/1718219603_oir-mobi-f4wq-p-zamok-kilkenni-52.jpg",
];
const frame = document.createElement("div");
const cards = document.createElement("div");
frame.classList.add("frame");
cards.classList.add("cards");
for (let i = 0; i < images.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${images[i]}")`;
  cards.append(card);
}
frame.append(cards);
root.append(frame);

function create_rounds() {
  const container = document.createElement("div");
  container.classList.add("rounds");
  for (let i = 0; i < images.length; i++) {
    const button = document.createElement("button");
    if (i === 0) {
      button.classList.add("active");
    }
    container.append(button);
    button.addEventListener("click", function () {
      slider_index = i;
      cards.style.left = `${-1 * slider_index * 500}px`;
      const all_buttons = container.querySelectorAll("button");
      all_buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  }
  frame.append(container);
}

const triggers = document.createElement("div");
const left_btn = document.createElement("button");
const right_btn = document.createElement("button");
left_btn.innerText = "<";
right_btn.innerText = ">";
triggers.classList.add("trigger");
triggers.append(left_btn, right_btn);
frame.append(triggers);

function go_left() {
  if (slider_index !== 0) {
    slider_index--;
    cards.style.left = `${-1 * slider_index * 500}px`;
    update_active_circle();
  }
}
function go_right() {
  if (slider_index < images.length - 1) {
    slider_index++;
    cards.style.left = `${-1 * slider_index * 500}px`;
    update_active_circle();
  }
}
function update_active_circle() {
  const all_buttons = document.querySelectorAll(".rounds button");
  all_buttons.forEach((btn) => btn.classList.remove("active"));
  all_buttons[slider_index].classList.add("active");
}
left_btn.addEventListener("click", go_left);
right_btn.addEventListener("click", go_right);
create_rounds();
