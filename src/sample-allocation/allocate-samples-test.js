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
    let expected = '[{"id":1,"probability":0.5,"reverseProbability":0.5,"samples":[{"id":5,"probability":0.5}]},{"id":2,"probability":0.5,"reverseProbability":0.5,"samples":[{"id":6,"probability":0.5}]},{"id":3,"probability":0.1437690880000001,"reverseProbability":0.8562309119999999,"samples":[{"id":1,"probability":0.07},{"id":7,"probability":0.04},{"id":8,"probability":0.04},{"id":2,"probability":0.001}]},{"id":4,"probability":0.001998999999999973,"reverseProbability":0.998001,"samples":[{"id":3,"probability":0.001},{"id":4,"probability":0.001}]}]';
    if (JSON.stringify((result)) !== expected) {
        console.info(JSON.stringify(result));
        console.info(expected);
        throw new Error('The Pooling Method algorithm has changed')
    }
}

function testSingleValue() {
    let samples = [];
    samples.push(new allocate.Sample(1, 0.04));
    let result = allocate.allocateSamples(samples);
    // console.info(result);
    let expected = '[{"id":5,"probability":0.040000000000000036,"reverseProbability":0.96,"samples":[{"id":1,"probability":0.04}]}]';
    if (JSON.stringify((result)) !== expected) {
        console.info(JSON.stringify(result));
        console.info(expected);
        throw new Error('Allocating a single Sample should produce a single Bucket')
    }
}

function shouldSeparateLargeAndSmallProbabilities() {
    let samples = [];
    samples.push(new allocate.Sample(1, 0.01));
    samples.push(new allocate.Sample(1, 0.7));
    let result = allocate.allocateSamples(samples);
    let expected = '[{"id":6,"probability":0.7,"reverseProbability":0.30000000000000004,"samples":[{"id":1,"probability":0.7}]},{"id":7,"probability":0.010000000000000009,"reverseProbability":0.99,"samples":[{"id":1,"probability":0.01}]}]';
    if (JSON.stringify((result)) !== expected) {
        console.info(JSON.stringify(result));
        console.info(expected);
        throw new Error('Large and small probabilities should be separated in different Batches')
    }
}

testCombined();
testSingleValue();
shouldSeparateLargeAndSmallProbabilities();
