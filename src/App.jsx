import React from 'react'
import './App.scss'
import { Cases } from './cases/Cases'
import { SYMPTOMS } from './data'
import Container from '@material-ui/core/Container'
import { Buckets } from './buckets/Buckets'
import calculateRisk from './risk'
import allocateSamples from './sample-allocation/allocate-samples'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentStep: 'CASES',
      cases: [{
        id: 1,
        symptoms: [],
        probability: 0.05
      },
        {
          id: 2,
          symptoms: [SYMPTOMS.COUGH],
          probability: 0.1
        },
        {
          id: 3,
          symptoms: [SYMPTOMS.BREATHING_PROBLEM, SYMPTOMS.FEVER],
          probability: 0.3
        },
        {
          id: 4,
          symptoms: [SYMPTOMS.CLOSE_CONTACT, SYMPTOMS.COMING_FROM_ABROAD],
          probability: 0.2
        },
        {
          id: 5,
          symptoms: [SYMPTOMS.COUGH, SYMPTOMS.COMING_FROM_ABROAD],
          probability: 0.04
        },
        {
          id: 6,
          symptoms: [SYMPTOMS.COUGH, SYMPTOMS.COMING_FROM_ABROAD],
          probability: 0.4
        }
      ],
      buckets: []
    }
  }

  addCase ({ id, symptoms }) {
    console.log(id)
    console.log(symptoms)
    const probability = calculateRisk(symptoms)
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

  calculateBuckets () {
    let buckets = allocateSamples(this.state.cases)
    console.log(buckets)
    this.setState((state, props) => {
      return {
        ...state,
        buckets
      }
    }, () => this.changeStage('BUCKETS'))
  }

  render () {
    if (this.state.currentStep === 'CASES') {
      return (
        <Container className="App">
          <Cases cases={this.state.cases} addCase={this.addCase.bind(this)} calculateBuckets={this.calculateBuckets.bind(this)}/>
        </Container>
      )
    } else {
      return (
        <Container className="App">
          <Buckets buckets={this.state.buckets}/>
        </Container>
      )
    }
  }
}

export default App
