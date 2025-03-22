// Get to DOM Elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// loop through each optionImages elements
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait..."

    //Loop through those images again
    optionImages.forEach((image2, index2) => {
      // if the current index doesnt match the clicked index
      // remove the ACTIVE class from the other option IMAGES
      index !== index2 && image2.classList.remove("active");
      // console.log(index, index2)
    });
    
    // Add start to the container classlist
    gameContainer.classList.add("start");

    // Set timeout for the results
    let time = setTimeout(() => {

      // remove start after timeout
      gameContainer.classList.remove("start");

      // Get the source of the cli8cked option image
      let imageSrc = e.target.querySelector("img").src;
      // Setting the user image to the option image
      userResult.src = imageSrc;

      // Generate random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // console.log(randomNumber);

      // Create an array for CPU images
      let cpuImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      // Set the cpu images to the random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to cpu option (R for Rock, P for Paper, S for Scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the user clicked option(based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "CPU",
        RS: "User",
        PR: "User",
        PP: "DRAW",
        PS: "CPU",
        SR: "CPU",
        SP: "User",
        SS: "DRAW",
      };

      // Looks into the outcomes object for possible outcome
      let outComeValue = outcomes[userValue + cpuValue];
      // console.log(outComeValue);

      // Display the result
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;

      // console.log(userValue, cpuValue);
    }, 2300);
  });
});
