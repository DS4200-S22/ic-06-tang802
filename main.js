/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    console.log("Button 1 was clicked"); 
    let newText = "Button1 was clicked!";
    let buttonDiv = document.getElementById("button-div");
    let printRand = document.getElementById("random_num")
    let myRand = Math.random() * 100;
    buttonDiv.innerHTML = newText;
    printRand.innerHTML = myRand;
}

function button2Clicked() {
    console.log("Button 2 was clicked");
    let text2 = "Button 2 was clicked!";
    let buttonDiv2 = document.getElementById("button-div2");
    buttonDiv2.innerHTML = text2;

}