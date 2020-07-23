import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked!")}} />
      </React.Fragment>
    )
  }
}
// function App() {
//   return     <h1>Hello World</h1>;
// }

// const App = () => {
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   )
// }

// const Cat = () => {
//   return <div>Meow!</div>
// }

export default App;
