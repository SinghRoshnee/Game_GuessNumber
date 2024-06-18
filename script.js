const btn = document.querySelector("#clickbtn");
const lowercontent = document.querySelector(".lowercontent");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  container.style.height = "90vh";
  lowercontent.style.display = "flex"; 
});

/* main game code */

const randomnumber = parseInt( Math.random() *100 +1)
console.log(randomnumber);

const submitbtn = document.querySelector('#submitbtn');

submitbtn.addEventListener('click', function(e){
  e.preventDefault();

  
})
