export class Age {
  constructor(age) {
    this.age = age;

  }

  yearToSeconds(){
    const toSeconds = 31557459.167;
    let userAge = this.age;
    let galaxyAge = Math.round(userAge * toSeconds);
    return galaxyAge;
  }
  //
  // venusAge(){
  //   let venusYears = 2;
  //   let venusResult = Math.round(galaxyAge / venusYears);
  //   return galaxyAge;
  // }
}
