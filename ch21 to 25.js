//  1.
//  var a = prompt ("First name");
//  var b = prompt ("Last name");
//  var fullname = a + " " + b ;
// document.write("Welcome" + " " + fullname + "<br>" + "<br>");

// 2.
// var ex2 =  prompt ("What's your favourite Mobile Phone model");
//  document.write("My favorite phone is: "+ " <br>" + ex2 +"<br>" + "Length of string:" + " " +ex2.length);



// 3.
// var ex3 ="Pakistani";
// document.write("String: "+ ex3  +"<br>" + "Index of 'n': " +ex3.indexOf("n"));


// 4.
// var ex4 = "Hello World";
// document.write("String: "+ ex4  +"<br>" + "Last Index of 'l': " +ex4.lastIndexOf('l')+"<br>"+"<br>"
// 5.
// var ex5 = "Pakistani";
// document.write("String: "+ ex5  +"<br>" + "Character at Index 3 : " +ex5.charAt(3));


// 6.
// var a = prompt ("First name") + " "
// var b = prompt ("Last name")
// var d = a.concat(b)
// document.write(d)

// 7.
// var ex7 = "Hyderabad"
// var replace = ex7.replace("Hyder" , "Islam")
// document.write("City: "+ ex7+"<br>" + "After replacement: " +replace)


// 8.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var ex8 = message.replace(/and/g , "&")
// document.write(ex8.italics().fontcolor("orange"))


// 9.
// var ex9 = "472"
// var num = Number('472')
// document.write("Value: " + ex9 + "<br> Type: string")
// document.write("<br>Value: " + num + "<br> Type: number")


// 10.
// var ex10 = prompt("Your favourite Dry fruit:" )
// var capital = ex10.toUpperCase()
// document.write("User Input: " +ex10)
// document.write("<br> Uppercase: "+capital)


// 11.
// var ex11 = prompt("Title of js:")
// var firstChar = ex11. slice(0,1)
// firstChar = firstChar.toUpperCase()
// var remaining=  ex11.slice(1)
// remaining = remaining.toLowerCase()
// var ex11 = firstChar + remaining
// document.write(ex11)


// 12.
// var ex12 = 35.36.toString()
// var num = ex12.replace('.' , '')
// document.write("Number: " + ex12)
// document.write("<br> Result: "+num)


// 13.
// var ex13 = prompt("Username : ")
// if( ex13 === String.fromCharCode (33) && ex13 == String.fromCharCode(44) && ex13 == String.fromCharCode(46) && ex13 == String.fromCharCode (64)  ){
//   alert("please enter valid Username")
// }
// else{
//     alert(ex13)
// }



14.
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var ex14 = prompt("Welcome to Our Bakery Mam/Sir" + "<br> "+ "what do you want to order? ")
// ex14 = ex14.toLowerCase()
//  for(i = 0 ; i<5 ; i++){
//         if(a[i] == ex14){
//             alert(ex14 + " is available at index " + i +" in our bakery");
//             break;
//         }
//     }
//     if(a[i] !== ex14){
//         alert("We are sorry. "+ ex14 + " is not available in our bakery");



15
// var password= prompt("Enter your password" + "   ( It should contain alphabets and numbers, It should not start with a number, It must at least 6 characters long  )");
// var letters = /^[0-9a-zA-Z]+$/; 
// if(password[0] >= String.fromCharCode(48) && password <= String.fromCharCode(57) ){
//     alert("Password can not start with a number")
// }
// else if (password.length < 6){
//   alert("Enter a valid password. (use atleast 6 characters)")
// }

// else if(password.match(letters)){ 
// alert("Your registration is correct" ); }

// else{
//   alert("Invalid Password!");
//   }
 


16
// var university = "University of Karachi";
// var a1=university.split("");
// for (i=0;i<a1.length;i++)

// {

// document.write(a1[i] + "<br >");

// }




17
// var ex17 = prompt("Enter your country name:")
// var a = ex17.charAt(ex17.length-1)
// alert(a)



18
// var a = "The quick brown fox jumps over the lazy dog"
// var b = a.toLowerCase()
// var c = b.match(/the/g).length
// alert("Text: The quick brown fox jumps over the lazy dog.  There are '" + c + "' occurrences of word “the”")













