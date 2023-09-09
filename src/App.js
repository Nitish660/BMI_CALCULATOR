import React, { useState } from "react";
import './index.css'
function App() {
  const [weight, setWeight] = useState('')
  const [Height, setHeight] = useState('')
  const [bmi, setbmi] = useState('')
  const [message, setmessage] = useState('')

  let imgsrc = ''

  let calbmi = (event) => {
    event.preventDefault()

    if (Height === 0 || weight === 0) {
      alert('please enter a valid weight and height')
    }
    else {
      let bmi = (weight / (Height * Height) * 703)
      setbmi(bmi.toFixed(1))

      //message

      if (bmi < 25) {
        setmessage('You are undertweight')
      } else if (bmi >= 25 && bmi < 30) {
        setmessage('You ara healthy')
      }
      else {
        setmessage('you are overweight')
      }
    }
  }




  let reload = () => {
    window.location.reload()
  }


  return (

    <>
      <div className="cointainer">
        <h2 className="center">BMI CALCULATOR</h2>
        <form onSubmit={calbmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder="Enter your weight" value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height</label>
            <input type="text" placeholder="Enter your Height" value={Height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" type="submit" onClick={reload}>Reload</button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>


      </div>

    </>
  );
}

export default App;
