const btn = document.querySelector("#clickbtn");
const lowercontent = document.querySelector(".lowercontent");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  container.style.height = "90vh";
  lowercontent.style.display = "flex"; 
});
