function allocate(samplesParam) {
    let samples = (samplesParam.slice(0));
    let result = [];
    while (!(samples.length === 0)) {
        let bucket = assignNextBucket(samples);

        result.push(bucket);
        bucket.samples.forEach(function (s) {
            samples.splice(samples.indexOf(s), 1);
        });
    }
    return result;
}

function assignNextBucket(samples) {
    samples.sort(function (first, second) {
        return first.p < second.p ? 1
            : first.p > second.p ? -1
                : 0;
    });

    let bucket = new Bucket();
    let freeCapacity = findBestBucketCapacity(samples[0]);
    for (let i = 0; i < samples.length; i++) {
        let s = samples[i];
        if (freeCapacity > 0) {
            bucket.samples.push(s);
            bucket.r *= 1 - s.p;
            freeCapacity--;
        }
    }

    bucket.p = 1 - bucket.r;

    return bucket;
}


function findBestBucketCapacity(sample) {
    const bucketRanges = [
        new BucketProbabilityRange(0.306, 1, 1),
        new BucketProbabilityRange(0.124, 0.306, 3),
        new BucketProbabilityRange(0.066, 0.124, 4),
        new BucketProbabilityRange(0.042, 0.066, 5),
        new BucketProbabilityRange(0.029, 0.042, 6),
        new BucketProbabilityRange(0.021, 0.029, 7),
        new BucketProbabilityRange(0.016, 0.021, 8),
        new BucketProbabilityRange(0.013, 0.016, 9),
        new BucketProbabilityRange(0.011, 0.013, 10),
        new BucketProbabilityRange(0.009, 0.011, 11),
        new BucketProbabilityRange(0.007, 0.009, 12),
        new BucketProbabilityRange(0.006, 0.007, 13),
        new BucketProbabilityRange(0.005, 0.006, 15),
        new BucketProbabilityRange(0.004, 0.005, 16),
        new BucketProbabilityRange(0.003, 0.004, 19),
        new BucketProbabilityRange(0.002, 0.003, 23),
        new BucketProbabilityRange(0.0, 0.002, 32)
    ];
    for (let i = 0; i < bucketRanges.length; i++) {
        let t = bucketRanges[i];
        if (t.isInRange(sample.p)) {
            return t.bestBucketSize;
        }
    }
    console.error("The sample probability is out of range! " + sample.p);
    return 1;
}


const Sample = (function () {
    function Sample(id, p) {
        if (this.id === undefined)
            this.id = null;
        if (this.p === undefined)
            this.p = null;
        this.id = id;
        this.p = p;
    }

    return Sample;
}());
Sample["__class"] = "Sample";

const Bucket = (function () {
    function Bucket() {
        this.id = ++Bucket.numberOfAllBuckets;
        if (this.p === undefined)
            this.p = null;
        if (this.r === undefined)
            this.r = null;
        if (this.samples === undefined)
            this.samples = null;
        this.p = 0.0;
        this.r = 1.0;
        this.samples = [];
    }

    return Bucket;
}());
Bucket.numberOfAllBuckets = 0;
Bucket["__class"] = "Bucket";

const BucketProbabilityRange = (function () {
    function BucketProbabilityRange(minimumm, maximum, bestBucketSize) {
        if (this.minimum === undefined)
            this.minimum = 0;
        if (this.maximum === undefined)
            this.maximum = 0;
        if (this.bestBucketSize === undefined)
            this.bestBucketSize = 0;
        this.minimum = minimumm;
        this.maximum = maximum;
        this.bestBucketSize = bestBucketSize;
    }

    BucketProbabilityRange.prototype.isInRange = function (p) {
        return this.minimum <= p && p < this.maximum;
    };
    return BucketProbabilityRange;
}());
BucketProbabilityRange["__class"] = "BucketProbabilityRange";
