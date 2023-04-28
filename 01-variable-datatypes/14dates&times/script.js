let d;

//get todays date and time
d = new Date();

//Set to string
d = d.toString();

//get a specific Date
//note: month (0 based), 0 is january
//year, month, day, hours, minutes, seconds

d = new Date(1743, 8, 25, 06, 29, 9);

//Pass in a string
d = new Date("2021-07-10T12:30:00");
d = new Date("06/29/1998 12:30:00");
d = new Date("1998-06-29");

//get the current time stamp ""TRIVIA (the number appears 1682653332333 is millisecond from Jan 01, 1970)
d = Date.now();

//getting the timestamp of a specific date
d = new Date();
d = d.getTime();
d = d.valueOf();

//create a date from timestamp
d = new Date(51236123992);

console.log(d);
