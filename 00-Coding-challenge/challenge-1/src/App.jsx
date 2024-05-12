import "./App.css";

function App() {
  //   Coding Challenge #1

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
  console.log(markHigherBMI2);
}

export default App;
