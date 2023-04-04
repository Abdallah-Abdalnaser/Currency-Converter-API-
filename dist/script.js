"use strict";
let apiKey = "a383682ee84899db5b76efc8", url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`, amount = document.querySelector(".contaner .currncy-converter form .money input[type='number']"), selectFrom = document.getElementById("from"), selectTo = document.getElementById("to"), btn = document.querySelector(".contaner .currncy-converter form button"), result = document.querySelector(".contaner .currncy-converter .converter");
function addOption(option) {
    for (const key in option) {
        let opt = document.createElement("option");
        opt.innerHTML = key;
        selectFrom.append(opt);
    }
    for (const key in option) {
        let opt = document.createElement("option");
        opt.innerHTML = key;
        selectTo.append(opt);
    }
    selectFrom.value = "EGP";
    selectTo.value = "USD";
}
function currentconverter(currency) {
    result.style.display = "block";
    let value = ((amount.value * currency[selectTo.value] / currency[selectFrom.value])).toFixed(2);
    result.innerHTML = `${amount.value} ${selectFrom.value} = ${value} ${selectTo.value}`;
}
;
fetch(url).then((res) => {
    return res.json();
}).then((data) => {
    addOption(data.conversion_rates);
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        currentconverter(data.conversion_rates);
    });
});
