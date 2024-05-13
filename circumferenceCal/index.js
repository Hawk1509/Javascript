const pi = 3.14159;
let radius;
let circumference;

radius = Number(radius);

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("mySubmit").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}