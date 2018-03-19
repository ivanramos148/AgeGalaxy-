 import { Age } from './../src/Age.js'

describe('Age', function() {
  it('should take the users age and make in into second', function() {
    let age = new Age(20)
    expect(age.yearToSeconds()).toEqual(Math.round(31557459.167*20));
  });
    it('Take two dates and determine the difference, in seconds, between the two', function() {
      let age = new Age(20)
      let date1 = new Date(1995, 10, 23);
      let date2 = new Date(1997, 10, 5);
      console.log(date2.getTime());
      expect(age.differenceInSeconds(date1, date2)).toEqual();
    });
});
