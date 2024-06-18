const btn = document.querySelector("button");
const lowercontent = document.querySelector(".lowercontent");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  console.log("hi");
  container.style.height = "90vh";
  lowercontent.style.display = "flex"; 
});
