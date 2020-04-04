import React from 'react'
import './App.scss'
import { Cases } from './cases/Cases'
import { SYMPTOMS } from './data'
import Container from '@material-ui/core/Container'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentStep: 'CASES',
      cases: [{
        id: 1,
        symptoms: [],
        probability: 0
      },
        {
          id: 2,
          symptoms: [SYMPTOMS.COUGH],
          probability: 10
        }
      ],
      buckets: []
    }
  }

  addCase ({ id, symptoms }) {
    console.log(id)
    console.log(symptoms)
    const probability = 50
    this.setState((state, props) => {
      const cases = [...state.cases, { id, symptoms, probability }]
      return {
        ...state,
        cases
      }
    })
  }

  updateCase ({ id, symptoms }) {
    const probability = 50
    this.setState((state, props) => {
      const caseIndex = state.cases.findIndex(it => it.id === id)
      const cases = state.cases.splice(caseIndex, 1)
      cases.push({ id, symptoms, probability })
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

  render () {
    return (
      <Container className="App">
        <Cases cases={this.state.cases} addCase={this.addCase.bind(this)}/>
      </Container>
    )
  }
}

export default App
