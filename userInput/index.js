document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hola, ${username}!`
}