import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import './Bucket.scss'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import { SentimentVerySatisfied, SentimentVeryDissatisfied, HelpOutline } from '@material-ui/icons'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { BucketStatus } from '../sample-allocation/allocate-samples'

export const Buckets = ({ buckets, estimatedNumberOfTests, setBucketStatus, remainedSamples }) => {

  useEffect(() => {
    window.location.hash = '#buckets'
  }, [estimatedNumberOfTests])

  return (
    <div id="buckets">
      <Typography variant="h4">
        Estimated number of tests: {estimatedNumberOfTests}
      </Typography>
      <Typography variant="subtitle1" style={{ marginBottom: 16 }}>
        Total remained samples: {remainedSamples}
      </Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        {buckets.sort((a, b) => a.samples.length > b.samples.length).map((bucket, index) => (

          <Grid item key={index}>
            <Paper elevation={0} className={`${bucket.recalculated ? 'bucket_recalculated' : 'bucket'}`}>
              <Typography variant="h5" component="h2">
                #{bucket.id}
              </Typography>
              <Typography color="textSecondary">
                Probability: {(bucket.probability * 100).toFixed(2)}%
              </Typography>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                spacing={1}
                style={{ padding: '8px 0' }}
              >
                {bucket.samples.map((sample) =>

                  <Grid item key={sample.id}>
                    <Card className='sampleCard'>
                      <CardContent>
                        <Typography variant="h5" component="h3">
                          <Link>{sample.id}</Link>
                        </Typography>
                        <Typography color="textSecondary">
                          Probability: {(sample.probability * 100).toFixed(2)}%
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )}

              </Grid>

              <ButtonGroup
                orientation="vertical"
                fullWidth
                disableRipple
                disableFocusRipple
                size='small'
              >
                <Button
                  variant={bucket.bucketStatus === BucketStatus.NEGATIVE ? 'contained' : 'outlined'}
                  color={bucket.bucketStatus === BucketStatus.NEGATIVE ? 'primary' : 'default'}
                  startIcon={<SentimentVerySatisfied/>}
                  onClick={() => setBucketStatus(bucket.id, BucketStatus.NEGATIVE)}
                  disableElevation

                > No Virus </Button>

                <Button
                  variant={bucket.bucketStatus === BucketStatus.POSITIVE ? 'contained' : 'outlined'}
                  color={bucket.bucketStatus === BucketStatus.POSITIVE ? 'primary' : 'default'}
                  startIcon={<SentimentVeryDissatisfied/>}
                  onClick={() => setBucketStatus(bucket.id, BucketStatus.POSITIVE)}
                  disableElevation
                > Virus found </Button>

                <Button
                  variant={bucket.bucketStatus === BucketStatus.NOT_CHECKED ? 'contained' : 'outlined'}
                  color={bucket.bucketStatus === BucketStatus.NOT_CHECKED ? 'primary' : 'default'}
                  startIcon={<HelpOutline/>}
                  onClick={() => setBucketStatus(bucket.id, BucketStatus.NOT_CHECKED)}
                  disableElevation
                > Not tested </Button>
              </ButtonGroup>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
