const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalButton = document.getElementById("payPalButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You Are Subscribed`;
    }
    else{
        subResult.textContent = `You Are Not Subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You Are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You Are paying with MastercCard`;
    }
    else if(payPalButton.checked){
        paymentResult.textContent = `You Are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `No payment option selected`;
    }
}
