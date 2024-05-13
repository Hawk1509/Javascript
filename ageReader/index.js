
const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const resultElement = document.getElementById("resultElement");
let age;

myButton.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `Your Are Too Old`;
    }
    else if(age <= 10){
        resultElement.textContent = `You Are Too Young`;
    }
    else{
        resultElement.textContent = `You are the Right Age!!`;
    }
}