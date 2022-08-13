
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  },[])

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const filteredRobots = robots.filter(user => {
    return user.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  if (!robots)
    return <h1 className='tc f1'> Loading all the Robots...</h1>
  else
    return (
      <div className='tc'>
        <h1 className='f1'>My Robots!</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
}

export default App;
