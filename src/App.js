import React from 'react'
import './App.css';

function App() {
  return (
    <div>
      <div style={{
          backgroundColor: 'pink', 
          height: 80,
          position: 'relative'
        }}>
        <span style={{ position: 'absolute', top: '40%', left: '50%',}}>Hello autoDeployment</span>
      </div>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
