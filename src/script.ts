let apiKey:string = "a383682ee84899db5b76efc8",
url:string =`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`,
amount = document.querySelector(".contaner .currncy-converter form .money input[type='number']") as HTMLFormElement,
selectFrom = document.getElementById("from") as HTMLFormElement,
selectTo = document.getElementById("to") as HTMLFormElement,
btn = document.querySelector(".contaner .currncy-converter form button")as HTMLButtonElement,
result = document.querySelector(".contaner .currncy-converter .converter") as HTMLFormElement;
function addOption(option:object) {
    for (const key in option) {
        let opt = document.createElement("option") as HTMLElement;
        opt.innerHTML=key;
        selectFrom.append(opt);
    }
    for (const key in option) {
        let opt = document.createElement("option") as HTMLElement;
        opt.innerHTML=key;
        selectTo.append(opt);
    }
    selectFrom.value="EGP";
    selectTo.value="USD";
}
function currentconverter(currency:object) {
    result.style.display="block";
    let value:string =((amount.value * currency[selectTo.value]/ currency[selectFrom.value])).toFixed(2);
    result.innerHTML=`${amount.value} ${selectFrom.value} = ${value} ${selectTo.value}`;
};
fetch(url).then((res:Response)=>{
    return res.json();
}).then((data)=>{
    addOption(data.conversion_rates);
    btn.addEventListener("click",(e:MouseEvent)=>{
        e.preventDefault();
        currentconverter(data.conversion_rates);
    });
});