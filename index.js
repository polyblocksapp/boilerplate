// Each token will have unique alphanumeric characters
// This hash will be the source of entropy or variation use to determine the output of your algorithm.

console.log(pb.hash);

// The hash becomes a seed of a random number generator.
// We strongly recommends that all artists use pb.random() to feed all of their project's randomness.
console.log(pb.random()); // a random value ranging between 0 and 1 is generated
console.log(pb.random()); // another value will be returned.
