import React from 'react';
import logo from './logo.svg';
import './App.css';

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
     setSearchTerm(event.target.value);
   };
  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${page}`,
      {
     );
     setSearchResults(results);
   }, [searchTerm]);
 
   return (
     <div className="App">
       <input
         type="text"
         placeholder="Search"
         value={searchTerm}
         onChange={handleChange}
       />
       <ul>
          {searchResults.map(item => (
           <li>{item}</li>
         ))}
       </ul>
     </div>
   );
 }

export default App;
