import { getWifeResponse } from "./getResponse.js";

// understand the problem
// go to the store and get a bottle of milk. If they have eggs get 6.

// identify data points
let bottlesOfMilkBought = 0;
let bottlesOfMilkNeeded = 1;
let eggsBought = 0;
let eggsNeeded = 6;

let storeHasEggs = true;

// build functionality
function getEggsAndMilk(storeName, thinksLikeAnEngineer) {
  console.log(`going to ${storeName} by request of the overlord`);

  bottlesOfMilkBought = bottlesOfMilkBought + 1;
  console.log(
    `you now have ${bottlesOfMilkBought} bottles of milk and ${eggsBought} eggs`
  );

  // create logic
  if (storeHasEggs && thinksLikeAnEngineer) {
    bottlesOfMilkBought = 6;
  } else if (storeHasEggs && !thinksLikeAnEngineer) {
    eggsBought = 6;
  } else {
    console.log(`no eggs at ${storeName}`);
  }

  console.log(
    `you now have ${bottlesOfMilkBought} bottles of milk and ${eggsBought} eggs`
  );

  return { eggs: eggsBought, milk: bottlesOfMilkBought };
}

// test our code
function doWhatWifeTellsYou() {
  const eggsAndMilk = getEggsAndMilk("Aldi", true);
  getWifeResponse(eggsAndMilk, eggsNeeded, bottlesOfMilkNeeded, storeHasEggs);
}

doWhatWifeTellsYou();
