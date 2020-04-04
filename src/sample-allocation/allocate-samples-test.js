const allocate = require('./allocate-samples.js');

function testCombined() {
    let samples = [];
    samples.push(new allocate.Sample(1, 0.07));
    samples.push(new allocate.Sample(2, 0.001));
    samples.push(new allocate.Sample(3, 0.001));
    samples.push(new allocate.Sample(4, 0.001));
    samples.push(new allocate.Sample(5, 0.5));
    samples.push(new allocate.Sample(6, 0.5));
    samples.push(new allocate.Sample(7, 0.04));
    samples.push(new allocate.Sample(8, 0.04));
    let result = allocate.allocateSamples(samples);
    if (result.length !== 4 || result[0].probability !== 0.5 || result[2].samples.length !== 4 || result[3].samples[2]) {
        throw new Error('The Pooling Method algorithm has changed')
    }
}

function testSingleValue() {
    let samples = [];
    samples.push(new allocate.Sample(2, 0.04));
    let result = allocate.allocateSamples(samples);
    if (result.length !== 1 || result[0].samples[0].id !== 2) {
        throw new Error('Allocating a single Sample should produce a single Bucket')
    }
}

function shouldSeparateLargeAndSmallProbabilities() {
    let samples = [];
    samples.push(new allocate.Sample(6, 0.01));
    samples.push(new allocate.Sample(15, 0.7));
    let result = allocate.allocateSamples(samples);
    if (result.length !== 2 || result[0].samples[0].id !== 15 || result[1].samples[0].id !== 6) {
        throw new Error('Large and small probabilities should be separated in different Batches')
    }
}

function shouldEstimateNumberOfTestsForIndividual() {
    let samples = [];
    samples.push(new allocate.Sample(1, 0.999));
    samples.push(new allocate.Sample(2, 0.999));
    samples.push(new allocate.Sample(3, 0.999));
    let buckets = allocate.allocateSamples(samples);
    let result = allocate.estimateNumberOfTests(buckets);
    let expected = samples.length;
    if (result !== expected) {
        throw new Error('Expected each Sample to be in a separated test')
    }
}

function shouldEstimateNumberOfTestsMixed() {
    let samples = [];
    samples.push(new allocate.Sample(1, 0.12));
    samples.push(new allocate.Sample(2, 0.34));
    samples.push(new allocate.Sample(3, 0.56));
    samples.push(new allocate.Sample(4, 0.08));
    samples.push(new allocate.Sample(5, 0.08));
    samples.push(new allocate.Sample(6, 0.08));
    samples.push(new allocate.Sample(7, 0.001));
    samples.push(new allocate.Sample(8, 0.001));
    samples.push(new allocate.Sample(9, 0.001));
    samples.push(new allocate.Sample(10, 0.001));
    let buckets = allocate.allocateSamples(samples);
    let result = allocate.estimateNumberOfTests(buckets);
    if (result !== 4) {
        throw new Error('Expected correct estimated number of tests')
    }
}

testCombined();
testSingleValue();
shouldSeparateLargeAndSmallProbabilities();
shouldEstimateNumberOfTestsForIndividual();
shouldEstimateNumberOfTestsMixed();
