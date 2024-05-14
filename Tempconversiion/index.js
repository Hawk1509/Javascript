const textBox = document.getElementById("textBox");
const toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");
const yes =document.getElementById("yes");
let temp;

function convert(){
    if(toFah.checked){
        temp = Number(textBox.value);
        temp = temp*9 / 5 +32;
        result.textContent = temp.toFixed(1) + " F";
        yes.textContent = "You Have Been Converted!";

    }
    else if(toCel.checked){
        temp = Number(textBox.value);
        temp = (temp-32)*(5/9);
        result.textContent = temp + " C";
        yes.textContent = "You Have Been Converted!";

   
    }
    else{
        yes.textContent = "You Shall Not Be Converted!";
        result.textContent = "Select a Unit";
    }
    
}