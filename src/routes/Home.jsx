import React from 'react';
import { Link } from 'react-router-dom';
import Array_1 from '../data/Array_1.json';
import Array_2 from '../data/Array_2.json';

export const Home = () => {
  const handleClick = () => {
    var Array_3 = Array_1.concat(Array_2);
    var Array_4 = [];

    for (let i = 0; i < Array_3.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < Array_4.length; j++) {
        if (Array_3[i].id === Array_4[j].id) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        Array_4.push(Array_3[i]);
      }
    }

    console.log("Answer: ", Array_4);

    return Array_4;
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {/* Pass state to the "list" route */}
        <Link to={{ pathname: '/list', state: handleClick() }}>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  );
};
