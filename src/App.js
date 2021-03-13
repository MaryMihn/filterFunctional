import React, {useState, useEffect} from 'react'
import CardWrapper from '../src/CardWrapper/CardWrapper'

function App() {
  const [people, setPeople] = useState([])

  useEffect(()=>{
    fetch('https://venbest-test.herokuapp.com/.')
    .then(response => response.json())
    .then(people =>{setPeople(people)})
  }, [])

  return (
      <div className="wrapper">
        <CardWrapper
          people={ people} 
        />
      </div>
  );
}

export default App;
