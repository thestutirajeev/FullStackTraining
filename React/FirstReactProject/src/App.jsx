import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function One() {
    const today = new Date();
    const days = [];
  
    // Generate the next 5 days
    for (let i = 1; i <= 5; i++) {
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + i);
      days.push(futureDate.toDateString());
    }
  
    return (
      <div>
        <h5>Next 5 Days</h5>
        <ul style={{ color: 'magenta' }}>
          {days.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
      </div>
    );
  }
function Two() {
    const [inputNumber, setInputNumber] = useState('');
    const [reversedNumber, setReversedNumber] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInputNumber(value);
        setReversedNumber(reverseString(value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Original Number: ${inputNumber}\nReversed Number: ${reversedNumber}`);
    };

    const reverseString = (str) => {
        return str.split('').reverse().join('');
    };

    return (
        <form
            style={{ border: "solid", padding: "20px", borderRadius: "10px", margin: "20px", width: "50%", marginLeft: "auto", marginRight: "auto" }}
            onSubmit={handleSubmit}>
        <label>Enter a number:
            <input 
            type="text" 
            name="number" 
            value={inputNumber} 
            onChange={handleChange}
            />
        </label>
        <input type="submit" value="Submit" />
        <p>Original Number: {inputNumber}</p>
        <p>Reversed Number: {reversedNumber}</p>
        </form>
    );
}
function Three(props) {
    const reverseString = (str) => {
        return str.split('').reverse().join('');
    };
    const { str, l, h } = props;
    const length = str.length;
    const substr = str.substring(l, h);
    const reversedStr = reverseString(str);
    const words = str.split(' ');
    var uniqueWords = [];
    for(let i = 0; i < length; i++) {
        if(uniqueWords.indexOf(words[i]) === -1) {
            uniqueWords.push(words[i]);
        }
    }
    uniqueWords = Array.from(new Set(words));
    return( 
      <><div style={{ border: "solid", padding: "20px", borderRadius: "10px", margin: "20px", width: "50%", marginLeft: "auto", marginRight: "auto" }}>
        <p>Original String: {str}</p>
        <p>a. Length of the string: {length}</p>
        <p>b. Substring from {l} to {h}: {substr}</p>
        <p>c. Reversed String: {reversedStr}</p>
        <p>d. Unique Words: {uniqueWords.join(', ')}</p>
      </div>
      </>
    );
}
function Four() {
  const [inputNumber, setInputNumber] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (event) => {
      setInputNumber(event.target.value);
      var num = inputNumber.split('').reverse().join('');
      num = parseInt(num);
      if(num % 2 == 0){
          setOutput("Even");
      }else{
          setOutput("Odd");
      }
  }

  return( 
    <>
    <form style={{ border: "solid", padding: "20px", borderRadius: "10px", margin: "20px", width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <input type = "text" value = {inputNumber} onChange = {handleSubmit} />
      <p>Reverse of input is: {output}</p>
    </form>
    </>
  );
}
  function Five() {
    return( 
      <><div>
      </div>
      </>
    );
  }
  function Six() {
    return( 
      <><div>
      </div>
      </>
    );
  }
  function Seven() {
    return( 
      <><div>
      </div>
      </>
    );
  }
  function Eight() {
    return( 
      <><div>
      </div>
      </>
    );
  }
  function Nine() {
    return( 
      <><div>
      </div>
      </>
    );
  }
  
function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'darkblue' }}>SCHOOL OF COMPUTER SCIENCE ENGINEERING AND INFORMATION SYSTEMS</h1>
      <h2 style={{ textAlign: 'center', color: 'darkgreen' }}>WINTER SEMESTER 2024-2025</h2>
      <h3 style={{ textAlign: 'center', color: 'darkred' }}>PMCA601P – FULL STACK WEB DEVELOPMENT LAB</h3>
      
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 1</p>  
      <One />
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 2</p>
      <Two />
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 3</p>
      <Three str = "This is my String and my String" l = "8" h = "17" />
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 4</p>
      <Four />
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 5</p>
      <Five />
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 6</p>
      <Six />
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 7</p>
      <Seven />
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 8</p>
      <Eight />
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 9</p>
      <Nine />
    </>
  );
}

export default App;
