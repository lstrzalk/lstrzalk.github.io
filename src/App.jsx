import React from 'react'
import './App.scss'
import { Cases } from './cases/Cases'
import { STEPS } from './data'
import Container from '@material-ui/core/Container'
import { Buckets } from './buckets/Buckets'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import calculateRisk from './risk'
import { allocateSamples, BucketStatus, Bucket, estimateNumberOfTests } from './sample-allocation/allocate-samples'
import { Summary } from './summary/Summary'
import { demoCases } from './demoCases'
import logo from './smartTestLogo.png'
import Paper from '@material-ui/core/Paper/Paper'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentStep: STEPS.CASES,
      cases: [],
      buckets: []
    }
  }

  addDemoCases () {
    this.setState((state, props) => {
      return {
        ...state,
        cases: demoCases
      }
    })
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

  removeCase (id) {
    this.setState((state, props) => {
        const cases = this.state.cases
        return {
          ...state,
          cases: cases.filter((c) => c.id !== id)
        }
      }
    )
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
      newBucket.recalculated = true
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

  remainedSamples () {
    return this.state.buckets.reduce((prev, curr) => prev + curr.samples.length, 0)
  }

  render () {
    return (
      <div className={'App'}>
        <header>
          <AppBar position="static" color='transparent'>
            <Toolbar>
              <img src={logo} alt="logo" style={{ width: '64px', margin: '0 16px 0 0' }}/>
              <Typography variant="h4">
                SmartTest
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <main>
          <Container>
            {this.state.currentStep === STEPS.CASES && (
              <Cases cases={this.state.cases} addCase={this.addCase.bind(this)} addDemoCases={this.addDemoCases.bind(this)}
                     removeCase={this.removeCase.bind(this)}/>)}

            {(!!this.state.cases.length && this.state.currentStep === STEPS.CASES) &&
            <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
              <Button size="large" color="secondary" variant={'contained'} onClick={this.calculateBuckets.bind(this)}>
                Calculate buckets
              </Button>
            </div>}

            {this.state.currentStep === STEPS.BUCKETS && <Buckets
              buckets={this.state.buckets}
              setBucketStatus={this.setBucketStatus.bind(this)}
              remainedSamples={this.remainedSamples()}
              estimatedNumberOfTests={estimateNumberOfTests(this.state.buckets)}
            />}

            {(!!this.state.cases.length && this.state.currentStep === STEPS.BUCKETS) &&
            <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
              <Button size="large" color="secondary" variant={'contained'} onClick={this.recalculateBuckets.bind(this)}>
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
