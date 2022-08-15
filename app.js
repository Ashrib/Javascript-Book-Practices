        // -----Ch#1 (alerts)------
//alert("Thanks for your input");

        // Ch#2 (Variables for Strings)
// var thanx = "Thanks for your input!";
// alert(thanx);

        // -------Ch#3 (Variables for Numbers)-------
// var originalNum = 23;
// var newNum = originalNum + 7;
// console.log(newNum);
 
// var originalNum = 23;
// var numToBeAdded = 7;
// var newNum = originalNum + numToBeAdded;
// console.log(newNum);
 
// var originalNum = 90;
// originalNum = originalNum + 10;
// console.log(originalNum);
 
// var originalNum = "23";
// var newNum = originalNum + 7;
// console.log(newNum);

        // ------Ch#8 (Concatenating text strings)------
// var message = "Thanks, ";
// var userName = "Susan";
// var banger = "!";
// var customMess = message + userName + banger;
// alert(customMess);

        // -------Ch#9 (Prompt)-------
// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);
// console.log(spec);

        //------ Ch#10 (if statements)------
// var x = prompt("Where does the Pope live?");
// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
//     alert("Correct!");
// }

       // ------Ch#12 (if...else and else if statements)------- 
// var x = prompt("Where does the Pope live?");
// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
//   alert("Correct!");
// }
// else if (x === "Rome") {
//   alert("Incorrect but close");
// }
// else {
//   alert("Incorrect");
// }

       // ------Ch#13 (Testing sets of conditions) ------
// var weight = 400;
// var time = 7;
// var age = 18;
// var gender = "male";
// if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//  alert("Come to our tryout!");
// }
// else {
//  alert("Come to our cookout!");
// };

// var SAT = 40;
// var GPA = 3;
// var avg = 30;
// sport = "circket"; 
// if (SAT > avg || GPA > 2.5 || sport === "football") {
//  alert("Welcome to Bubba State!");
// }
// else {
//  alert("Have you looked into appliance repair?");
// }

        // ------Ch#14 (Testing sets of conditions)------ 
// var age = 19;
// var res = "U.S."
// if (age > 65 || (age < 21 && res === "U.S.")) {
//         alert("ok")
// }
// else{
//         alert("no")
// }

       // ------Ch#14 (if statements nested) ------
// var c = 10;
// var d = 10;
// var x = 2;
// var y = 2;
// var h = "ok";
// var g; 
// if (c === d) {
//   if (x === y) {
//     g = h;
//     alert(h)
//   }
//   else if (a === b) {
//     g = h;
//   }
//   else {
//     e = f;
//   }
// }
// else {
//   e = f;
// }

       // ------Ch#15 (Arrays) ------
// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
// alert("Welcome to " + cities[4])

// var mixedArray = [1, "Bob", "Now is", true];
// alert(mixedArray[3]);

       // ------Ch#16 (Arrays:Adding and removing elements) ------
// var pets = [ "dog", "cat", "bird", "lizard", "fish", "gerbil", "snake"];
// pets.pop();
// console.log(pets);
// pets.push("hello");
// alert(pets);

       // ------Ch#17 (Arrays:Removing, inserting,and extracting elements)------
// var pets = [ "dog", "cat", "bird", "lizard", "fish", "gerbil", "snake"];
// pets.shift();
// console.log(pets);
// pets.unshift("fish", "ferret");
// console.log(pets);

// var pets = [ "dog", "cat", "bird", "lizard", "fish", "gerbil", "snake"];
// pets.splice(2,0, "pig", "duck", "emu");
// console.log(pets);
// var copy = pets.slice(2,4);
// console.log(copy);

       // ------Ch#18 (for loops)------
// var cityToCheck = "Tucson";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//  }
//  else{
//         alert("no")
//  }
// }


       // ------Ch#19 (for loops:Flags, Booleans, array length,and loopus interruptus)------
// var cityToCheck = "Honolulu";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];  
// var matchFound = "no";
// for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//         matchFound = "yes";
//         alert("It's one of the cleanest cities");
//  }
// }
// if (matchFound === "no") {
//  alert("It's not on the list");
// }

// var cityToCheck = "Honolulu";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var numElements = cleanestCities.length;
// var matchFound = false;
// for (var i = 0; i < numElements; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//    matchFound = true;
//    alert("It's one of the cleanest cities");
//    break;
//  }
// }
// if (matchFound === false) {
//  alert("It's not on the list");
// }

       // ------Ch#20 (for loops nested)------
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//  for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//  }
// }
// console.log(fullNames)

       // ------Ch#21 (Changing case)------
// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//   }
// }

       // ------Ch#22 (Strings:Measuring length and extracting parts)------
// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//  monthAbbrev = month.slice(0, 3);
// }
// alert(monthAbbrev);

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//    alert("No double spaces!");
//    break;
//  }
// }

       // ------Ch#23 (Strings:Finding segments)------
// var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth."
// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//   }
// };
// console.log(text);

// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// } 

// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");

       // ------Ch#24 (Strings:Finding a character at a location)------

// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//        alert("Exclamation point found!");
//        break;
//     }
// }

       // ------Ch#25 (Strings:Replacing characters)------

// var newText = text.replace("World War II", "the Second World War");

// //global replace.
// var newText = text.replace(/World War II/g, "the Second World War");


       // ------Ch#26 (Rounding numbers)------
// var scoreAvg = Math.round(.0678437);
// console.log(scoreAvg)

// var scoreAvg = Math.ceil(.000001);
// console.log(scoreAvg);

// var scoreAvg = Math.floor(.999999);
// console.log(scoreAvg);

       // ------Ch#27 (Generating random numbers)------
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// console.log(numberOfStars);

       // ------Ch#28 (Converting strings to integers and decimals)------
// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;
// console.log(yearsEligibleToVote);   

// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;
// console.log(qualifyingAge);