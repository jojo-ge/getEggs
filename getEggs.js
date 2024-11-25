import { makeCompleteMessage } from "./completeMessage.js";

const dozensOfEggsNeeded = 1;
const bottlesOfMilkNeeded = 3;
const whereToGetTheStuff = "Aldi";
const storeHasMilk = false;

const instruction = `Go to the ${whereToGetTheStuff} and get me ${dozensOfEggsNeeded} dozen of eggs. If they have bottles of milk get 3`;

let isWifeAngry = true;
let dozensOfEggsBought = 0;
let bottlesOfMilkBought = 0;

const doShopping = () => {
  console.log(`Arrived at ${whereToGetTheStuff}`);
  console.log("Doing the shopping");

  dozensOfEggsBought += 1;

  if (storeHasMilk) {
    console.log(`${whereToGetTheStuff} has milk`);

    dozensOfEggsBought += 2;
  } else {
    console.log(`${whereToGetTheStuff} doesn't have milk`);
  }
  if (
    ((storeHasMilk && bottlesOfMilkBought === bottlesOfMilkNeeded) ||
      !storeHasMilk) &&
    dozensOfEggsBought === dozensOfEggsNeeded
  ) {
    isWifeAngry = false;
  } else {
    isWifeAngry = true;
  }
  console.log(
    `you bought ${dozensOfEggsBought} dozens of eggs and ${bottlesOfMilkBought} bottles of milk`
  );

  driveHome();
};

const driveHome = () => {
  console.log("driving home");
  travelSomewhere(3, "home");
};

const driveToTheShops = () => {
  console.log(`driving to ${whereToGetTheStuff}`);
  travelSomewhere(5, "shops");
};

const travelSomewhere = (timeToGetToDestination, destination) => {
  let timeInSeconds = 0;

  let interval = setInterval(() => {
    timeInSeconds += 1;
    if (timeInSeconds === timeToGetToDestination) {
      clearInterval(interval);
      if (destination === "home") {
        console.log(makeCompleteMessage(isWifeAngry));
      } else if (destination === "shops") {
        doShopping();
      }
    } else {
      console.log("driving");
    }
  }, 1000);
};

const doWhatYourWifeTellsYou = () => {
  console.log(instruction);
  console.log(`Going to ${whereToGetTheStuff}`);
  driveToTheShops(5, "shops");
};

doWhatYourWifeTellsYou();
