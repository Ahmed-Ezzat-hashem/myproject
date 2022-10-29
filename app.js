                        // task-2

// Asks the user for this name in a dialog
var name = prompt("What's your name: ");

// Outputs a welcome message with this name in another dialog
alert("Welcome, " + name);

                        //task-3

// Asks the user for a number in a dialog
var num = parseInt(prompt("Please enter a number: "));

// Outputs the square of that number in another dialog
alert(num**2);

                        // task-4

// Asks the user for two numbers in a dialog
var num1 = parseInt(prompt("Please enter first number: "));
var num2 = parseInt(prompt("Please enter second number: "));

// Outputs the average of these two numbers in another dialog
alert((num1+num2)/2);

                        // task-5

// Asks the user for a number (N) in a dialog  
// عدد المرات اللي هتظهرله نافذة تقوله يدخل رقم 
var num_n = parseInt(prompt("Please enter N number: "));

// Asks the user for others numbers N times in a dialog
// الارقام اللي هندخلها علي حسب عدد المرات اللي دخلناه فوق
var result=0;
while (num_n>0){
    var num = parseInt(prompt("Please enter a number: "));
    num_n--;
    result += num;
}

// Outputs the N numbers in another dialog
alert(result);

                        // task-6

// Asks the user for a number (C) in a dialog
var num = parseInt(prompt("Please enter a number: "));

// Outputs the corresponding value of this number in fahrenheit in another dialog
// To convert number to fahrenheit = number*1.8+32.
alert((num*1.8)+32);

                        // task-7

// Asks the user for a string in a dialog
var str = prompt("Please enter a string: ");

// Outputs the upper case of this string in another dialog
alert(str.toUpperCase());

                        // task-8

// Asks the user for a string in a dialog
var str = prompt("Please enter a string: ");
// هسيبك تحاول تفهم انا عملت ايه؟
var result = 0;
var str_len = str.length-1; 
while (str_len>=0){
    // hint: small characters start with 97 in ASCII 
    result += str.toLowerCase().charCodeAt(str_len)-96;
    str_len--;
}

// Outputs the sum of the string character's ranks in the alphabtical order in another dialog
alert(result);


                            // task-14

// Asks the user for the length of an array in a dialog
var user = parseInt(prompt("lenght of array"));
var arr = [];
var numOfReapeats = 0;
var mostReapets = 1;
var num;
// Asks the user for each value in the array in a dialog
while (user > 0){
    var str = prompt("enter number: ")
    arr.push(str);
    user--;
}
// Outputs the most frequent number and the number of frequency in another dialog
var len = arr.length-1;
for (var i = 0; i<=len; i++){
    for (var j=i; j <=len; j++){
        if (arr[i]==arr[j]){
            numOfReapeats++;
            if (mostReapets < numOfReapeats){
                mostReapets = numOfReapeats;
                num = arr[i];
            }
        }
    }
    numOfReapeats=0;
}
console.log(num+" with frequency of "+mostReapets);

// Git task
var user = prompt("enter your name?");
var str_split = user.split("");
var reverse_split = str_split.reverse();
var merge_split = reverse_split.join("");

console.log(merge_split);
