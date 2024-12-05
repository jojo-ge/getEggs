export const getWifeResponse = (
  stuffBought,
  eggsNeeded,
  milkNeeded,
  storeHasEggs
) => {
  if (
    (stuffBought.eggs !== eggsNeeded && storeHasEggs) ||
    stuffBought.milk !== milkNeeded
  ) {
    console.log(
      `you are home. You either probably bought way too much milk, who's gonna drink all this milk? I mean really think, theres 2 of us in this house when are we going to use 6 bottles of milk?`
    );
  } else {
    console.log(
      `You got home with the right amount of stuff, you should be husband of the year. NO. Austral... NO. HUMAN OF THE YEAR`
    );
  }
};
