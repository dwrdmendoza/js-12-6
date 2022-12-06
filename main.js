// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you. 
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers. 
// Every day you rent the car costs $40. if you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount ofr different days(d).

// rent the car for 1 day = $40
if rental = 1 {40}
if rental = 2 {2 * 40}
// rent the car for 7+ days = -$50
if rental >= 7 {rental * $40 - $50}
// rent the car for 3+ days = -$20
if rental >=3 || rental <= 6 {rental * 40 -20}


function rentalCarCost(d){
  return 40 * d - ( d > 6 ? 50 : d > 2 ? 20 : 0) // no matter what it will cost 40 dollars a day
}

// or you can write like this 

function baseCost(days, rate){
  return days * rate;
}

function discountRate(days){
  if (days >= 7) {
    return 50;
  }
  else if (days >= 3) {
    return 20;
  }
  else {
    return 0;
  }
}

function rentalCarCost(days){
  return baseCost(days, 40) - discountRate(days);
}