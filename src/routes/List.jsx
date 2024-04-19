import React from 'react';

export default function List(props) {
  const { state } = props;

  console.log("State prop:", state);

  return (
    <div>
      <h1>List Component</h1>
      <ul>
        {state && state.map((item) => (
          <li key={item.id}>
            <div>Name: {item.name}</div>
            <div>Body: {item.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

