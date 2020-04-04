import React from 'react'
import './App.scss'
import { Cases } from './cases/Cases'
import { SYMPTOMS } from './data'
import Container from '@material-ui/core/Container'
import { Buckets } from './buckets/Buckets'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import calculateRisk from './risk'
import { allocateSamples, BucketStatus } from './sample-allocation/allocate-samples'

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
    const probability = calculateRisk(symptoms)
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
    const buckets = allocateSamples(this.state.cases)
    this.setState((state, props) => {
      return {
        ...state,
        buckets
      }
    }, () => this.changeStage('BUCKETS'))
  }

  setBucketStatus (bucketId, status) {
    this.setState((state, props) => {
      const buckets = state.buckets.slice(0)
      const bucket = buckets.find(bucket => bucket.id === bucketId)
      bucket.status = status
      return {
        ...state,
        buckets
      }
    })
  }

  render () {
    return (
      <div className={'App'}>
        <header>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                <b>Covictory</b>
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <main>
          <Container>
            {this.state.currentStep === 'CASES' && (<Cases cases={this.state.cases} addCase={this.addCase.bind(this)}/>)}

            {(!!this.state.cases.length && this.state.currentStep === 'CASES') && <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
              <Button size="large" color="primary" variant={'contained'} onClick={this.calculateBuckets.bind(this)}>
                Calculate buckets
              </Button>
            </div>}

            {this.state.currentStep === 'BUCKETS' && <Buckets buckets={this.state.buckets} setBucketStatus={this.setBucketStatus.bind(this)}/>}
          </Container>
        </main>
      </div>
    )
  }
}

export default App
