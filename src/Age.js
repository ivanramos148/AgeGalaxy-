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
  differenceInSeconds(date1, date2){
    let date1Seconds = date1.getTime();
    let date2Seconds = date2.getTime();
    let difference  = date1Seconds - date2Seconds;
    return difference;
  }
