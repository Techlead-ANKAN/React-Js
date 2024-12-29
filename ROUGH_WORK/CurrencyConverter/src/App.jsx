import { useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from "./Hooks/useCurrencyInfo"
import './App.css'

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currency_data = useCurrencyInfo(from);

  const option = Object.keys(currency_data)

  const swap = ()  => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currency_data[to])
  }

  return (
    <>
    <form onSubmit={(e) => {e.preventDefault(); convert();}}>
      
      <InputBox label="From" amount={amount} onAmountChange={(amount) => setAmount(amount)} onCurrencyChange={(currency) => {setAmount(amount); setFrom(currency)}} currencyOptions={option} selectCurrency={from}/>
    
      <InputBox label="To" amount={convertedAmount} onCurrencyChange={(currency) => setTo(currency)} currencyOptions={option} selectCurrency={to}/>

    </form>


    <button onClick={swap}>Swap</button>
    
    <button type="submit" onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
    </>
  )
}

export default App
