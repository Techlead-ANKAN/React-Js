import React, {useContext} from 'react'
import { DateContext } from '../context/DateContext'

function Home() {

  const {date, setDate} = useContext(DateContext);

  return (
    <div>
      <input type="date" onChange={(e) => setDate(new Date(e.target.value))}/>
      <p>Date: {date ? date.toDateString() : "No date selected"}</p>
    </div>
  )
}

export default Home