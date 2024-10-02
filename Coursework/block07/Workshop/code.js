/**
 * 1)declare a string and assign it the value of 
  "You have received this message because you have been chosen 
  to open an important vault. Here is the secret combination:"
 *2)declare and assign three variables, one for each code
 *3)code1 will be using addition
 *4) code2 will be using multiplication
 *5)code3 will be using subtraction
 *6)display string and the codes to the user
 */

//function displaying strings into HTML
function message() {
    //string for the message
    const userMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
    //strings for each code
    //code 1 - addition
    let code1 = 5 + 5
    //code2 -- multiplication
    let code2 = 20 * 2
    //code3 -- subtraction
    let code3 = 41 - 2

    //alert message displaying message and codes
    alert(userMessage + "\n" + code1 + " " + code2 + " " + code3)
}



