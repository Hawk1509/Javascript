const decreBtn = document.getElementById("decre");
const increBtn = document.getElementById("incre");
const reset = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");

let count = 0;

increBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}