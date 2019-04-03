// Episode 1 - The murderer will be Miss Scarlet because this code will look at the single object 'scenario' and retrieve the 'murderer' charecteristic from this. None of the constants have been reassigned and const verdict sits within the same block.

//Episode 2 - An error because we have set the const murderer to be Professor plum but then tried reassigining this as Mrs Peacock. When I checked the code the error was a TypeError: Assignment to constant variable, which showed that it wasn;t even reassigned to another constant.


//Episode 3 - This should return the First Verdict as Mrs Peacock because we assigned the murderer to be Mrs Peacock by using let which we returned at this point without an error because it's in the same block, the first verdict is looking at the outcome of this function - declareMurderer. However for the second verdict this will return Professor Plum because it is pulling through the original let murderer, and does not use the function declareMurderer. There shouldn't be any errors because we haven't reasigned any consts, only lets.

//Episode 4 - The original suspects would have been Miss Scarlet, Professor Plum and Mrs Peacock which we assigned using let. However we then reassigned suspectThree to be Colonel Mustard which was within the same block (of the function) as the return. This would mean when we logged suspects it would print the updated three of Miss Scarlet, Professor Plum and Colonel Mustard. However because this let was within the block when we then come to only logging out the third suspect it refers back to the let within the same block (and not the one reassigned) - which is our original 'Mrs Peacock'

//Episode 5 - This will print out "The weapon is the Revolver" because of the final section of code which is out of the blocks. The revolver is fed into the changeWeapon function which reassigned the scenario.weapon to be revolver, which will work as the scenario is an object, even if it is const.


//Episode 6 - We let (so it can be reassigned) the murderer be Colonel Mustard at the beginning, however when the plotTwist function ran it would update this to be Mrs White. We then ran the changeMurderer function which updated the murderer to Mr Green, which is within the same block as the declareMurderer function to give the verdict, so will be Mr Green. After I ran the code and got Mrs White I realised that because they are in seperate blocks this would not update when changeMurderer is ran and would not change to Mr Green.

//Episode 7 - This will print out Mr Green. Because the murderer was globally defined at Mr Green it would then reassign the murderer throughout everything, not jsut within it's block.

//Episode 8 - The first function to run is the changeScenario however this is made up of other functions. The unecpectedOutcome will reassign the weapon as a candle stick, then the plotTwist will reassign the murderer as colonel mustard, then finally the changeScenario will reassign the room as the Dining room. Therefore the final outcome will be that the murder weapon was a candle stick.

//Episode 9  - The murderer will be Professor Plum. At the beginning we said let murderer = Professor Plum which assigned it. The first function to run was declareMurderer which returns the current murderer, as this is Professor Plum the other if statement will never run.

//Episode 10

const holiday = {
    location: 'Thailand',
    days: '21',
    airport: 'Edinburgh'
  };

if (holiday.location === 'Thailand') {
  let days = '25'
}

const flightChanged = function(){
 holiday.airport = 'Glasgow';

const missedFlight = function(){
  holiday.location = holiday.airport;

const cutShort = function(days){
  holiday.days = holiday.days / 7
}
cutShort();
}
missedFlight();
}
const whichHoliday = function() {
  return `You went on a lovely holiday to ${holiday.location} for ${holiday.days} days`;
}
flightChanged();
const finalHoliday = whichHoliday();
console.log(finalHoliday);
