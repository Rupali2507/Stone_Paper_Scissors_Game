let userResult = document.querySelector(".user_result img");
let cpuResult = document.querySelector(".cpu_result img");

let img = document.querySelectorAll(".option_images");
let winState = document.querySelector(".statement");

let userScore = document.querySelector(".userScore");
let BotScore = document.querySelector(".BotScore");

//loop through each option image element and make selected element active
img.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    //loop through each option image element again
    img.forEach((image1, index1) => {
      //if the current index doesnt match with the clicked index
      //Remove active class from the other option
      index !== index1 && image1.classList.remove("active");
    });
    //get source of the clicked option image
    let imgSrc = e.target.src;
    //set the userResult to the clicked image option
    userResult.src = imgSrc;
    //Genrate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    // Craete an arrray of the images that has to be add in the cpuImage
    let cpuImage = ["stone.png", "paper.png", "scissors.png"];
    //add the random image to the cpu.
    cpuResult.src = cpuImage[randomNumber];

    //Assign a letter value to the cpu option (R for rock, P for paper, S for scissors)
    let cpuValue = ["R", "P", "S"][randomNumber];
    //Assign a letter value to the clickes option(baesd on index)
    let userValue = ["R", "P", "S"][index];

    //craete an object with all possible outcomes

    let outcomes = {
      RR: "Draw",
      RP: "BOT",
      RS: "USER",
      PP: "Draw",
      PR: "USER",
      PS: "BOT",
      SS: "Draw",
      SR: "BOT",
      SP: "USER",
    };

    //Look up the outcomes value based on user and cpu options

    let outComeValue = outcomes[userValue + cpuValue];

    winState.textContent =
      userValue === cpuValue ? "Match Draw " : `${outComeValue} Won !!!`;

    let players = ["USER", "BOT"];
    if (outComeValue == players[0]) userScore.textContent++;
    else BotScore.textContent++;
  });
});
