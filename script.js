const data = {
    USD: {EUR: 0.82, GBP: 0.74, TRY: 7.37},
    EUR: {USD: 1.23, GBP: 0.91, TRY: 9.05},
    GBP: {USD: 1.35, EUR: 1.10, TRY: 10.02},
    TRY: { EUR: 0.11, USD: 0.14, GBP: 0.01}
}

// const currencyKeys = Object.keys(data);
// for(let i = 0; i<currencyKeys.length; i++) {
//     const currencyKeyDiv = document.createElement("div");
//     const currencyKeyInput = document.createElement("input");
//     currencyKeyInput.setAttribute("type", "radio");
//     currencyKeyInput.setAttribute("name", "currency_from");
//     currencyKeyInput.setAttribute("value", currencyKeys[i]);

//     const currencyKeyLabel = document.createElement("label");
//     currencyKeyLabel.setAttribute("for", currencyKeys[i]);
//     currencyKeyLabel.textContent = currencyKeys[i];

//     currencyKeyDiv.appendChild(currencyKeyInput);
//     currencyKeyDiv.appendChild(currencyKeyLabel);

//     const parentEl = document.querySelector("#currency-box-from");
//     parentEl.appendChild(currencyKeyDiv);
// }

const currencyKeys = Object.keys(data);
//from
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";

//to
const parentToEl = document.querySelector("#currency-box-to");
const toInputName2 = "currency_to";

function createCurrencyElements(elements, root, inputName) {
    for(let i = 0; i < elements.length; i++) {
        const currencyKeyDiv = document.createElement("div");
        const currencyKeyInput = document.createElement("input");
        currencyKeyInput.setAttribute("type", "radio");
        currencyKeyInput.setAttribute("name", inputName);
        currencyKeyInput.setAttribute("id", inputName + elements[i]);
        currencyKeyInput.setAttribute("value", elements[i]);
    
        const currencyKeyLabel = document.createElement("label");
        currencyKeyLabel.setAttribute("for", inputName + elements[i]);
        currencyKeyLabel.textContent = elements[i];
    
        currencyKeyDiv.appendChild(currencyKeyInput);
        currencyKeyDiv.appendChild(currencyKeyLabel);
    
        root.appendChild(currencyKeyDiv);
    }
}

createCurrencyElements(currencyKeys, parentEl, fromInputName);
createCurrencyElements(currencyKeys, parentToEl, toInputName2);


const calculateButton = document.querySelector("#calculate-button");
calculateButton.addEventListener("click", function() {

    const fromTarget = document.querySelector("input[name='currency_from']:checked");
    const toTarget = document.querySelector("input[name='currency_to']:checked");
    const amount = document.querySelector("input[name='amount']");

    if (!fromTarget || !toTarget) {
        alert("Bir seçim yapmalısınız!");
        return;
    }
    
    
    // if (isNan(amount) || amount == "") {
    //     alert("Amount bir sayı olmalı");
    //     currencyResult.innerHTML = "";
    //     return;
    // }

    if (fromTarget.value === toTarget.value) {
        alert("Farklı para birimleri seçin!");
        currencyResult.innerHTML = "";
        return;
    }


    // Kimden çeviriyoruz
    const fromTargetValue = fromTarget.value;
    // Kime çeviriyoruz
    const toTargetValue = toTarget.value;
    // amount
    const amountValue = amount.value;

    if (isNaN(amountValue) || amount == "") {
        alert("Lütfen bir sayı giriniz!");
        currencyResult.innerHTML = "";
        return;
    }


    const currentCurrencyObject = data[fromTargetValue];
    const resultForOne = currentCurrencyObject[toTargetValue];
    const result = amountValue * resultForOne;


    const currencyResult = document.querySelector(".currency-result");
    currencyResult.innerHTML = amountValue + " " + fromTargetValue + " = " + result + " " + toTargetValue;


});
