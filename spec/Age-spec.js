 import { Age } from './../src/Age.js'

describe('Age', function() {

  it('Take two dates and determine the difference, in seconds, between the two', function() {
    let age = new Age(20);
    let Date1 = new Date(1995, 10, 23);
    let Date2 = new Date(1997, 10, 5);
    let difference = Date1.getTime() - Date2.getTime();
    console.log(difference);
    expect(age.differenceInSeconds(Date1, Date2)).toEqual(difference);
  });
});
