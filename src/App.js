import { useState } from 'react'
import "./body.css"
import "./App.css"
import GetColor from './GetColor';

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div className="body" style={{backgroundColor:color}}>
       

          <div className="box">
          <GetColor color="red" name="red" setColor={setColor} className="red but"/>
          <GetColor color="green" name="green" setColor={setColor} className="green but"/>
          <GetColor color="blue" name="blue" setColor={setColor} className="blue but"/>
          <GetColor color="orange" name="orange" setColor={setColor} className="orange but"/>
          <GetColor color="violet" name="violet" setColor={setColor} className="violet but"/>
          <GetColor color="SlateBlue" name="SlateBlue" setColor={setColor} className="SlateBlue but"/>
          </div>
      </div>
    </>
  )
}

export default App
