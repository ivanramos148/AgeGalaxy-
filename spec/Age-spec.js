 import { Age } from './../src/Age.js'

describe('Age', function() {
  it('should take the users age and make in into second', function() {
    let age = new Age(20)
    expect(age.yearToSeconds()).toEqual(Math.round(31557459.167*20));
  });
  it('Take two dates and determine the difference, in seconds, between the two', function() {
    let age = new Age(20);
    let Date1 = new Date(1995, 10, 23);
    let Date2 = new Date(1997, 10, 5);
    let difference = Date1.getTime() - Date2.getTime();
    console.log(difference);
    expect(age.differenceInSeconds(Date1, Date2)).toEqual(difference);
  });
  it('Takes earth years and converts it to mars years', function() {
    let age = new Age(10)
    expect(age.toMarsYears()).toEqual(Math.round(10*1.88));
  });
  it('takes age and life expectancy and earth years and conver to life expectancy on mars years', function () {
    let age = new Age(10)
    let earthLX = 80;
    let yearsLeft = Math.round((80 - 10) * 1.88);
    expect(age.marsYearsLeft(earthLX)).toEqual(yearsLeft);
  });
});
