import { getWifeResponse } from "./getResponse.js";

let bottlesOfMilkBought = 0;
let bottlesOfMilkNeeded = 1;
let eggsBought = 0;
let eggsNeeded = 6;

let storeHasEggs = true;

function getEggsAndMilk(storeName, thinksLikeAnEngineer) {
  console.log(`going to ${storeName} by request of the overlord`);

  bottlesOfMilkBought = bottlesOfMilkBought + 1;
  console.log(
    `you now have ${bottlesOfMilkBought} bottles of milk and ${eggsBought} eggs`
  );

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

function doWhatWifeTellsYou() {
  const eggsAndMilk = getEggsAndMilk("Aldi", true);
  getWifeResponse(eggsAndMilk, eggsNeeded, bottlesOfMilkNeeded, storeHasEggs);
}

doWhatWifeTellsYou();
