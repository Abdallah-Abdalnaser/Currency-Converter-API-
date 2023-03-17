let apiKey = "a383682ee84899db5b76efc8";
let url =`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
let amount = document.querySelector(".contaner .currncy-converter form .money input[type='number']");
let selectFrom = document.getElementById("from");
let selectTo = document.getElementById("to");
let btn = document.querySelector(".contaner .currncy-converter form button");
let result = document.querySelector(".contaner .currncy-converter .converter");
function addOption(option) {
    for (const key in option) {
        let opt = document.createElement("option");
        opt.innerHTML=key;
        selectFrom.append(opt);
    }
    for (const key in option) {
        let opt = document.createElement("option");
        opt.innerHTML=key;
        selectTo.append(opt);
    }
    selectFrom.value="EGP";
    selectTo.value="USD";
}
function currentconverter(currency) {
    result.style.display="block";
    let value =((amount.value * currency[selectFrom.value]) / currency[selectTo.value]).toFixed(2);
    result.innerHTML=`${amount.value} ${selectFrom.value} = ${value} ${selectTo.value}`;
};
fetch(url).then((res)=>{
    return res.json();
}).then((data)=>{
    addOption(data.conversion_rates);
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        currentconverter(data.conversion_rates);
    });
});