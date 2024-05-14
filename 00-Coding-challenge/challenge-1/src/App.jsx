import "./App.css";

function App() {
  /////////////////////////////////////////////////////////////////////////////////////////
  /*//   Coding Challenge #1

  // Mark and John are trying to compare their BMI (Body Mass Index), which is
  // calculated using the formula:
  // BMI = mass / height ** 2 = mass / (height * height) (mass in kg
  // and height in meter).

  // Your tasks:
  // 1. Store Mark's and John's mass and height in variables

  // 2. Calculate both their BMIs using the formula (you can even implement both
  const bmi = (mass, height) => mass / height ** 2;

  //test data #1
  let markBMI1 = bmi(78, 1.69);
  let johnBMI1 = bmi(92, 1.95);

  //test data #2
  let markBMI2 = bmi(95, 1.88);
  let johnBMI2 = bmi(85, 1.76);

  // Test data:
  // § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
  // m tall.
  // § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
  // m tall.
  let markMass = 78;
  let johnMass = 92;
  let markHeight = 1.69;
  let johnHeight = 1.95;

  let markHigherBMI1 = markBMI1 > johnBMI1;
  let markHigherBMI2 = markBMI2 > johnBMI2;

  // versions)
  // 3. Create a Boolean variable 'markHigherBMI' containing information about
  // whether Mark has a higher BMI than John.

  console.log(markMass);
  console.log(johnMass);
  console.log(markHeight);
  console.log(johnHeight);

  //test data #1
  console.log(markBMI1);
  console.log(johnBMI1);
  console.log(markHigherBMI1);

  console.log("************************************")

  //test data #2
  console.log(markBMI2);
  console.log(johnBMI2);
  console.log(markHigherBMI2); */
  /////////////////////////////////////////////////////////////////////////////////////////
  /*
  Coding Challenge #2

  Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
  Your tasks:

  1. Print a nice output to the console, saying who has the higher BMI. The message
  is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
  BMI (28.3) is higher than John's (23.9)!"
  Hint: Use an if/else statement 😉

  GOOD LUCK 😀
  */
  /*
  // 2. Calculate both their BMIs using the formula (you can even implement both
  const bmi = (mass, height) => mass / height ** 2;

  //test data
  let markBMI = Number(bmi(78, 1.69).toFixed(2));
  let johnBMI = Number(bmi(92, 1.95).toFixed(2));

  if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`);
  } else {
    console.log(`John's BMI(${johnBMI}) is higher than Marks(${markBMI})`);
  }
  */
  /////////////////////////////////////////////////////////////////////////////////////////
  /*
  Coding Challenge #3

  There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

  Your tasks:

  1). Calculate the average score for each team, using the test data below
  2). Compare the team's average scores to determine the winner of the competition,
  and print it to the console. Don't forget that there can be a draw, so test for that
  as well (draw means they have the same average score)
  3). Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
  team only wins if it has a higher score than the other team, and the same time a
  score of at least 100 points. Hint: Use a logical operator to test for minimum
  score, as well as multiple else-if blocks 😉
  4). Bonus 2: Minimum score also applies to a draw! So a draw only happens when
  both teams have the same score and both have a score greater or equal 100
  points. Otherwise, no team wins the trophy

  Test data:
  § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
  § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
  § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

  GOOD LUCK
  */
  /*
  //variables for data

  //test data 1
  let dolphinsGame1 = 96;
  let dolphinsGame2 = 108;
  let dolphinsGame3 = 89;

  let koalaGame1 = 88;
  let koalaGame2 = 91;
  let koalaGame3 = 110;

  /*
  //test data 2
  let dolphinsGame1 = 97;
  let dolphinsGame2 = 112;
  let dolphinsGame3 = 101;

  let koalaGame1 = 109;
  let koalaGame2 = 95;
  let koalaGame3 = 123;
  */
  /*
 //test data 3
 let dolphinsGame1 = 97;
 let dolphinsGame2 = 112;
 let dolphinsGame3 = 101;

 let koalaGame1 = 109;
 let koalaGame2 = 95;
 let koalaGame3 = 106;

  //task 1: calculate the average score for each team.

  //make a function for the average with parameters(game 1, game 2, game 3)
  const average = (g1, g2, g3) => {
    return ((g1 + g2 + g3) / 3).toFixed(2); //to fixed is used to cut the decimal to two decimal places
  };

  //dolphin's average
  let dolphinAverage = average(dolphinsGame1, dolphinsGame2, dolphinsGame3);
  console.log(dolphinAverage);

  //koala's average
  let koalaAverage = average(koalaGame1, koalaGame2, koalaGame3);
  console.log(koalaAverage);

  //task 2: compare the team's average score to determine the winner of the competition

  //if statement to determine the winner
  //bonus 1: add a requirement for a minimum score of 100 to declare a winner
  if (dolphinAverage > 100 || koalaAverage > 100) {
    if (dolphinAverage > koalaAverage) {
      console.log(`Team Dolphin is the winner`);
    } else if (dolphinAverage < koalaAverage) {
      console.log(`Team Koala is the winner`);
    } else {
      console.log(`It is a draw!`);
    }
  } else {
    console.log(`No one wins the trophy. A team needs to satisfy the 100 points requirement!`);
  }
  */
  /////////////////////////////////////////////////////////////////////////////////////////
  /*
  Coding Challenge #4

  Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300 If the value is different, the tip is 20%.

  Your tasks:

  1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
  this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
  start with an if/else statement, and then try to convert it to a ternary
  operator!)

  2. Print a string to the console containing the bill value, the tip, and the final value
  (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
  316.25”

  Test data:
  § Data 1: Test for bill values 275, 40 and 430

  Hints:
  § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
  § Value X is between 50 and 300, if it's >= 50 && <= 300 😉

  GOOD LUCK
  */

  //variables for test data
  let billValue = [275, 40, 430];
  let currentBill = billValue[1];

  /* //standard if else statement
  if (50 <= currentBill && currentBill <= 300) {
    tip = 0.15 * currentBill;
    tipPercent = "15%";
  } else {
    tip = 0.2 * currentBill;
    tipPercent = "20%";
  }
  */

  // ternary operator
  let tip =
    50 <= currentBill && currentBill <= 300
      ? 0.15 * currentBill
      : 0.2 * currentBill;
  let tipPercent = tip === 0.15 * currentBill ? "15%" : "20%";

  console.log(
    `The bill was ${currentBill}, the tip was ${tip} and the total value is ${
      currentBill + tip
    }. Note: The tip percentage was ${tipPercent}`
  );
  // (50 <= currentBill <= 300) ? tip = 0.15 * currentBill : tip = 0.20 * currentBill
}

export default App;
