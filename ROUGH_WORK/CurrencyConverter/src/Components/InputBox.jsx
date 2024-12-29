import React from 'react'
import "./InputBox.css"

function InputBox({label, amount, onAmountChange, onCurrencyChange, currencyOptions=[], selectCurrency="usd", amountDisable=false, currencyDisable=false}) {
  return (

    <>
    
    <div class="inputbox">
        <div className="box1">
            <label htmlFor="">{label}</label>
            <input type="number" disabled={amountDisable} value={amount} onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}/>
        </div>


        <div className="box2">
            <label htmlFor="">Currency Type</label>
            <select name="" id="" value={selectCurrency} onChange={(e) =>{onCurrencyChange && onCurrencyChange(e.target.value)}} disabled={currencyDisable}>
                {currencyOptions.map((currency) => (<option key={currency} value={currency}>{currency}</option>))}
            </select>
        </div>
    </div>
    
    </>
    
  );
}

export default InputBox