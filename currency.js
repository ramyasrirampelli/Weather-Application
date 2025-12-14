function getCurrency(){
    let amount=document.getElementById("amount").value;
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    convertCurrency(amount,from,to);
}

async function convertCurrency(amount,from,to){
    const URL = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd464a0af82msh9e223fca024f305p1a6bb1jsn2567730233db',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

try {
	const response = await fetch(URL, options);
	if(!response.ok){
        throw new Error("Something Went Wrong in API"); 
    }
    const data = await response.json();
	showCurrency(data);
} catch (error) {
	console.error(error);
}
}

function showCurrency(data) {
  document.getElementById("placeholder").style.display = "none";

  document.getElementById("resultData").style.display = "block";

  document.getElementById("toText").innerHTML =
    `${data.query.to}`;

  document.getElementById("finalAmount").innerHTML =
    data.result.toFixed(2);
}

