let rates = {}; 

async function getCurrencies() {
    const res = await fetch("https://open.er-api.com/v6/latest/EUR");
    const data = await res.json();

    rates = data.rates; 

    const currencyList = Object.keys(rates);

    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");

    
    currencyList.forEach(code => {
        const option1 = document.createElement("option");
        option1.value = code;
        option1.textContent = code;

        const option2 = option1.cloneNode(true);     // copy option1 for the second dropdown



        fromSelect.appendChild(option1);
        toSelect.appendChild(option2);
    });

    
    fromSelect.value = "EUR";
    toSelect.value = "DKK";

}


function convert() {
   
    const amount = Number(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (!amount) {
        document.getElementById("result").textContent = "Enter an amount";
        return;
    }

    const result = amount * (rates[to] / rates[from]);

    document.getElementById("result").textContent =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}

convert();


document.getElementById("amount").addEventListener("input", convert);
document.getElementById("from").addEventListener("change", convert);
document.getElementById("to").addEventListener("change", convert);

getCurrencies();