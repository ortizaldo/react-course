import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

function greeting() {
  return <h1>Hello world</h1>;
}

root.render(
  <div>
  <greeting></greeting>  
  </div >
)