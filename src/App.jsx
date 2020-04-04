import React from 'react';
import './App.scss';
import { Cases } from './cases/Cases'

const STEPS = [
  'CASES', 'BUCKETS'
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 'CASES',
      cases: [],
      buckets: []
    };
  }

  addCase ({id, symptoms}) {
    this.setState((state, props) => {
      const cases = state.cases.push({id, symptoms})
      return {
        ...state,
        cases
      }
    })
  }

  updateCase ({id, symptoms}) {
    this.setState((state, props) => {
      const caseIndex = state.cases.findIndex(it => it.id === id)
      const cases = state.cases.splice(caseIndex, 1)
      cases.push({id, symptoms})
      return {
        ...state,
        cases
      }
    })
  }

  changeStage (currentStep) {
    this.setState((state, props) => ({
      ...state,
      currentStep
    }))
  }

  render() {
    return (
      <div className="App">
        <Cases cases={this.state.cases}/>
      </div>
    )
  }
}

export default App;
