function adOptions(opFrCrVal, opFrCrInTxt, opToCrVal, opToCrInTxt) {
    let optionFromCurrency = document.createElement("option");
    optionFromCurrency.value = opFrCrVal;
    optionFromCurrency.innerText = opFrCrInTxt;
    document.forms.fromCurrency.fromCurrency.appendChild(optionFromCurrency);
    let optionToCurrency = document.createElement("option");
    optionToCurrency.value = opToCrVal;
    optionToCurrency.innerText = opToCrInTxt;
    document.forms.toCurrency.toCurrency.appendChild(optionToCurrency);
}


let fetchapiOfcurrenciRate = async(nameOfCurrency) => {
    let fetc = await fetch(`https://v6.exchangerate-api.com/v6/f4deb16290f6ee89f9faf50b/latest/${nameOfCurrency}`);
    let jsonForm = await fetc.json()
    console.log(jsonForm);
    return jsonForm
}


let fetchapiOfcurrencyName = async() => {
    let fetc = await fetch("https://v6.exchangerate-api.com/v6/f4deb16290f6ee89f9faf50b/codes");
    let jsonForm = await fetc.json()
    return jsonForm.supported_codes
}

fetchapiOfcurrencyName().then((res) => {
    let shortNames = res.map((val) => {
        return adOptions(val[0], val[1], val[0], val[1])
    })

})


function convertClick() {
    let valOfFromCurrency = document.forms.fromCurrency.fromCurrency.value;
    let valOfToCurrency = document.forms.toCurrency.toCurrency.value;
    let valofAmount = document.forms.chosenAmount.chosenAmount.value;
    let valofresult = document.forms.result.result
    console.log(valofresult);

    console.log(valOfToCurrency + "deyer goturuldu");
    fetchapiOfcurrenciRate(valOfFromCurrency).then((result) => {
        let totalVal = result.conversion_rates[valOfToCurrency] * valofAmount;
        console.log(totalVal);

        valofresult.value = totalVal



    })

}