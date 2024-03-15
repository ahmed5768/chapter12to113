// Task no 01
var upperOrLower = prompt("Write a Alphabet", "A, Z, a, z")
if(upperOrLower == "A"){
    alert("A = 65")
}
else if(upperOrLower == "Z"){
    alert("Z = 90")
}
else if(upperOrLower == "a"){
    alert("a = 97")
}
else if(upperOrLower == "z"){
    alert("z = 122")
}
else{
    alert("Not Found")
}

// Task no 02
var firtsNum = prompt("Enter Firts Number")
var secondNum = prompt("Enter Second Number")
if(firtsNum < secondNum){
    alert(firtsNum+ " is < "+ secondNum)
}
else if(firtsNum > secondNum){
    alert(firtsNum+ " is > "+ secondNum)
}
else if(firtsNum === secondNum){
    alert(firtsNum+ " is equal "+ secondNum)
}
else{
    alert("Please enter a number")
}

// Task no 03
var num = prompt("Enter a number")
if(num > 0){
    alert(num + " is positive")
}
else if(num < 0){
    alert(num + " is negative")
}
else if(num == 0){
    alert(num + " is Zero")
}
else{
    alert("Please enter a number")
}

// Task no 04
var vowel = prompt("Enter a vowels letter", "lower case alphabets")
if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
    alert(`${vowel} is a vowel letter`)
}
else{
    alert("Enter a correct vowel letter")
}

// Task no 05
var originalPassword = ("abc")
var password = prompt("Enter a password")
if(originalPassword == password){
    alert("Correct Password")
}
else if(originalPassword == ""){
    alert("Please enter a password")
}
else{
    alert("Incoreect Password")
}

// Task no 06
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

// Task no 07
var time = prompt("Enter a time in a 24hour format")
if(time >= 0 && time < 12){
    alert("Good morning")
}
else if(time >= 12 && time < 17){
    alert("Good afternoon")
}
else if(time >= 17 && time < 21){
    alert("Good evening")
}
else if(time >= 21 && time <= 23){
    alert("Good night")
}
else{
    alert("Please enter a time")
}