import React from 'react'
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

export const Buckets = ({ buckets, setBucketPositive, setBucketNegative }) => (
  <div>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={4}
    >
      {buckets.map((bucket, index) => (

        <Grid item key={index}>
          <Paper elevation={0} className={'bucket'}>
            <Typography variant="h5" component="h2">
              #{bucket.id}
            </Typography>
            <Typography color="textSecondary">
              Probability: {(bucket.probability*100).toFixed(2)}%
            </Typography>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              spacing={1}
              style={{padding: "8px 0"}}
            >
              {bucket.samples.map((sample) =>

                <Grid item key={sample.id}>
                  <Card className='sampleCard'>
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        <Link>{sample.id}</Link>
                      </Typography>
                      <Typography color="textSecondary">
                        Probability: {(sample.probability*100).toFixed(2)}%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

              )}

            </Grid>

            <ButtonGroup
              orientation="vertical"
              fullWidth
            >
              <Button fullWidth variant="outlined" size={'small'} startIcon={<SentimentVerySatisfied/>}> No Virus</Button>
              <Button fullWidth variant="outlined" size={'small'} startIcon={<SentimentVeryDissatisfied/>}> Virus found</Button>
              <Button fullWidth variant="outlined" size={'small'} startIcon={<HelpOutline/>}> Not tested</Button>
            </ButtonGroup>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </div>
)
