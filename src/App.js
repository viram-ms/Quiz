// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from './components/ButtonAppBar.js';
import HorizontalLabelPositionBelowStepper from './components/HorizontalLabelPositionBelowStepper.js';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'We can go for keys when there is a possibility that our user could change the data',
          choices: [
            {
              id: 'a',
              text: 'Keys',
            },
            {
              id: 'b',
              text: 'Ref',
            },
            {
              id: 'c',
              text: 'Both',
            },
            {
              id: 'd',
              text: 'None of the above',
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: 'JSX is typesafe.',
          choices: [
            {
              id: 'a',
              text: 'True',
            },
            {
              id: 'b',
              text: 'False',
            }
          ],
          correct: 'a'
        },
        {
          id: 3,
          text: 'React merges the object you provide into the current state using __________.',
          choices: [
            {
              id: 'a',
              text: 'state()',
            },
            {
              id: 'b',
              text: 'setState()',
            },
          ],
          correct: 'b'
        },
        {
          id: 4,
          text: 'Arbitrary inputs of components are called __________',
          choices: [
            {
              id: 'a',
              text: 'Keys',
            },
            {
              id: 'b',
              text: 'Props',
            },
            {
              id: 'c',
              text: 'Elements',
            },
            {
              id: 'd',
              text: 'Ref',
            }
          ],
          correct: 'b'
        },
        {
          id: 5,
          text: 'Which of the following needs to be updated to achieve dynamic UI updates?',
          choices: [
            {
              id: 'a',
              text: 'State',
            },
            {
              id: 'b',
              text: 'Props',
            }
          ],
          correct: 'a'
        },
        {
          id: 6,
          text: '_________ can be done while more than one element needs to be returned from a component.',
          choices: [
            {
              id: 'a',
              text: 'Abstraction',
            },
            {
              id: 'b',
              text: 'Packing',
            },
            {
              id: 'c',
              text: 'Insulation',
            },
            {
              id: 'd',
              text: 'Wrapping',
            }
          ],
          correct: 'd'
        },
        {
          id: 7,
          text: 'Lifecycle methods are mainly used ___________.',
          choices: [
            {
              id: 'a',
              text: 'To keep track of event history',
            },
            {
              id: 'b',
              text: 'To enhance components',
            },
            {
              id: 'c',
              text: 'Free up resources',
            },
            {
              id: 'd',
              text: 'None of the above',
            }
          ],
          correct: 'c'
        },
        
      ],
      score: 0,
      current: 1
    }
  }
  setCurrent(current) {
    this.setState({current});
  }
  setScore(score) {
    this.setState({score});
  }
render(){
  return(
    <div>
    <ButtonAppBar />,
    <HorizontalLabelPositionBelowStepper/>
    </div>
  )
}
}

export default App;