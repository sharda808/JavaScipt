const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
const dropdowns = document.querySelector(".dropdown select");
const btn = document.querySelector("form btn");
 for(let select of dropdowns){
    for(currcode in countryList){
let newOption = document.createElement("option");
newOption.value= currcode;
select.append(newOption);
    }
select.addEventListener("change",(evt) => {
    upadteFlag(evt.target);
});
 }
const updateFlag =(element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
let newSrc = `https://flagsapi.com/${countryCode}countryCode/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = newSrc;
};
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log(amtVal);
});
