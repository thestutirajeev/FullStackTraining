import React from 'react';
import { useState, useRef  } from 'react';
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
 //   uniqueWords = Array(...new Set(words));
//    uniqueWords = Array.from(new Set(words));
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
    event.preventDefault();
    setInputNumber(event.target.value);
      var num = inputNumber.split('').reverse().join('');
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
  function Five(props) {
    const email = props.email;
    var v = "Invalid";
    if(email.includes('@') && 
      email.includes('.') && 
      email.indexOf('@') > 7 && 
      email.indexOf('@') < 13 &&
      email.indexOf('.') - email.indexOf('@')-1 <= 5 &&
      email.length - email.indexOf('.') -1 <= 3
    ){
      v = "Valid";
    }

    //Method 2.  Email validation regex
    const emailRegex = /^[^\s@]{8,12}@[^\s@]{3,5}\.[^\s@]{2,3}$/;
    v = emailRegex.test(email) ? "Valid" : "Invalid";
    return( 
      <><div>
        <a>{email}</a>
        <p>Email is {v}</p>
        <p>Index of @: {email.indexOf('@')}</p>
        <p>Index of (.): {email.indexOf('.')}</p>
        <p>Characters between @ and . {email.indexOf('.') - email.indexOf('@')-1}</p>
        <p>Characters after (.) {email.length - email.indexOf('.')-1}</p>
      </div>
      </>
    );
  }
function Six() {
  const books = [
    {
      isbn: '978-3-16-148410-0',
      name: 'Book One',
      author: 'Author One',
      year: 2021,
      accessionNumber: '1125',
    },
    {
      isbn: '978-1-23-456789-0',
      name: 'Book Two',
      author: 'Author Two',
      year: 2019,
      accessionNumber: '378',
    },
    {
      isbn: '978-0-12-345678-9',
      name: 'Book Three',
      author: 'Author Three',
      year: 2021,
      accessionNumber: '378',
    },
    // Add more books as needed
  ];

  const [year, setYear] = useState('');

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  //Array.prototype.filter() method, which creates a new array with all elements that pass the test implemented by the provided function.
  const booksByYear = books.filter((book) => book.year.toString() === year);
  const booksByLocation = books.filter((book) => book.accessionNumber === '378');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Year"
        value={year}
        onChange={handleYearChange}
      />

      {/* Books Published in the Given Year */}
      {year && (
        <>
          <h2>Books Published in {year}</h2>
          {booksByYear.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Year</th>
                  <th>Accession Number</th>
                </tr>
              </thead>
              <tbody>
                {booksByYear.map((book) => (
                  <tr key={book.isbn}>
                    <td>{book.isbn}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.year}</td>
                    <td>{book.accessionNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No books found for the year {year}.</p>
          )}
        </>
      )}

      {/* Books Available in the 3rd Floor 7th Row 8th Column */}
      <h2>Books Available in the 3rd Floor 7th Row 8th Column</h2>
      {booksByLocation.length === 0 && <p>No books found in the 3rd Floor 7th Row 8th Column.</p>}
      <ol>
        {booksByLocation.map((book) => (
          <li key={book.isbn}>
            <strong>{book.name}</strong> by {book.author} (ISBN: {book.isbn}, Year: {book.year}) - Accession Number: {book.accessionNumber}
          </li>
        ))}
      </ol>
    </div>
  );
}
function Seven() {
  const [formData, setFormData] = useState({
    name: 'Stuti',
    dob: '2003-08-05',
    gender: 'Female',
    address: 'Lucknow',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({...prevData, [name]: value, }));
  };

  const isValidDOB = /^\d{4}-\d{2}-\d{2}$/.test(formData.dob);
  const dob = isValidDOB ? new Date(formData.dob) : new Date('2003-08-05');
  const age = new Date().getFullYear() - dob.getFullYear();
  const eligibleToVote = age >= 18;
  return (
    <>
      <div>
        <p style={{ color: eligibleToVote ? 'green' : 'red' }}>
          Dear Mr./Ms. {formData.name}, your age is {age} years.
          You are {eligibleToVote ? 'eligible' : 'not eligible'} to vote.
        </p>
      </div>

      <form>
        <label>Name:<input type="text" name="name" value={formData.name} onChange={handleChange}/></label>
        <br />
        <label>DOB:<input type="date" name="dob" value={formData.dob}  onChange={handleChange}/></label>
        <br />
        <label>Gender: <input type="text" /></label>
        <br />
        <label>Address: <input type="text"/></label>
      </form>
    </>
  );
}
function Eight() {
  const groceries = [
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Bananas' },
    { id: 3, name: 'Carrots' },
    { id: 4, name: 'Dates' },
    { id: 5, name: 'Eggs' },
  ];

  // State to manage items in the shopping cart
  const [cart, setCart] = useState([]);
  // State to toggle the visibility of the shopping cart
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Function to add an item to the cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    // The find() method searches through the cart array and returns the first element that satisfies the provided testing function. If no matching element is found, it returns undefined. 
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);
    if (!itemExists) {
      setCart([...cart, item]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {

    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Function to toggle the cart visibility
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {groceries.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => addToCart(item)}>Add to Basket</button>
          </li>
        ))}
      </ul>

      <button onClick={toggleCartVisibility}>
        {isCartVisible ? 'Hide' : 'Show'} Shopping Cart
      </button>

      {isCartVisible && (
        <div>
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
function Nine() {
  // Controlled Mode: State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    loungeType: "Standard",
    food: false,
    specialRequest: "",
    gender: "Male",
  });

  // Uncontrolled Mode: Refs for form elements
  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const guestsRef = useRef();
  const loungeTypeRef = useRef();
  const foodRef = useRef();
  const specialRequestRef = useRef();
  const genderRef = useRef();

  // Handle changes in controlled form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle submission in uncontrolled mode
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    alert(
      `Uncontrolled Mode Data:
      Name: ${nameRef.current.value}
      Email: ${emailRef.current.value}
      Date: ${dateRef.current.value}
      Time: ${timeRef.current.value}
      Guests: ${guestsRef.current.value}
      Lounge Type: ${loungeTypeRef.current.value}
      Food Service: ${foodRef.current.checked ? "Yes" : "No"}
      Special Request: ${specialRequestRef.current.value}
      Gender: ${genderRef.current.value}`
    );
  };

  return (
    <div>
      <h2>Lounge Booking Form</h2>
      
      {/* Controlled Mode Form */}
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />

        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} />

        <label>Guests:</label>
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} />

        <label>Lounge Type:</label>
        <select name="loungeType" value={formData.loungeType} onChange={handleChange}>
          <option value="Standard">Standard</option>
          <option value="VIP">VIP</option>
          <option value="Private">Private</option>
        </select>

        <label>Food Service:</label>
        <input type="checkbox" name="food" checked={formData.food} onChange={handleChange} /> Yes

        <label>Special Requests:</label>
        <textarea name="specialRequest" value={formData.specialRequest} onChange={handleChange} />

        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female

        <h3>Controlled Mode Output:</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Time:</strong> {formData.time}</p>
        <p><strong>Guests:</strong> {formData.guests}</p>
        <p><strong>Lounge Type:</strong> {formData.loungeType}</p>
        <p><strong>Food Service:</strong> {formData.food ? "Yes" : "No"}</p>
        <p><strong>Special Requests:</strong> {formData.specialRequest}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
      </form>

      <hr />

      {/* Uncontrolled Mode Form */}
      <h2>Uncontrolled Mode</h2>
      <form onSubmit={handleUncontrolledSubmit}>
        <label>Name:</label>
        <input type="text" ref={nameRef} />

        <label>Email:</label>
        <input type="email" ref={emailRef} />

        <label>Date:</label>
        <input type="date" ref={dateRef} />

        <label>Time:</label>
        <input type="time" ref={timeRef} />

        <label>Guests:</label>
        <input type="number" ref={guestsRef} />

        <label>Lounge Type:</label>
        <select ref={loungeTypeRef}>
          <option value="Standard">Standard</option>
          <option value="VIP">VIP</option>
          <option value="Private">Private</option>
        </select>

        <label>Food Service:</label>
        <input type="checkbox" ref={foodRef} /> Yes

        <label>Special Requests:</label>
        <textarea ref={specialRequestRef} />

        <label>Gender:</label>
        <input type="radio" name="genderUncontrolled" value="Male" ref={genderRef} /> Male
        <input type="radio" name="genderUncontrolled" value="Female" ref={genderRef} /> Female

        <button type="submit">Submit</button>
      </form>
    </div>
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
      <Four/>
      <p style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>Solution 5</p>
      <Five email = "stutirajeev@gmail.com" />
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
