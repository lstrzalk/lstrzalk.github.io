import React from 'react'
import './App.scss'
import { Cases } from './cases/Cases'
import { SYMPTOMS, STEPS } from './data'
import Container from '@material-ui/core/Container'
import { Buckets } from './buckets/Buckets'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import calculateRisk from './risk'
import { allocateSamples, BucketStatus, Bucket } from './sample-allocation/allocate-samples'
import { Summary } from './summary/Summary'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentStep: STEPS.CASES,
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

  resetState () {
    this.setState(() => ({
      currentStep: STEPS.CASES,
      cases: [],
      buckets: []
    }))
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
    }, () => this.changeStage(STEPS.BUCKETS))
  }

  recalculateBuckets () {
    const buckets = Array.from(this.state.buckets)
    const positiveBuckets = buckets.filter(bucket => bucket.bucketStatus === BucketStatus.POSITIVE && bucket.samples.length > 1)
    const notCheckedBuckets = buckets.filter(bucket => bucket.bucketStatus === BucketStatus.NOT_CHECKED)

    const samplesFromPositiveBuckets = positiveBuckets.flatMap(bucket => bucket.samples.map(sample => {
      const newBucket = new Bucket()
      newBucket.samples.push(sample)
      newBucket.probability = sample.probability / bucket.probability
      sample.probability = newBucket.probability
      return newBucket
    }))

    const newBuckets = [
      ...notCheckedBuckets,
      ...samplesFromPositiveBuckets
    ]

    if (!!newBuckets.length) {
      this.setState((state, props) => {
        return {
          ...state,
          buckets: newBuckets
        }
      })
    } else {
      this.changeStage(STEPS.SUMMARY)
    }
  }

  setBucketStatus (bucketId, status) {
    this.setState((state, props) => {
      const buckets = Array.from(state.buckets)
      const bucket = buckets.find(bucket => bucket.id === bucketId)
      bucket.bucketStatus = status
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
            {this.state.currentStep === STEPS.CASES && (<Cases cases={this.state.cases} addCase={this.addCase.bind(this)}/>)}

            {(!!this.state.cases.length && this.state.currentStep === STEPS.CASES) &&
            <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
              <Button size="large" color="primary" variant={'contained'} onClick={this.calculateBuckets.bind(this)}>
                Calculate buckets
              </Button>
            </div>}

            {this.state.currentStep === STEPS.BUCKETS && <Buckets buckets={this.state.buckets} setBucketStatus={this.setBucketStatus.bind(this)}/>}

            {(!!this.state.cases.length && this.state.currentStep === STEPS.BUCKETS) &&
            <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
              <Button size="large" color="primary" variant={'contained'} onClick={this.recalculateBuckets.bind(this)}>
                Proceed
              </Button>
            </div>}

            {this.state.currentStep === STEPS.SUMMARY && <Summary callback={this.resetState.bind(this)}/>}
          </Container>
        </main>
      </div>
    )
  }
}

export default App
