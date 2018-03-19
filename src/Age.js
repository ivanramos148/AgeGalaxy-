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
  toMarsYears(){
    return Math.round(this.age * 1.88)
  }
  toVenusYears(){
    return Math.round(this.age * .62)
  }
  toMercuryYears(){
    return Math.round(this.age * .24)
  }
  toJupiterYears(){
    return Math.round(this.age * 11.86)
  }
  marsYearsLeft(earthLX){
    return Math.round((earthLX - this.age) * 1.88)
  }
  venusYearsLeft(earthLX){
    return Math.round((earthLX - this.age) * .62)
  }
  mercuryYearsLeft(earthLX){
    return Math.round((earthLX - this.age) * .24)
  }
  jupiterYearsLeft(earthLX){
    return Math.round((earthLX - this.age) * 11.86)
  }

  lifeSurpassed(earthLX){
    if(this.age > earthLX) {
      return "oops you've surpassed the life expectancy by " + (this.age - earthLX) + "years!";
    } else {
      return false;
    }
  }
}
