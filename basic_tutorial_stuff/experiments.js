const monthlyRent = 500;
console.log(monthlyRent);
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

document.write("<h2>Hello, World!</h2>");
console.log("Hello World!");
console.warn("Warning!!!");
console.error("This is an error")

const firstName = "Guy";
const lastName = "Itti";
const sentenceTemplate = `Hello ${firstName} ${lastName}! How are you?`;
//MUST use backticks for templating to indicate that there is a variable being used
console.log(sentenceTemplate);

const skyIsBlue = true;
const temperatureToday = 85;

if(skyIsBlue && temperatureToday === 86) {
  console.log("The sky is blue, but it's way too hot!");
} else if(skyIsBlue && temperatureToday < 86) {
  console.log("The sky is blue and the temperature today is perfect!");
} else{
  console.log("uwu");
}

let friendsAtSchool = 0;
while (friendsAtSchool < 10) {
  friendsAtSchool += 1;
}
console.log(friendsAtSchool);

const car = {
  wheels:4,
  color: "red",
  drive: function(){
    console.log("vroom vroom")
  }
}
console.log(Object.keys(car)[0])
console.log(typeof Object.keys(car)[0])
car.drive();
car.color = "blue";
console.log(car.color);
console.log(Object.values(car)[1]);
