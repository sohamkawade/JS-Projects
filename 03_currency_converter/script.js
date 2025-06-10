let from = document.getElementById("from");
let to = document.getElementById("to");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let btn = document.getElementById("btn")

fetch("https://api.frankfurter.app/currencies")
   .then((res) => res.json())
   .then((data) => {
      let currency_code = Object.keys(data);
      for (let currency of currency_code) {
         from.innerHTML += `<option value="${currency}">${currency}</option>`;
         to.innerHTML += `<option value="${currency}">${currency}</option>`;
      }
      from.value = "INR";
      to.value = "USD";
      convertFrom();
   });

function convertFrom() {
   let amt = parseFloat(t1.value);
   if (isNaN(amt) || amt <= 0) {
      t2.value = ""
      return
   }
   fetch(`https://api.frankfurter.app/latest?amount=${amt}&from=${from.value}&to=${to.value}`)
      .then(res => res.json())
      .then(data => {
         t2.value = data.rates[to.value];
      })
      .catch(err => console.log(err))
}


function convertTo() {
   let amt = parseFloat(t2.value);
   if (isNaN(amt) || amt <= 0) {
      t1.value = "";
      return
   }
   fetch(`https://api.frankfurter.app/latest?amount=${amt}&from=${to.value}&to=${from.value}`)
      .then((res) => res.json())
      .then((data) => {
         t1.value = data.rates[from.value];
      })
      .catch(err => console.log(err))
}

t1.addEventListener("input", convertFrom);
t2.addEventListener("input", convertTo);
from.addEventListener("change", convertFrom);
to.addEventListener("change", convertFrom);

btn.addEventListener("click", () => {
   let temp = from.value; // let temp = a;
   from.value = to.value; // a = b;
   to.value = temp;       // b = temp;
})