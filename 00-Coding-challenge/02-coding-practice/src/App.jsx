import "./App.css";

function App() {
  <h1>JavaScript Fundamentals - Part 2</h1>;

  //==========================================================================================
  /*
  Coding Challenge #1
  Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
  Each team competes 3 times, and then the average of the 3 scores is calculated (so
  one average score per team).
  A team only wins if it has at least double the average score of the other team.
  Otherwise, no team wins!

  Your tasks:
  1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
  2. Use the function to calculate the average for both teams
  3. Create a function 'checkWinner' that takes the average score of each team
  as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
  to the console, together with the victory points, according to the rule above.

  Example: "Koalas win (30 vs. 13)"
  4. Use the 'checkWinner' function to determine the winner for both Data 1 and
  Data 2
  5. Ignore draws this time

  Test data:
  § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
  § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

  GOOD LUCK
  */

  /*
 //variables for test data
 //test data 1
 let dolphinsGame1 = 44;
 let dolphinsGame2 = 23;
 let dolphinsGame3 = 71;

 let koalaGame1 = 65;
 let koalaGame2 = 54;
 let koalaGame3 = 49;

 /*
  //test data 2
  let dolphinsGame1 = 85;
  let dolphinsGame2 = 54;
  let dolphinsGame3 = 41;

  let koalaGame1 = 23;
  let koalaGame2 = 34;
  let koalaGame3 = 27;

  //Create an arrow function 'calcAverage' to calculate the average of 3 scores
  const calcAverage = (g1, g2, g3) => ((g1 + g2 + g3) / 3);

  //Use the function to calculate the average for both teams
  const dolphinsAverage = calcAverage(
    dolphinsGame1,
    dolphinsGame2,
    dolphinsGame3
  );

  const koalaAverage = calcAverage(koalaGame1, koalaGame2, koalaGame3);

  console.log(dolphinsAverage);
  console.log(koalaAverage);

  /*Create a function 'checkWinner' that takes the average score of each team
    as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
    to the console, together with the victory points, according to the rule above.
    Example: "Koalas win (30 vs. 13)"
  const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas) {
      console.log(`Dolphins win (${avgDolphins} points vs ${avgKoalas} points)`);
    } else {
      console.log(`Koalas win (${avgKoalas} points vs ${avgDolphins} points)`);
    }
  };

  checkWinner(dolphinsAverage, koalaAverage);
  */

  //==========================================================================================
  /*
  Coding Challenge #2
  Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

  Your tasks:

  1. Write a function 'calcTip' that takes any bill value as an input and returns
  the corresponding tip, calculated based on the rules above (you can check out
  the code from first tip calculator challenge if you need to). Use the function
  type you like the most. Test the function using a bill value of 100
  2. And now let's use arrays! So create an array 'bills' containing the test data
  below
  3. Create an array 'tips' containing the tip value for each bill, calculated from
  the function you created before
  4. Bonus: Create an array 'total' containing the total values, so the bill + tip

  Test data: 125, 555 and 44

  Hint: Remember that an array needs a value in each position, and that value can
  actually be the returned value of a function! So you can just call a function as array
  values (so don't store the tip values in separate variables first, but right in the new
  array) 😉
  GOOD LUCK 😀
  */

  //Write a function 'calcTip'
  const calcTip = (bill) => {
    //make if statement if percent tip should be 15% or 20%;
    let percent = 0;
    if (bill >= 50 && bill <= 300) {
      percent = 0.15;
    } else {
      percent = 0.2;
    }
    return bill * percent;
  };

  //create an array 'bills' containing the test data
  const bills = [125, 555, 44];

  //call the calctip function with the arguments of bills[]
  const bill1 = calcTip(bills[0]);
  const bill2 = calcTip(bills[1]);
  const bill3 = calcTip(bills[2]);

  //create an array 'tips' containing the tip value
  const tips = [bill1, bill2, bill3];

  //bonus: create an array 'total' containing the total values of the bill + tip
  const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

  //for loop and console.log each total tips
  for (let i = 0; i < total.length; i++) {
    console.log(
      `The initial tip of ${tips[i]} and principal amount of ${bills[i]} with a total tip of ${total[i]}`
    );
  }

  console.log(tips);
}

export default App;
