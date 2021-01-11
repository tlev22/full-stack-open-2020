import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { unstable_concurrentAct } from 'react-dom/test-utils'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({text, value}) => {
  return (
    
      <tr>
        <td>{text}</td> 
        <td>{value}</td>
      </tr>      
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text="good"/>
        <Button handleClick={handleNeutralClick} text="neutral"/>
        <Button handleClick={handleBadClick} text="bad"/>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics text="good" value={good}/>
          <Statistics text="neutral" value={neutral}/>
          <Statistics text="bad" value={bad}/>
          <Statistics text="all" value={good+neutral+bad} />
          <Statistics text="average" value={(good-bad)/(good+neutral+bad)} />
          <Statistics text="positive" value={(good)/(good+bad+neutral)*100 + " %"}/>
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)