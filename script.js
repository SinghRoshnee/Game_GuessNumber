const btn = document.querySelector("#clickbtn");
const lowercontent = document.querySelector(".lowercontent");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  container.style.height = "90vh";
  lowercontent.style.display = "flex";
});

/* main game code */

const randomnumber = parseInt(Math.random() * 100 + 1);
// console.log(randomnumber);

const submitbtn = document.querySelector("#submitbtn");
const userinput = document.querySelector("#userinput");
const guessslot = document.querySelector("#previousguess");
const guessremaining = document.querySelector("#guessremaining");
const lowhi = document.querySelector("#lowhigh");
const rightcontent = document.querySelector(".resultparas");

let playgame = true;
let previousguesses = [];
let remaininguess = 1;

let p = document.createElement("p");

if (playgame == true) {
  submitbtn.addEventListener("click", function (e) {
    e.preventDefault();
    const userguess = parseInt(userinput.value);
    // console.log(userguess);
    validateguess(userguess);
  });
}

function validateguess(userguess) {
  if (isNaN(userguess)) {
    alert("plz enter a valid number");
  } else if (userguess < 1) {
    alert("plz enter a number greater than 1");
  } else if (userguess > 100) {
    alert("plz enter a number smaller than 100 ");
  } else {
    previousguesses.push(userguess);
    if (remaininguess === 11) {
      displayguess(userguess);
      displaymsg(`Game Over  Random number was  ${randomnumber}`);
      endgame();
    } else {
      displayguess(userguess);
      checkguess(userguess);
    }
  }
}

function checkguess(userguess) {
  if (userguess === randomnumber) {
    displaymsg(`you guessed it right`);
    endgame();
  } else if (userguess > randomnumber) {
    displaymsg(`Number is Too High`);
  } else if (userguess < randomnumber) {
    displaymsg(`Number is Too Low`);
  }
}

function displayguess(userguess) {
  userinput.value = '' 
  guessslot.innerHTML += `${userguess}  `
  remaininguess++;
  guessremaining.innerHTML = `${11 - remaininguess}`
}

function displaymsg(message) {
  lowhi.innerHTML = `<h2>${message}</h2>`
}

function endgame() {
  //
}

function newgame() {
  //
}
 